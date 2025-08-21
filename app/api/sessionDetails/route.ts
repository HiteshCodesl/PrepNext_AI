import prismaClient from "@/app/config/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest){

    const {searchParams} = new URL(req.url);
    const sessionId = searchParams.get("sessionId");

    if(!sessionId){
        return NextResponse.json("sessionId is missing")
    }
    const response = await prismaClient.interview.findUnique({
        where:{ sessionId }
    })
    if(!response){
        return NextResponse.json("sessionId is not valid")
    }
    return NextResponse.json(response);
}