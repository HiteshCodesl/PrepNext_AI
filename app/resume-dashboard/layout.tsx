import React from 'react'
import { ResumeHeader } from './components/Header';

function DashBoardlayout({children}: {children: React.ReactNode}) {
  return (
    <div className='bg-[#0a0a0a]'>
    <ResumeHeader/>
    <div>{children}</div>
    </div>
  )
}

export default DashBoardlayout;