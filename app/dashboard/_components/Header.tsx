"use client"
import { UserButton, useUser } from '@clerk/nextjs'
import { ArrowRight, BriefcaseBusiness, LayoutDashboard, Square } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

 export function DashBoardHeader() {
  const {isSignedIn} = useUser();
    const [scrolled, setScrolled] = useState(false);
  
     useEffect(() => {
        const handleScroll = () => {
          setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
    
  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'glass-header' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center glow-primary">
                <BriefcaseBusiness className="h-6 w-6 text-white" />
              </div>
          
            </div>
            <div>
              <span className="text-xl font-bold font-poppins text-white">
                PrepNext<span className="text-primary">AI</span>
              </span>
            </div>
          </div>


          <div className="hidden md:flex items-center space-x-4">
            {isSignedIn ? ( <UserButton />
            ) : (
            <Link href={"/sign-in"}>
            <button className="text-gray-300 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-white/5">
              Sign In
            </button>
            </Link> )
             }
             <Link href={"/dashboard"}>
            <button className="btn-primary flex items-center">
              Dashboard
              <LayoutDashboard className="ml-2 h-4 w-4" />
            </button>
            </Link>
          </div>
        </div>

      </div>
    </header>
)
}

