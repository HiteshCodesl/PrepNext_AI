import Link from "next/link";
import { ScoreCircle } from "./ScoreCircle";
import Image from "next/image";

export function ResumeCard({feedback, id, imagePath, resumePath, companyName, jobTitle}: Resume) {
   return (
        <Link href={`/resume/${id}`} className="glass-card animate-in fade-in duration-1000 p-4">

            <div className="resume-card-header flex justify-between items-center mb-4 ">
                <div className="flex flex-col gap-2">
                    {companyName && <h2 className="text-primary text-xl font-bold break-words">{companyName}</h2>}
                    {jobTitle && <h3 className="text-lg break-words text-gray-500">{jobTitle}</h3>}
                    {!companyName && !jobTitle && <h2 className="!text-black font-bold">Resume</h2>}
                </div>
                <div className="flex-shrink-0">
                    <ScoreCircle score={feedback.overallScore} />
                </div>
             </div>
          
           
                <div className=" animate-in fade-in duration-1000">
                    <div className="w-full h-full">
                        <img
                            src={imagePath}
                            alt="resume"
                            className="w-full h-[300px] max-sm:h-[150px] object-cover object-top"
                        />
                    </div>
                </div>
        </Link>
    )
}
