"use client"
import React, { useEffect, useRef, useState } from 'react'
import { AddInterview } from './_components/AddInterview'
import { InterviewCard, InterviewCardProps } from './_components/InterviewCard'
import axios from 'axios'
import { Loader } from './_components/Loading'
import { useUser } from '@clerk/nextjs'

type Interview = {
  id: string;
  sessionId: string;
  role: string;
  level: string;
  coverImage: string;
  type: string;
  techstack: string[];
  questions: string[];
  createdAt: string;
  finalized: boolean;
};

export default function page() {

  const [interviewData, setInterviewData] = useState<Interview[]>([]);
  const [isLoading , setIsLoading] = useState(false);
  const {user, isSignedIn} = useUser()

  useEffect(() =>{
    setIsLoading(true);
    const getCards = async() =>{
      try{
      const response = await axios.get('/api/gemini/generate')
      
      if(response){
        const data = response.data.interviews;
        setInterviewData(data);
        setIsLoading(false);
      }
    } catch(error){
      console.log(error);
   }
  }
   getCards();
  }, [isSignedIn])

  return (
    <div className='mt-28 mx-5 mb-18 h-[150vh]'>
       <AddInterview />

     <section className='mt-10 md:w-[70vw] lg:max-w-[60vw] mx-auto'>
         <h2 className='text-primary text-xl lg:text-2xl font-poppins my-5'>Your Interviews</h2>

         {!user && interviewData.length === 0 ?
         <p className='text-accent text-lg'>You dont have any interviews created yet.....</p> :
         isLoading ? <Loader /> : 
         <div className='gap-6 md:gap-12 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-[300px] mb-10'>
          {interviewData.map((interview)=>(
           <InterviewCard key={interview.id} {...interview}
           /> 
        ))} 
         </div> 
       }
      

     </section>

    </div>
  )
}
