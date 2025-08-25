import React from 'react'
import dayjs from "dayjs"
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { getRandomInterviewCover } from '@/app/config';
import { Calendar, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Loader } from 'next/dynamic';

export interface InterviewCardProps {
  id?: string;
  sessionId: string;
  userId?: string;
  role: string;
  type: string;
  techstack: string[];
  createdAt?: string;
}

interface Feedback {
  id: string;
  interviewId: string;
  totalScore: number;
  categoryScores: Array<{
    name: string;
    score: number;
    comment: string;
  }>;
  strengths: string[];
  areasForImprovement: string[];
  finalAssessment: string;
  createdAt: string;
}

export function InterviewCard({sessionId, role, type, techstack, createdAt}: InterviewCardProps) {

     const feedback = null as Feedback | null;
     const formattedDate = dayjs(feedback?.createdAt || createdAt || Date.now()).format('MMM D, YYYY')
 
     return (
     
     <div className='glass-card rounded-xl hover-lift card-dark'>
        
         <div className='absolute top-0 right-0 px-4  py-2 rounded-lg w-fit bg-light-600'>
            <Badge variant={'secondary'}>{type}</Badge>
         </div>

         <Image src={getRandomInterviewCover()} alt='cover'  height={40} width={40} className='rounded-full object-contain size-[60px] m-2' />
 
          <h3 className='mt-8 capitalize text-primary m-2 text-poppins'>{role} Interview</h3>

        <div className='flex gap-8 items-center'>

          <div className='flex items-center gap-3'>
             <Calendar className='text-white ml-4' size={14}/>
             <p className='text-white'>{formattedDate}</p>
          </div>

          <div className='flex items-center gap-2'>
            <Star  className='text-white size-4' />
            <p className='text-white'>{feedback?.totalScore || "---/100"}</p>
           </div>

          </div>

          <div className=' mt-7 m-4'>
            
            <div className='flex gap-4'>{techstack.map((tech, index)=>(
              <p key={index} className='text-primary text-xs flex-wrap'>{tech}</p>
            ))}
            </div>

            <Button className='rounded-lg mt-4 flex mx-auto btn-accent'>
              <Link href={feedback ? 
                `dashboard/interview/${sessionId}/feedback`
                : `dashboard/interview/${sessionId}`
              }>
                {feedback ? 'Check Feedback' : 'Take Interview'}
              </Link>
            </Button>
          </div>

    
    </div> 
  )
}

