import { NextRequest, NextResponse } from "next/server";
import { generateText } from "ai"
import {google} from "@ai-sdk/google"
import prismaClient from "@/app/config/prisma";
import { getRandomInterviewCover } from "@/app/config";
import { currentUser } from "@clerk/nextjs/server";

export async function POST(request:NextRequest){

       const user = await currentUser();
       const clerkId = user?.id;

      const response = await prismaClient.user.findUnique({
        where: {
            clerkId: clerkId
        }
      })
      const userId = response?.id || "";

    const {amount, techstack, role, level, type } = await request.json();
  
    const prompt = `Prepare a questions for a job interview.
    The job role is ${role}.
    The job experience level is ${level}.
    The tech stack used in the job is ${techstack}.
    The focus of question should lean towards the ${type}.
    The amount of questions required is ${amount}.
    Please return only the questions, without any additional text.
    This questions are read by the voice assistant so don't use any "/" or "*" or (\`) or an special characters might that break a voice assitant or dont use backticks.
    Return the question formatted in array like this:
    ["Question1", "Question2", "Question3"]`

    try{
    const {text:questions} = await generateText({
       model: google('gemini-2.0-flash-001'),
       prompt: prompt
    })

    const interview = await prismaClient.interview.create({
       data: {
          role: role,
          coverImage: getRandomInterviewCover(),
          level: level,
          questions: JSON.parse(questions),
          techstack: techstack,
          finalized: false,
          userId: userId,
          type: type,
          createdAt: new Date().toISOString()
       }
    })
    if(interview){
        return NextResponse.json({interview});
    }

    }catch(error){
        console.log(error);
        return NextResponse.json("error while preparing a questions")
    }
}

export async function GET(request: NextRequest){

const user = await currentUser();

if(!user){return};

const clerkId = user.id;

   try{
     const response = await prismaClient.user.findUnique({
        where: {
            clerkId: clerkId
        },
        include: {
            interviews: {
                orderBy: {
                    createdAt: "desc"
                }
            }
        }
     })
    if (!response) {
      return NextResponse.json({ error: "User not found in database" },
      { status: 404 }
      );
    }
      return NextResponse.json(response)

    }catch(error){
    console.log(error)
   }
}