"use client"
import React, { useState } from 'react'
import { resumes } from '../constants'
import { ResumeCard } from './components/ResumeCard'
import { Button } from '@/components/ui/button'
import { ResumeDialog } from './components/ResumeDialog'

export default function page() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='text-white h-[150vh]'>

         <section className="p-20 px-4 sm:px-6 lg:px-8 relative mt-10 ">
          <div className='py-5 md:py-10 px-3 md:px-20 lg:px-40 lg:py-14 rounded-xl border border-dashed flex flex-col gap-2 max-w-screen-lg mx-auto'>
            <p className='text-center'>You don't Uploaded any resume</p>
           <Button onClick={() => setIsOpen(true)} className='btn-primary w-[200px] md:w-[400px] flex mx-auto'>Upload your Resume</Button>
          </div>
          </section>

          <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 mb-10 mx-10 lg:mx-28'>
             {resumes.map((resume)  =>(              
                <ResumeCard key={resume.id} {...resume} />
             ))}
          </section>
          <ResumeDialog isOpen={isOpen} setIsOpen={setIsOpen}/>
    </div>

  )
}

  