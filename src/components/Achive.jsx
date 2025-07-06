// rafce
import React from 'react'
import {motion} from 'framer-motion'
import { section } from 'framer-motion/client'
const ac = [
    {titel:"Full Stack Web Development",issuer:"Udemy",date:'june 2024',description:"Completed the advanced course on web development."},
    {titel:"Full Stack Web Development",issuer:"Udemy",date:'june 2024',description:"Completed the advanced course on web development."},
    {titel:"Full Stack Web Development",issuer:"Udemy",date:'june 2024',description:"Completed the advanced course on web development."},
    {titel:"Full Stack Web Development",issuer:"Udemy",date:'june 2024',description:"Completed the advanced course on web development."},
    {titel:"Full Stack Web Development",issuer:"Udemy",date:'june 2024',description:"Completed the advanced course on web development."},
]

const Achive = () => {
  return (
    <section className='py-16 bg-[#2E2B2B] text-white'>
        <div className='container mx-auto text-center'> 
            <motion.h2
             initial={{opacity:0}}
             animate={{opacity:1}}
             transition={{duration:1}}
             className='text-3xl font-extrabold mb-6'
            >
                Achievements & Certifications

            </motion.h2>
            <motion.div className='w-4/5 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'
             initial={{opacity:0}}
             animate={{opacity:1}}
             transition={{duration:1}}
            >
                {ac.map((acv,index) => (
                    <motion.div key={index}
                    className='flex flex-col items-center p-6 hover:scale-105 transition-all'
                    whileHover={{
                        scale:1.05,
                        boxShadow:"0px 4px 25px rgba(255,215,0,0.8)",
                        textShadow:"0px 2px 10px rgba(255,215,0,1)"
                    }
                    }
                    >
                      <motion.div
                      className='text-xl font-bold text-gray-100 mb-2'
                      initial={{opacity:0,y:50}}
                      whileInView={{opacity:1,y:0}}
                      transition={{duration:0.6,delay:0.2}}
                      viewport={{once:false,amount:0.5}}
                      >{acv.titel}</motion.div>
                      <motion.div 
                      className='text-sm text-gray-400 mb-2'
                      initial={{opacity:0,y:50}}
                      whileInView={{opacity:1,y:0}}
                      transition={{duration:0.6,delay:0.3}}
                      viewport={{once:false,amount:0.5}}
                      >{acv.issuer}</motion.div>
                      <motion.div 
                       className='text-xs text-gray-500 mb-2'
                      initial={{opacity:0,y:50}}
                      whileInView={{opacity:1,y:0}}
                      transition={{duration:0.6,delay:0.4}}
                      viewport={{once:false,amount:0.5}}
                      >{acv.date}</motion.div>
                      <motion.p
                      className='text-sm text-gray-300 mt-2 max-w[250px]'
                      initial={{opacity:0,y:50}}
                      whileInView={{opacity:1,y:0}}
                      transition={{duration:0.6,delay:0.5}}
                      viewport={{once:false,amount:0.5}}
                      >{acv.description}</motion.p>
                      
                    </motion.div>
                ))}
            </motion.div>
        </div>
    </section>
  )
}

export default Achive