import { footer } from 'framer-motion/client'
import React from 'react'

const Footer = () => {
  return (
<footer className='w-full bg-[#2E2B2B] text-white py-4'>
    <div className='max-w-7xl mx-auto text-center'>
    <p className='text-lg flex justify-center items-center gap-1'><svg className='inline-block w-5 h-5' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><circle cx="12" cy="12" r="4"/><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"/></svg>2025 Rahul Kumar Gupta. All rights reserved.</p>
    <p className='mt-2 text-sm flex justify-center items-center gap-1'>Designed with <svg className='inline-block w-5 h-5 text-red-500 fill-current' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg> by Rahul Kumar Gupta</p>
    </div>
</footer>
)
}

export default Footer