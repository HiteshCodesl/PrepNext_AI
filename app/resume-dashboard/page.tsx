"use client"
import React, { useEffect, useState } from 'react'
import { ResumeCard } from './components/ResumeCard'
import { Button } from '@/components/ui/button'
import { ResumeDialog } from './components/ResumeDialog'
import axios from 'axios'
import { useUser } from '@clerk/nextjs'

export default function page() {
  const [isOpen, setIsOpen] = useState(false);
  const [ resumeData, setResumeData ] = useState<Resume[] | null>(null);
  const { user, isSignedIn} = useUser();

  useEffect(() =>{
     const fetchResumes = async() => {
     const response = await axios.get('/api/resume/fetchResumes')

     if(response){
      const data = response.data.resume;
      console.log(data);
      console.log(response.data.resume[0].feedback[0].overallScore)
      setResumeData(data);
     }
  }
  fetchResumes();
  }, [isSignedIn])
 

  return (
    <div className='text-white h-[150vh]'>

         <section className="p-20 px-4 sm:px-6 lg:px-8 relative mt-10 ">
          <div className='py-5 md:py-10 px-3 md:px-20 lg:px-40 lg:py-14 rounded-xl border border-dashed flex flex-col gap-2 max-w-screen-lg mx-auto'>
            <p className='text-center'>You don't Uploaded any resume</p>
           <Button onClick={() => setIsOpen(true)} className='btn-primary w-[200px] md:w-[400px] flex mx-auto'>Upload your Resume</Button>
          </div>
          </section>


          {user && resumeData ? 

          <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 mb-10 mx-10 lg:mx-28'>
             {resumeData.map((resume)  =>(              
                <ResumeCard key={resume.id} id={resume.id} companyName={resume.companyName} jobTitle={resume.jobTitle}  feedback={resume.feedback}/>
             ))}
           </section>
          : <p className='text-lg text-primary mx-10'>You dont have any Resume Scanned</p>
          }

          <ResumeDialog isOpen={isOpen} setIsOpen={setIsOpen}/>
     </div>

  )
}

  