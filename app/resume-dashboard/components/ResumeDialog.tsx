"use client"
import {
 AlertDialog,
 AlertDialogHeader,
 AlertDialogTitle,
 AlertDialogContent
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { ScanLine } from "lucide-react";
import { FileUploader } from "./FileUploader";
import { useState } from "react";
import axios from "axios";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

type DialogProp = {
    isOpen: boolean,
    setIsOpen: (isOpen: boolean) => void;
}

type DataProp = {
   company: string,
   jobTitle: string,
   jobDescription: string,
   file: File | null
}

export function ResumeDialog({isOpen, setIsOpen}: DialogProp){
    const [file, setFile] = useState<File | null>(null);
    const [company, setCompany] = useState("");
    const [jobTitle, setJobTitle] = useState("");
    const [jobDescription, setJobDescription] = useState("");
    const [statusText, setStatusText] = useState("");
    const [isProcessing, setIsProcessing] = useState(false);
   const [data, setData ] = useState(null);
    const {isSignedIn, user} = useUser();
    const router = useRouter();

    const dbUser = async() =>{
      const user = await axios.post("/api/users");
    }
 
    const handleAnalyse = async() =>{
       if(!file) return;
       const path = file.path;

       const data  = {path, company, jobDescription, jobTitle}

       const result = await axios.post("/api/resume/analyse", data );

       if(result){
        console.log(result.data)
        const data = result.data;
        const id = data.result.id;
        console.log(id);
        router.replace(`/resume-dashboard/feedback/${id}`)
       }        
      }

    const handleFileSelect = (file: File | null) =>{
                setFile(file);
    }

  return (
  <div>
    <AlertDialog open={isOpen}>
      <AlertDialogContent className="bg-[#0a0a0a]">
        <AlertDialogHeader>
            <AlertDialogTitle className="text-primary">Tell More About You</AlertDialogTitle>
        </AlertDialogHeader>

             <h2 className="text-primary">Company Name</h2>
             <Input value={company} onChange={(e) => setCompany(e.target.value)} className="text-white" />

             <h2 className="text-primary">Job Title</h2>
             <Input value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} className="text-white" />

            <h2 className="text-primary">Job Requirement</h2>
             <Input value={jobDescription} onChange={(e) => setJobDescription(e.target.value)} className="text-white" />

             <p className="text-primary">Upload a Resume</p>
             <div>
                 <FileUploader onFileSelect={handleFileSelect}/>
             </div>

             <div className="flex gap-4 justify-end">
             <Button onClick={() => setIsOpen(false)} className="rounded-xl">cancel</Button>

             {isSignedIn && user ?(
             <Button onClick={handleAnalyse} className="btn-primary w-[150px]">Analyze <ScanLine /></Button>) :
            ( <Button onClick={dbUser} className="btn-primary w-[150px]">Analyze <ScanLine className="animate-ping" /></Button>)
             }
             </div>

      </AlertDialogContent>
    </AlertDialog>
    </div>
  )
}

