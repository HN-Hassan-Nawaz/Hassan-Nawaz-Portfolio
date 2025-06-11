'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
    FaHome,
    FaUser,
    FaBriefcase,
    FaEnvelope
} from 'react-icons/fa';
// import { GrProjects } from 'react-icons/gr';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';

export default function Navbar() {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.body.classList.toggle('dark-mode', savedTheme === 'dark');
        setTheme(savedTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        document.body.classList.toggle('dark-mode', newTheme === 'dark');
        localStorage.setItem('theme', newTheme);
        setTheme(newTheme);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <div className="container">  {/* This will give the same spacing as the page content */}

                {/* Brand */}
                <Link href="/" className="navbar-brand fw-bold fs-2 text-white">
                    Hassan Nawaz
                </Link>

                {/* Toggler */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Menu Items */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <Link href="/" className="me-4 nav-link text-white">
                                <FaHome className="me-2" /> Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/about" className="me-4 nav-link text-white">
                                <FaUser className="me-2" /> About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/portfolio" className="me-4 nav-link text-white">
                                <FaBriefcase className="me-2" /> Portfolio
                            </Link>
                        </li>

                    </ul>

                    {/* Right Section: Theme Toggle */}
                    <div className="d-flex align-items-center">
                        <button
                            className="btn btn-outline-light btn-sm me-2 d-flex align-items-center px-3"
                            onClick={toggleTheme}
                            aria-label="Toggle Theme"
                        >
                            {theme === 'dark' ? (
                                <BsSunFill className="me-2" />
                            ) : (
                                <BsMoonFill className="me-2" />
                            )}
                            {theme === 'dark' ? 'Light' : 'Dark'}
                        </button>
                    </div>
                </div>
            </div>
        </nav>

    );
}
