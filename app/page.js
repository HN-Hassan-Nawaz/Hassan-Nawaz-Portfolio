"use client";
import React from "react";
import Typewriter from "typewriter-effect";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaGithub
} from "react-icons/fa";

export default function HomePage() {
  return (
    <div className="container my-5">
      <div className="row align-items-stretch gx-5">
        {/* Text Column */}
        <div className="col-md-8 d-flex flex-column justify-content-center">
          <h4>Hello, It&apos;s Me</h4>
          <h1 className="fw-bold">Hassan Nawaz</h1>

          <h5 className="mt-2 d-flex">
            And I am a&nbsp;
            <span className="text-primary fw-bold">
              <Typewriter
                options={{
                  strings: ["Frontend Developer", "Backend Developer", "YouTuber", "Video Editer"],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                  delay: 75,
                  pauseFor: 1200
                }}
              />
            </span>
          </h5>

          <p className="mt-3">
            I am a Web Developer with a strong focus on building responsive, user friendly web applications. From designing modern interfaces to developing robust server side logic, I enjoy creating complete solutions that deliver a smooth and efficient user experience.
          </p>

          <p>
            I enjoy turning ideas into real, working products using clean code and modern web technologies. Whether it is developing dynamic websites or solving backend challenges, I am always focused on writing efficient, scalable, and maintainable code.
          </p>

          {/* Social Icons */}
          <div className="d-flex gap-3 mt-4">
            <a href="https://www.instagram.com/darkmode1474/" target="_blank" rel="noreferrer" className="social-icon">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61577135164728" target="_blank" rel="noreferrer" className="social-icon">
              <FaFacebookF />
            </a>
            <a href="https://www.linkedin.com/in/hassan-nawaz-422816206/" target="_blank" rel="noreferrer" className="social-icon">
              <FaLinkedinIn />
            </a>
            <a href="https://github.com/HN-Hassan-Nawaz?tab=repositories" target="_blank" rel="noreferrer" className="social-icon">
              <FaGithub />
            </a>
          </div>

          {/* Download CV */}
          <a href="/Hassan-Nawaz-CV.pdf" download className="btn btn-download mt-4">
            Download CV
          </a>
        </div>

        {/* Image Column */}
        <div className="col-md-4 d-flex align-items-start justify-content-center">
          <img
            src="/Hassan-Nawaz.jpeg"
            alt="Profile"
            className="rounded shadow"
            style={{
              marginTop: "60px",
              height: "90%",
              width: "auto",
              maxHeight: "300px",
              objectFit: "cover",
              borderRadius: "8px"
            }}
          />
        </div>
      </div>
    </div>
  );
}
