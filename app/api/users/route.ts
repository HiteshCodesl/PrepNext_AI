import { prismaClient } from "../../config/prisma";
import { auth, currentUser } from "@clerk/nextjs/server"; 
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
    const user = await currentUser();

    const email = user?.primaryEmailAddress?.emailAddress;
    const name = user?.fullName ?? "Anonyoms";
    const clerkId = user?.id || '';

    if(!email){
        return NextResponse.json("Email does not Exists")
    }
    
    try{
    const AlreadyUser = await prismaClient.user.findUnique({
        where: {
            email: email
        }
    })

    if(!AlreadyUser){
        const user = await prismaClient.user.create({
            data: {
                email, name, clerkId 
            }
        })
        return NextResponse.json({user})
    }

    return NextResponse.json("User Already Exists")

    }catch(e){
    return NextResponse.json({"error": e })
  }
}