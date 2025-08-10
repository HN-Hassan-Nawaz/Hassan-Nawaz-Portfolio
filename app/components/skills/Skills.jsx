"use client";

import React, { useEffect, useRef } from "react";
import {
  FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaReact, FaNodeJs,
  FaGithub
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiExpress, SiMongodb, SiFirebase, SiCplusplus } from "react-icons/si";
import { GiGearHammer } from "react-icons/gi"; // For OOP
import { MdStorage, SiSocketdotio } from "react-icons/md";     // For Data Structure

export default function SkillsCarousel() {
  const scrollRef = useRef();

  const skills = [
    { icon: <FaHtml5 size={30} className="text-danger" />, name: "HTML" },
    { icon: <FaCss3Alt size={30} className="text-primary" />, name: "CSS" },
    { icon: <FaJs size={30} className="text-warning" />, name: "JavaScript" },
    { icon: <SiTailwindcss size={30} className="text-info" />, name: "Tailwind CSS" },
    { icon: <FaBootstrap size={30} className="text-purple" />, name: "Bootstrap 5" },
    { icon: <FaReact size={30} className="text-info" />, name: "React.js" },
    { icon: <SiNextdotjs size={30} className="text-dark" />, name: "Next.js" },
    { icon: <FaNodeJs size={30} className="text-success" />, name: "Node.js" },
    { icon: <SiExpress size={30} className="text-dark" />, name: "Express.js" },
    { icon: <SiMongodb size={30} className="text-success" />, name: "MongoDB" },
    { icon: <SiFirebase size={30} className="text-warning" />, name: "Firebase DB" },
    { icon: <FaGithub size={30} className="text-dark" />, name: "GitHub" },
    { icon: <SiCplusplus size={30} className="text-primary" />, name: "C++" },
    { icon: <GiGearHammer size={30} className="text-secondary" />, name: "OOP" },
    { icon: <MdStorage size={30} className="text-secondary" />, name: "Data Structure" },
    { icon: <SiSocketdotio size={30} className="text-dark" />, name: "Socket.IO" }
  ];

  useEffect(() => {
    const el = scrollRef.current;
    let frameId;

    const scroll = () => {
      if (!el) return;
      el.scrollLeft += 1;

      if (el.scrollLeft >= el.scrollWidth / 1.5) {
        el.scrollLeft = 0;
      }

      frameId = requestAnimationFrame(scroll);
    };

    frameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(frameId);
  }, []);

  const repeatedSkills = [...skills, ...skills, ...skills];

  return (
    <div className="container my-5">
      <h2 className="mb-4">My Skills</h2>
      <div
        ref={scrollRef}
        className="d-flex overflow-hidden flex-nowrap px-2 py-3 hide-scrollbar"
        style={{
          scrollBehavior: "auto",
          gap: "2rem",
          whiteSpace: "nowrap"
        }}
      >
        {repeatedSkills.map((skill, idx) => (
          <div
            key={idx}
            className="d-flex flex-column align-items-center justify-content-center bg-light rounded-circle shadow"
            style={{
              minWidth: "110px",
              height: "110px",
              flexShrink: 0,
              textAlign: "center",
              padding: "1rem",
            }}
          >
            {skill.icon}
            <small className="mt-2 text-dark">{skill.name}</small>
          </div>
        ))}
      </div>
    </div>
  );
}
