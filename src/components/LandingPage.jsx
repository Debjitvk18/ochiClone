import React from 'react'
import { GoArrowUpRight } from "react-icons/go";

function LandingPage() {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-1'>
        <div className='textstructure mt-52 px-20'>
        {["We Create","Eye Opening","Presentations"].map((item,index)=>{
          return <div className='masker'>
            <h1 className="text-white uppercase leading-[6vw] 
          tracking-tighter text-[7vw] font-['Test Founders Grotesk X-Cond SmBd'] font-semibold ">
          {item}</h1>
         </div>
        })}
        </div>
        <div className='border-t-[1px] border-zinc-800 mt-32 flex justify-between items-center py-5 px-20 text-white'>
            {["For public and Private Compaines","From the first pitch to IPO"].map((item,index)=>(
                
    <p className='text-md font-light tracking-tighter leading-none'>
    {item}
    </p>
    ))}
    <div className='start flex items-center gap-5'>
    <div className='px-5 py-2 border-[2px] rounded-full border-zinc-500 font-light text-md capitalize'>
    START THE PROJECT
    </div>
    <div className='w-8 h-8 flex items-center justify-center border-[2px] rounded-full border-zinc-500 '>
    <GoArrowUpRight />
    </div>
    </div>
    </div>
    </div>
  )
}

export default LandingPage