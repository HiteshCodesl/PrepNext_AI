"use client"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

import { Input } from "@/components/ui/input"
import axios from "axios"
import { ArrowRight, RotateCw } from "lucide-react"
import { useEffect, useState } from "react"

type Props = {
    isOpen: boolean,
    setIsOpen: (isOpen:boolean) => void
}
export function StartInterviewDialog({isOpen, setIsOpen}: Props) {

   const [role, setRole] = useState("");
   const [level, setLevel] = useState("");
   const [techstack, setTechStack] = useState<string[]>([]);
   const [currentTechStack, setCurrentTechStack] = useState("");
   const [type, setType] = useState("");
   const [amount, setAmount] = useState("");
   const [loading, setLoading] = useState(false);

   useEffect(() =>{
        if(currentTechStack.trim() !== ""){
         const arr = currentTechStack.split(',').map(item => item.trim());
         setTechStack(arr);
        }
   }, [currentTechStack])

   const StartInterview = async() => {
    setLoading(true);
    const data = {role, level, techstack, type, amount}
      const response = await axios.post('/api/gemini/generate',data)

      if(response){
        console.log(response);
        setLoading(false);
        setRole('');
        setLevel('')
        setTechStack([])
        setType('')
        setAmount('')
      }
   }

  return (
    <div>
<AlertDialog open={isOpen}>

  <AlertDialogContent className="bg-[#0a0a0a]">

    <AlertDialogHeader>

      <AlertDialogTitle className="text-primary font-bold text-xl flex justify-center">Add a basic fields</AlertDialogTitle>
      
      <p className="text-primary font-semibold">
      Enter Your Role
      </p>
      <Input
       value={role} 
       onChange={(e) => setRole(e.target.value)} 
       type="text" 
       placeholder="ex.Full stack developer" 
       className="text-white font-semibold text-lg" 
       />

      <p 
      className="text-primary font-semibold ">
      Enter a Experience
      </p>
      <Input 
      value={level} 
      onChange={(e) => setLevel(e.target.value)} 
      type="text" 
      placeholder="ex.Fresher" 
      className="text-white font-semibold text-lg" 
      />

      <p 
      className="text-primary font-semibold ">
      Enter a Techstack
      </p>
      <Input 
      value={techstack} 
      onChange={(e) => setCurrentTechStack(e.target.value)} 
      type="text" 
      placeholder="ex.Nextjs, prisma, postgres" 
      className="text-white font-semibold text-lg" 
      />

      <p 
      className="text-primary font-semibold ">
      Enter Interview type
      </p>
      <Input 
      value={type} 
      onChange={(e) => setType(e.target.value)} 
      type="text" 
      placeholder="ex.Technical,behaveral,mixed" 
      className="text-white font-semibold text-lg" 
      />

      <p 
      className="text-primary font-semibold ">
      How many question do you want ?
      </p>
      <Input 
      value={amount} 
      onChange={(e) => setAmount(e.target.value)} 
      type="number" 
      className="text-white font-semibold text-lg" 
      />

    </AlertDialogHeader>
    <AlertDialogFooter>

      <AlertDialogCancel className="btn-secondary" onClick={() => setIsOpen(false)}>Cancel</AlertDialogCancel>

      <AlertDialogAction onClick={StartInterview} className="btn-primary">Continue{loading ? <RotateCw className="animate-spin" /> : <ArrowRight />}</AlertDialogAction>

    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
    </div>
  )
}

