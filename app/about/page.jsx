import React from 'react';
import Education from '../components/education/Education';
import Skills from '../components/skills/Skills';
import Responsibilities from '../components/responsibility/Responsibilities';

export default function AboutPage() {
    return (
        <div className="container my-5">
            <div className="row align-items-stretch gx-5">
                {/* Text Column */}
                <div className="col-md-8 d-flex flex-column justify-content-center">
                    <h1>About Me</h1>
                    <p>
                        I’m Hassan Nawaz, a passionate Full Stack Developer with a strong focus on building complete, user-friendly web solutions. I work with both frontend and backend technologies to bring ideas to life from clean, responsive interfaces to powerful server-side functionality.
                    </p>
                    <p>
                        I enjoy solving real world problems through code and constantly explore modern tools and frameworks to stay up to date. Whether it's a personal website, business platform, or a custom web application, I aim to deliver fast, secure, and scalable solutions that make a lasting impact.
                    </p>
                </div>

                {/* Image Column */}
                <div className="col-md-4 d-flex justify-content-center align-items-center">
                    <img
                        src="/Hassan-Nawaz.jpeg" // make sure this image exists in /public
                        alt="Hassan Nawaz"
                        className="img-fluid rounded shadow"
                        style={{
                            marginTop: "60px", // Align image to top
                            height: "90%",              // Fill container height
                            width: "auto",               // Keep aspect ratio
                            maxHeight: "300px",          // Limit height
                            objectFit: "cover",
                            borderRadius: "8px"
                        }}
                    />
                </div>
            </div>
            <Education />

            <Skills />

            <Responsibilities />
        </div>
    );
}
