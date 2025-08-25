import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge";
import { ContentType } from "@vapi-ai/web/dist/api";
import { Dot } from "lucide-react"

interface FeedbackTip {
   tip: string[],
   type: string
}

interface FeedbackCategory {
   score: number,
   tips: FeedbackTip[]
}



export function FeedbackData({ title, content }: { title: string; content?: FeedbackCategory }) {
 const badgeColor = content?.score >= 70 ? 'bg-green-500' : content?.score >40 ? 'bg-yellow-500' : 'bg-red-600';

 const cardColor = content?.score >= 70 ? 'bg-gradient-to-r from-green-500 to-emerald-500' : content?.score >=40  ? 'bg-gradient-to-r from-yellow-500 to-amber-500' : 'bg-gradient-to-r from-red-500 to-red-800'

  return (
    <div>
    <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
     <AccordionTrigger>
          <div className="text-white font-poppins font-semibold">{title}
            <Badge className={`${badgeColor} text-black ml-5`} >{content?.score}/100</Badge> </div>
        </AccordionTrigger>

    <AccordionContent> 
        <div className=" glass-card mx-auto flex w-[600px] flex-col mt-10 p-2"> 
        {content?.tips.map((tip, index) =>( <div key={index} className={`text-primary flex flex-col ${cardColor}   p-1`}>
        <p className='text-black flex gap-2 font-poppins'>
        <Dot />{tip.tip}</p> </div> ))} 
        </div> 
    </AccordionContent>

  </AccordionItem>
</Accordion>
    </div>
  )
}

