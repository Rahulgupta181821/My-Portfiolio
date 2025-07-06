import React from "react";
import {
  FaBootstrap,
  FaCss3,
  FaDatabase,
  FaDocker,
  FaGift,
  FaGit,
  FaHtml5,
  FaJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { motion } from "framer-motion";

const SkillCard = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: false, amount: 0.5 }}
      className="relative w-32 h-32 md:w-40 md:h-40 rounded-full shadow-[0_0_20px_rgba(0,255,255,0.9)] flex items-center justify-center text-white font-bold cursor-pointer group transition-all duration-300"
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: 360, borderColor: skill.color }}
        style={{ borderColor: skill.color }}
        className={`w-32 h-32 md:w-40 md:h-40 rounded-full flex items-center justify-center relative border-4`}
      >
        <div
          className="absolute top-1/4 text-4xl md:text-5xl"
          style={{ color: skill.color }}
        >
          {skill.icon}
        </div>
        <span className="absolute bottom-4 text-2xl md:text-3xl font-bold">
          {skill.level}%{" "}
        </span>
        <div className="absolute bottom-0 left-0 right-0 text-center text-sm md:text-lg font-semibold opacity-0 group-hover:opacity-1"></div>
      </motion.div>

        <motion.h3 className="absolute bottom-0 left-0 right-0 text-center text-sm md:text-lg font-semibold opacity-0 group-hover:opacity-100 transition duration-300">
          {skill.name}
        </motion.h3>
    </motion.div>
  );
};
export const Skills = () => {
  const skills = [
    { name: "HTML", level: 95, icon: <FaHtml5 />, color: "#E34F26" },
    { name: "CSS", level: 85, icon: <FaCss3 />, color: "#1572B6" },
    { name: "JavaScript", level: 75, icon: <FaJs />, color: "#F7DF1E" },
    { name: "React", level: 80, icon: <FaReact />, color: "#61DAFB" },
    { name: "Python", level: 95, icon: <FaPython />, color: "#339933" },
    { name: "SQL", level: 90, icon: <FaDatabase />, color: "#4DB33D" },
    { name: "Docker", level: 90, icon: <FaDocker />, color: "#3776AB" },
    { name: "Git", level: 85, icon: <FaGit />, color: "#E34F26" },
    { name: "Bootstrap", level: 95, icon: <FaBootstrap />, color: "#61DAFB" },
  ];
  return (
    <section
      id="skills"
      className="w-full py-20 bg-[#2E2B2B] text-white px-6 md:px-16"
    >
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-extrabold text-[#D97706] text-center mb-12"
      >
        My Skills
      </motion.h2>
      <div className="flex flex-wrap justify-center gap-8">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} index={index} />
        ))}
      </div>
    </section>
  );
};
