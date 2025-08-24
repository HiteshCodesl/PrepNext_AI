import { AIResponseFormat, prepareInstructions } from "@/app/constants";
import { prismaClient } from "@/prisma/src";
import { google } from "@ai-sdk/google";
import { currentUser } from "@clerk/nextjs/server";
import { generateText } from "ai";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest){
      const user = await  currentUser();
       if(!user) return;

      const {company, jobTitle, jobDescription, path } = await request.json();
  
    try{
    const airesponse = await generateText({
       model: google('gemini-2.0-flash-001'),
       prompt: `You are an expert in ATS (Applicant Tracking System) and resume analysis.
              Please analyze and rate this resume and suggest how to improve it ${path}
             The rating can be low if the resume is bad.
             Be thorough and detailed. Don't be afraid to point out any mistakes or areas for improvement.
             If there is a lot to improve, don't hesitate to give low scores. This is to help the user to improve their resume.
             If available, use the job description for the job user is applying to to give more detailed feedback.
             If provided, take the job description into consideration.
             The job title is: ${jobTitle}
             The job description is: ${jobDescription}
             Provide the feedback using the following format:
             ${AIResponseFormat}
             Return the analysis as an JSON object, big request- without any other text and without the backticks dont start with any backticks dont include json with backticks or special characters in front and back.
             Do not include any other text or comments.`
    })


    if(!airesponse){
      return NextResponse.json("response not generated");
    }

    let text = airesponse.steps[0].content[0].text;

    if (text.startsWith("```")) {
     text = text.replace(/```json|```/g, "").trim();
     }

     let parsed = JSON.parse(text);
    const result = await prismaClient.resume.create({
         data:{
            company: company,
            jobTitle: jobTitle,
            jobDescription: jobDescription,
            image: path,
            feedback: [parsed],
            userId: user.id,
         }
    })

    if(result){
        return NextResponse.json({result})
    }

    }catch(error){
        console.log(error);
        return NextResponse.json("error while preparing a questions")
    }
}

export async function GET(request:NextRequest){

  try{
   const {searchParams} = new URL(request.url);
   const id = searchParams.get('id');

   if(!id){
     return NextResponse.json(  
      { error: "id is missing in query params" },
      { status: 400 })
   }

   const user = await prismaClient.resume.findUnique({
    where: { id : id}
   })

   if(!user){
    return NextResponse.json("Data is not Fetched")
   }

   return NextResponse.json(user);

  }catch(error){
    console.log(error)
  }
}
