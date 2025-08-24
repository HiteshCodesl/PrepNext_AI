"use client"
import { useParams } from "next/navigation";
import { Agent } from "../../_components/Agent";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

export interface SessionDetailsProp {
   id: string
   sessionId: string
   coverImage: string
   feedback: Feedback[] | null
   questions: string[]
   level: string
   role: string
   techstack: string[]
   type: string
   finalized: boolean
   userId: string
   createdAt: string
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

export default function page() {
  const params = useParams(); //return a object
  const sessionId = params.sessionId as string;

  const [sessionDetails, setSessionDetails] = useState<SessionDetailsProp[]>([])
  const sessionDetailsRef = useRef<SessionDetailsProp[]>([]);

  useEffect(()=>{
    sessionId && getServerSessionDetails();
   },[sessionId])

   const getServerSessionDetails = async() =>{
     const response = await axios.get(`/api/sessionDetails?sessionId=${sessionId}`)
      setSessionDetails(response.data);
      sessionDetailsRef.current = [response.data];
      console.log([response.data])
    }
    useEffect(()=>{
 console.log(sessionDetails)
    },[sessionDetails])

  return (
    <div className='mt-28 mx-5'>
      {sessionDetailsRef.current.map((session)=>(  <Agent key={session.id} {...session} />
      ))}
      <p className="bg-red-500"></p>
    </div>
  )
}
