import React from 'react'
import { DashBoardHeader } from '../dashboard/_components/Header';

function DashBoardlayout({children}: {children: React.ReactNode}) {
  return (
    <div className='bg-[#0a0a0a]'>
    <DashBoardHeader />
    <div>{children}</div>
    </div>
  )
}

export default DashBoardlayout;