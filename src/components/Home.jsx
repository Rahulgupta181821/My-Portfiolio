import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { FaFacebook, FaLinkedin } from "react-icons/fa6";

export default function Home() {
  return (
    <section
      id="home"
      className="w-full h-screen flex flex-col  md:flex-row items-center justify-center bg-[#2E2B2B] text-white  px-6 md:px-16 md:pt-0"
    >
      <div className="flex-1 flex flex-col justify-center items-start space-y-6">
        <motion.p
          className="text-lg md:text-xl text-gray-300"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm Rahul Kumar Gupta
        </motion.p>
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold text-[#D97706]"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Welcome To My Portfiolio
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-300"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          I'm Passionate Full Stack Developer creating moderen, interactive
          websites.
        </motion.p>
        <motion.div className="flex space-x-6"
        initial={{opacity:0,scale:0.5}}
        whileInView={{opacity:1,scale:1}}
        viewport={{once:false,amount:0.5}}
        transition={{duration:1,delay:0.4}}
        >
          <a href="https://github.com">
            <FaGithub className="text-3xl hover:text-[#d97706]" />
          </a>
          <a href="https://github.com">
            <FaLinkedin className="text-3xl hover:text-[#d97706]" />
          </a>
          <a href="https://github.com">
            <FaTwitter className="text-3xl hover:text-[#d97706]" />
          </a>
          <a href="https://github.com">
            <FaFacebook className="text-3xl hover:text-[#d97706]" />
          </a>
        </motion.div>
      </div>
      <div className="flex-1 flex items-center justify-center w-full relative">
        <div className="absolute w-96 h-96 bg-[#d97706] rounded-full blur-3xl z-0 opacity-50"></div>
        <motion.div 
        initial={{opacity:0,scale:0.5}}
        whileInView={{opacity:1,scale:1}}
        viewport={{once:false,amount:0.5}}
        transition={{duration:1}}
        className="z-10 overflow-hidden flex items-center justify-center w-full ">
            <img src="./image.png" alt="Images" className="w-96 h-96 object-cover "></img>
        </motion.div>
      </div>
    </section>
  );
}
