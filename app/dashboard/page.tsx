import React from 'react'
import { AddInterview } from './_components/AddInterview'
import { dummyInterviews } from '../constants'
import { InterviewCard } from './_components/InterviewCard'

export default function page() {
  return (
    <div className='mt-28 mx-5'>
       <AddInterview />

     <section className='mt-10 md:w-[70vw] lg:max-w-[60vw] mx-auto'>
         <h2 className='text-primary  text-xl lg:text-2xl font-poppins my-5'>Your Interviews </h2>
         <p className='text-white'>You dont't have any interviews yet</p>
     </section>

     <section className='mt-10 md:w-[70vw] lg:max-w-[60vw] mx-auto'>
         <h2 className='text-primary text-xl lg:text-2xl font-poppins my-5'>Take an Interview</h2>

         <div className='gap-6 md:gap-12 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-[300px] '>
          {dummyInterviews.map((interview)=>(
           <InterviewCard key={interview.id}  {...interview} />
         ))}</div>

     </section>

    </div>
  )
}
