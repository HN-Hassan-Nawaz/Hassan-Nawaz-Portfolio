"use client";
import React from "react";
import Link from "next/link";
import { useTheme } from "../theme/ThemeProvider";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedin,
    FaGithub,
    FaGem,
    FaHome,
    FaEnvelope,
    FaPhone,
} from "react-icons/fa";

export default function Footer() {
    // const { theme } = useTheme();

    return (
        <footer className="text-center text-lg-start pt-4">
            {/* Connected Through Text + Socials */}
            <section className="container border-bottom p-4 mt-3">
                <div className="row align-items-center justify-content-between">
                    {/* Left Side Text */}
                    <div className="col-md-6 text-md-start text-center mb-0 mb-md-0">
                        <span className="">Get connected with me on social networks:</span>
                    </div>

                    {/* Right Side Icons */}
                    <div className="col-md-6 d-flex justify-content-center justify-content-md-end gap-3">
                        <a href="https://www.instagram.com/darkmode1474/" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <FaInstagram />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=61577135164728" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <FaFacebookF />
                        </a>
                        <a href="https://www.linkedin.com/in/hassan-nawaz-422816206/" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <FaLinkedin />
                        </a>
                        <a href="https://github.com/HN-Hassan-Nawaz?tab=repositories" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <FaGithub />
                        </a>
                    </div>
                </div>
            </section>


            {/* Footer Main Grid */}
            <div className="container text-center text-md-start mt-5">
                <div className="row mt-3">
                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                        <h6 className="fw-bold mb-4">
                            <FaGem className="me-3" />
                            HN Developer
                        </h6>
                        <p>
                            Transforming ideas into digital solutions with expertise in
                            modern web technologies.
                        </p>
                    </div>

                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 className="text-uppercase fw-bold mb-4">Skills</h6>
                        <p>React.js</p>
                        <p>Node.js</p>
                        <p>Express.js</p>
                    </div>

                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 className="text-uppercase fw-bold mb-4">Useful Links</h6>
                        <p>
                            <Link href="/" className="text-reset fw-normal">
                                Home
                            </Link>
                        </p>
                        <p>
                            <Link href="/about" className="text-reset fw-normal">
                                About
                            </Link>
                        </p>
                        <p>
                            <Link href="/portfolio" className="text-reset fw-normal">
                                Portfolio
                            </Link>
                        </p>
                    </div>

                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                        <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                        <p>
                            <FaHome className="me-2" />
                            Lahore, PK
                        </p>
                        <p>
                            <FaEnvelope className="me-2" />
                            hassanpu670@gmail.com
                        </p>
                        <p>
                            <FaPhone className="me-2" />
                            +92 335 6366916
                        </p>
                    </div>
                </div>
            </div>

            {/* Horizontal Line + Copyright */}
            <hr className="container mt-3 bg-success" />
            <div className="text-center fw-bold p-3">
                © 2025 HN. All Rights Reserved. | Empowering the Web with
                Innovation.
            </div>
        </footer>
    );
}