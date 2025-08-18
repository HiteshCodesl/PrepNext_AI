"use client"
import { Button } from '@/components/ui/button'
import { useUser } from '@clerk/nextjs'
import { Plus } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import axios from "axios"
import { useRouter } from 'next/navigation'

export function AddInterview() {

  const {isSignedIn, user} = useUser();
  const router = useRouter();

  const dbUser = async() =>{
    const response = await axios.post("/api/users");
    
    if(response){
      console.log(response)
     router.push('/dashboard/interview')
    }
  }
  
  return (
   <div>
  
     <section className=' glass-card glow-primary mt-10 flex justify-start sm:w-full  md:w-[70vw] mx-auto  max-w-screen-lg p-10 rounded-2xl '>
         <div className='gap-5 flex flex-col  md:px-10'
         >
            <h2 className='text-white sm:font-light md:font-medium sm:text-xs md:text-xl lg:text-2xl'>Get Interview-Ready with AI-Powered Practice & FeedBack</h2>

            <p className='text-white sm:text-xs md:text-md'>Practice real interview questions & get instant feedback</p>
                
            { !isSignedIn || !user ?
            <Link href={"/sign-in"} >
               <Button className='btn-primary max-w-sm '><Plus />Start an Interview</Button>
            </Link> :
                <Button onClick={() =>{
                  dbUser();
                }}  className='btn-primary max-w-sm '><Plus />Start an Interview</Button>
             }
         </div>
            <Image src={'/robot.png'} height={200} width={200} alt='robo' className='hidden md:flex'/>         
          
     </section>
     </div>
)
}

