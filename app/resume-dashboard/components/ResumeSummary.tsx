"use client"
import axios from "axios";
import { useParams } from "next/navigation";
import ScoreGauge from "./ScoreGauze";
import { useEffect, useState } from "react";
import { ArrowBigDown, ChevronDown, Dot, DotIcon } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Category } from "./ScoreColor";

import {
    Popover,
    PopoverContent,
} from "@/components/ui/popover"


interface FeedbackTip {
   tip: string[],
   type: string
}

interface FeedbackCategory {
   score: number,
   tips: FeedbackTip[]
}

interface Feedback {
    overallScore: number,
     ATS: FeedbackCategory,
     content: FeedbackCategory,
     skills:  FeedbackCategory,
     structure:  FeedbackCategory,
     toneAndStyle: FeedbackCategory,
}

export function ResumeSummary() {
    const { id } = useParams();
    const [data, setData] = useState<Feedback | null>(null);
    const [loading, setLoading] = useState(false);
    const [isOpened, setIsOpened] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

     useEffect(() =>{
         const fetchData = async() =>{
        setLoading(true);
        const result = await axios.get(`/api/resume/analyse?id=${id}`);
        console.log(result.data)
        const overallFeedback = result.data.feedback[0]
        setData(overallFeedback)
        setLoading(false);
     }
     fetchData();
     }, [id])
       

  return (
    <div className="flex mx-auto justify-center flex-col mb-10">
    {loading ?  <Image src='/resume-scan-2.gif' alt='scanning' height={600} width={600}  />
         :
       <div className="flex mx-auto justify-center flex-col">

        <div className="glass-card py-4 w-[70vw] glow-primary">

        <h1 className="text-white text-2xl font-semibold text-start ml-4 mb-10">Resume Review</h1>

        <div className="flex-col m-4 md:flex-row flex items-center gap-10 justify-around">
        <ScoreGauge score={data?.overallScore} />
        <div className="flex flex-col">
        <p className="text-gray-300 text-xl font-semibold">Your Resume Score</p>
        <p className="text-gray-600 text-md">This Score is Calculated based on Varible listed below and your resume</p>
        </div>
        </div>

        <div className="text-accent flex flex-col gap-5 p-3">        
                <Category title="ATS" score={data?.ATS.score} />
                <Category title="Tone & Style" score={data?.toneAndStyle.score} />
                <Category title="Content" score={data?.content.score} />
                <Category title="Stucture" score={data?.structure.score} />
                <Category title="Skills" score={data?.skills.score} />
        </div>
        </div>

        <div className=" glass-card mx-auto flex w-[600px] flex-col mt-10 p-2">
            
         {data?.ATS.tips.map((tip, index) =>( 
            <div key={index} className="text-primary flex flex-col bg-gradient-to-r from-violet-700 to-purple-700 p-1">
                <p className="text-white"><DotIcon />{tip.tip}</p>
            </div>
           ))}
             
        </div> 
       </div>
}
    </div>
  )
}

