import prismaClient from "@/app/config/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest){
     const user = await  currentUser();
       if(!user) return;

    const userId = user.id;

    try{
    const resume = await prismaClient.resume.findMany({
        where: {
            userId: userId
        },
        orderBy: {
          id: 'desc'
        }
    })

    if(!resume){
      return NextResponse.json("cannot fetch resume")
    }

    return NextResponse.json({resume});

   } catch(error){
    console.log(error);
   }
}