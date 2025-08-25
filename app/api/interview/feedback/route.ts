import prismaClient from "@/app/config/prisma";
import { feedbackSchema } from "@/app/constants";
import { google } from "@ai-sdk/google";
import { generateObject } from "ai";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest){
   const {sessionId, messages} = await req.json();

   const transcript = messages.map(m => `${m.role}: ${m.content}`).join("\n")


   try{
     const { object: {totalScore, categoryScores, strengths, areasForImprovement, finalAssessment} } = await generateObject({
        model: google('gemini-2.0-flash-001'),
        schema: feedbackSchema,
        prompt:  `
        You are an AI interviewer analyzing a mock interview. Your task is to evaluate the candidate based on structured categories. Be thorough and detailed in your analysis. Don't be lenient with the candidate. If there are mistakes or areas for improvement, point them out.
        Transcript:
        ${transcript}
        Please score the candidate from 0 to 100 in the following areas. Do not add categories other than the ones provided:
        - **Communication Skills**: Clarity, articulation, structured responses.
        - **Technical Knowledge**: Understanding of key concepts for the role.
        - **Problem-Solving**: Ability to analyze problems and propose solutions.
        - **Cultural & Role Fit**: Alignment with company values and job role.
        - **Confidence & Clarity**: Confidence in responses, engagement, and clarity.
        `,
      system:
        "You are a professional interviewer analyzing a mock interview. Your task is to evaluate the candidate based on structured categories",
     })

    
     const dbFeedback = await prismaClient.interview.update({
        where: {
            sessionId: sessionId
        },
        data: {
            feedback: [totalScore, categoryScores, strengths, areasForImprovement, finalAssessment]
        }
     })
     
     if(!dbFeedback){
        console.log("feedback is not uploaded to interview schema")
     }

       return NextResponse.json({
        success: true,
        feedbackId: dbFeedback.sessionId
       }) 

   }catch(error){
    console.log(error)
   }
}