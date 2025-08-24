
interface scoreColor {
    title: string,
    score: number
}

export const Category = ({title, score}: scoreColor) => {
    const textColor = score >= 70 ? 'text-green-400' : score > 40 ? 'text-yellow-300' : 'text-red-600'
  return (

     <div className="flex glass-card p-2 justify-between px-10 rounded-xl Category ">
                <p className='text-accent'>{title}</p>
                <p className='text-white'> <span className={textColor}>{score}</span> / 100</p>
     </div>
  )
}

