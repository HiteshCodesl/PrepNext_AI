import Link from "next/link";
import { ScoreCircle } from "./ScoreCircle";

export function ResumeCard({feedback, id, companyName, jobTitle}: Resume) {


   return (
        <Link href={`/resume-dashboard/feedback/${id}`} className="glass-card animate-in fade-in duration-1000 p-4">

            <div className="resume-card-header flex justify-between items-center mb-4 ">
                <div className="flex flex-col gap-2">
                    {companyName && <h2 className="text-primary text-xl font-bold break-words">{companyName}</h2>}
                    {jobTitle && <h3 className="text-lg break-words text-gray-500">{jobTitle}</h3>}
                    {!companyName && !jobTitle && <h2 className="!text-black font-bold">Resume</h2>}
                </div>
                <div className="flex-shrink-0">
                    {feedback?.map((score, index)=>{
                       return <ScoreCircle key={index} score={score.overallScore} />
                    })}
                </div>
             </div>
        </Link>
    )
}
