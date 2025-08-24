"use client"
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { SessionDetailsProp } from "../interview/[sessionId]/page";
import Vapi from "@vapi-ai/web";
import { useUser } from "@clerk/nextjs";
import { Loader, Phone, PhoneOff } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { toast } from "sonner";
import { useRouter } from "next/navigation";

enum CallStatus  {
  InActive = "Inactive",
  Active = "ACTIVE",
  Finished = "FINISHED",
  Connecting = "CONNECTING"
}

type messages = {
  role: string,
  text: string
}

export function Agent({coverImage, feedback, questions, level, role, techstack, type, userId, createdAt, finalized, sessionId}: SessionDetailsProp) {

   const [isSpeaking, setIsSpeaking] = useState(false);
   const [callStatus, setCallStatus] = useState<CallStatus>(CallStatus.InActive);
   const currentRoleRef = useRef<string | null>(null);
  const [currentRole ,setCurrentRole] = useState<string | null>();
  const [liveTranscript, setLiveTranscript] = useState<string>();
  const [messages, setMessages] = useState<messages[]>([]);
  const messageRef = useRef<messages[]>([]);   
  const vapiInstance = useRef<Vapi | null>(null );
   const [callStarted, setCallStarted] = useState(false);
  const [loading, setLoading] = useState(false);
  const {user} = useUser();
  const router = useRouter();

     let lastMessage = '';
      questions.map((question, index)=>{
        lastMessage = lastMessage + question
      })
    
    let techstackName = '';
    techstack.forEach((name)=>{
      techstackName = techstackName +' '+ name
    })

    const handleGenerateFeedback = async(messages: messages[]) => {
         console.log("generate feedback here");

         const {success, id} = {
          success: true,
          id: 'feedback-id'
         }

         if(success && id){
            router.push(`/interview/${sessionId}/feedback`)
         }else{
          console.log("Error saving feedback")
         }
    }
    useEffect(() =>{
       if(callStatus === CallStatus.Finished){
        if(type === 'generate'){
          router.push('/dashbaord');
        }else{
            handleGenerateFeedback(messages);
        }
       }
    }, [messages, callStatus, type, userId])

    const StartCall = () =>{
      
       vapiInstance.current = new Vapi(process.env.NEXT_PUBLIC_VAPI_API_KEY!);
       
       toast("Starting Interview...")

      const assistantOptions = {
      name: "AI Recruiter",
      firstMessage: `Hello ${user?.firstName}, how are you? Ready for your interview on ${role}?`,
      transcriber: {
        provider: "deepgram",
        model: "nova-2",
        language: "en-US",
        },
       voice: {
        provider: "playht",
        voiceId: "chris",
        },
        model: {
        provider: "openai",
        model: "gpt-4",
        messages: [
            {
                role: "system",
                content: `
  You are an AI voice assistant conducting interviews.
Your job is to ask candidates provided interview questions, assess their responses.
Begin the conversation with a friendly introduction, setting a relaxed yet professional and interviewer like tone. Example:
"Hey there! Welcome to your ${role} interview. Let’s get started with a few questions!"
questions: ${lastMessage}
 encouraging feedback after each answer. Example:
"Nice! That’s a solid answer."
"Hmm, not quite! Want to try again?"
Keep the conversation natural and engaging—use casual phrases like "Alright, next up..." or "Let’s tackle a tricky one!"
After questions, wrap up the interview smoothly by summarizing their performance. Example:
"That was great! You handled some tough questions well. Keep sharpening your skills!"
End on a positive note:
"Thanks for chatting! Hope to see you crushing projects soon!"
Key Guidelines:
 Be friendly, engaging, and witty 🎤
 Keep responses short and natural, like a real conversation
 Adapt based on the candidate’s confidence level
 Ensure the interview remains focused on React
`.trim(),
            },
        ],
    },
    }
      //@ts-ignore 
    vapiInstance.current.start(assistantOptions)
    

     vapiInstance.current.on('message', (messages) => {
      if (messages.type === 'transcript') {

        const { role, transcriptType, transcript } = messages;

        console.log(`${messages.role}: ${messages.transcript}`);

        if (transcriptType == "partial") {
          setLiveTranscript(transcript);
          currentRoleRef.current = role;

        } else if(transcriptType == 'final') {
          setMessages((prev: any) => {
            const updated = [...prev, { role: role, text: transcript }]
            messageRef.current = updated;
            return updated;
          });
          setLiveTranscript('');
          currentRoleRef.current = null;
        }
      }
    });

      vapiInstance.current.on('call-start', () =>{
        setCallStatus(CallStatus.Active)
        setCallStarted(true);
        console.log('Call started');
      })

       vapiInstance.current.on('call-end', () =>{
        setCallStatus(CallStatus.Finished)
        setCallStarted(false);
        console.log('Call Ended');
      })

   
      vapiInstance.current.on('speech-start', () =>{
        console.log('assistant started speaking');
        currentRoleRef.current = 'assistant'
      });

      vapiInstance.current.on('speech-end', () =>{
        console.log('assistant stopped speaking');
        currentRoleRef.current = "user"
      })
    
      vapiInstance.current.on("error", (err) => {
      console.error("Vapi error:", err);
});
    }

    const endCall = async() =>{
      setLoading(true);
      if(!vapiInstance.current) return;
      toast("Interview has ended")
      vapiInstance.current.stop();
      console.log('messages', messages);
      setCallStarted(false);
      setCallStatus(CallStatus.Finished)
      vapiInstance.current = null;
      console.log(messages, "messages")
      setLoading(false);
    }


  return (
    <>
    <div className="sm:mt-12 md:mt-30  md:mx-16  glass-card card-dark  flex flex-col gap-4  max-w-screen-md lg:flex lg:mx-auto ">

       <span  className=" sm:text-sm  text-white text-primary text-center mt-8 md:text-xl glass-card md:p-5 mx-auto rounded-xl flex items-center gap-3">   <Image src={coverImage} alt="company" width={50} height={50}></Image>{role} Interview</span>

       <div className="flex gap-5 justify-center  items-center mx-2">
       <Badge className="text-white bg-violet-600 text-center">{techstackName}</Badge>
      
       <Badge className="text-white text-center">{type}</Badge>
       <Badge className="text-white text-center">{level}</Badge>

       </div>

    <div className=" hover:snap-none sm:flex sm:mx-auto justify-around lg:mx-auto md:flex md:flex-row max-w-screen-md lg:gap-24">
        
      <div className="glass-card md:h-[300] md:w-[600] my-10 rounded-xl flex flex-col mx-8 sm:h-[100] sm:w-[120]">
  
       <Image src={"/interviewer2.png"} width={50} height={50} alt={"ai-agent"} color="white" className="rounded-full  bg-white  size-18  object-contain mx-auto mt-10 "/>

       <p className="text-primary mt-5 text-lg text-center">AI Interviewer</p>

       <div className=' overflow-y-auto flex flex-col items-start text-primary font-poppins sm:text:md md:text-lg xl:text:xl rounded-xl mb-4 glass-card p-3 py-5  md:w-[500] w-[200] mx-auto mt-6'>
   
      {liveTranscript ? (
       <h2 className="text-lg">
         {currentRoleRef.current} : {liveTranscript}
       </h2>
   ) : (
    messages.slice(-1).map((msg, index) => (
      <h2 key={index} className="mb-3">
        {msg.role}: {msg.text}
      </h2>
    ))
  )}
      </div>

       </div>

     </div> 

 
     
  
    <div className="flex justify-center mb-5">
      {callStatus !== CallStatus.Active ? ( 
        <Button onClick={StartCall} 
        className={`hover:opacity-85 w-[200px] rounded-xl
        ${CallStatus.Finished &&'bg-gradient-to-r from-green-600 to-emerald-600'} `}>

          <span>
            {callStatus === CallStatus.InActive || callStatus === CallStatus.Finished ? "Call" : '...'}
          </span>
          {!loading ? <Phone /> : <Loader className="animate-spin" />}
        </Button>

      ) : (
        <Button onClick={endCall} className= "hover:bg-red-500 bg-red-700 w-[200px] rounded-xl"> 
            End
            <PhoneOff />
         </Button>
      )}
    </div>

    </div>
    </>
  )
}

