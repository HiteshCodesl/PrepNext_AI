"use client"
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

enum CallStatus  {
  InActive = "Inactive",
  Active = "ACTIVE",
  Finished = "FINISHED",
  Connecting = "CONNECTING"
}

export function Agent() {
   const [isSpeaking, setIsSpeaking] = useState(false);
   const [callStatus, setCallStatus] = useState<CallStatus>(CallStatus.Active)
   const messages = [
    "Hi, whats your name",
    "Thanks for connecting with us" 
  ]
  const lastMessage = messages[messages.length - 1];

  return (
    <div className="md:mt-40  mx-20  glass-card card-dark  flex flex-col  max-w-screen-md lg:flex lg:mx-auto">

    <div className=" hover:snap-none sm:flex sm:flex-col justify-around lg:mx-auto md:flex md:flex-row sm:mt-10 max-w-screen-md md:gap-4 lg:gap-24">
        
      <div className="border border-black md:h-[300] md:w-[250] my-10 rounded-xl flex flex-col glow-primary sm:h-[100] sm:w-[150] ">
       
       <Image src={"/interviewer2.png"}   width={50} height={50} alt={"ai-agent"} color="white" className="rounded-full border bg-white size-18  object-contain mx-auto mt-10 "/>

       <p className="text-primary mt-5 text-lg text-center">AI Interviewer</p>

       </div>

      <div className="border border-black md:h-[300] md:w-[250]  my-10 rounded-xl flex flex-col glow-primary sm:h-[100] sm:w-[150]">  
        
         <Image src={"/user2.png"}   width={50} height={50} alt={"ai-agent"} color="white" className=" size-20 object-contain rounded-full mx-auto mt-6 "/>

         <p className="text-primary mt-2 text-lg text-center">You</p>
       
      </div>
     </div> 

    {messages.length > 0 && (
       <div className="flex justify-center bg-gradient-to-r from-violet-700 to-purple-600 my-7 mx-7 py-5 rounded-xl text-white px-4">
          <p className={cn ('transition-opacity duration-500 opacity-0', 'animate-fadeIn opacity-100')}>{lastMessage}</p>
       </div> 
    )}

    <div className="flex justify-center mb-5">
      {callStatus !== CallStatus.InActive ? ( 
        <Button 
        className={`hover:opacity-85 w-[200px] rounded-xl
        ${CallStatus.InActive || CallStatus.Finished ? 'bg-gradient-to-r from-green-600 to-emerald-600' : 'bg-yellow-500'} `}>

          <span>
            {callStatus === CallStatus.InActive || callStatus === CallStatus.Finished ? "Call" : '...'}
          </span>
        </Button>

      ) : (
        <Button className= "hover:bg-red-500 bg-red-700 w-[200px]"> 
            End
         </Button>
      )}
    </div>

    </div>
  )
}

