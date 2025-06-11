"use client";

import React from "react";
import { useTheme } from "../components/theme/ThemeProvider";

export default function Cards() {
    const { theme } = useTheme();

    const projects = [
        {
            title: "Ride with Guide",
            image: "/projects/rwg.jpg",
            url: "https://example.com/frontend"
        },
        {
            title: "Ecommerece Store",
            image: "/projects/ecommerence store.png",
            url: "https://example.com/backend"
        },
        {
            title: "PlagedIn",
            image: "/projects/plagedin.PNG",
            url: "https://example.com/api"
        },
        {
            title: "Video Calling",
            image: "/projects/agora.PNG",
            url: "https://example.com/ui"
        },
        {
            title: "Brand Spark Agency",
            image: "/projects/marketing.jpg",
            url: "https://example.com/reusable"
        }
    ];

    return (
        <div className="container my-5">
            <h2 className="mb-4">Live Projects</h2>
            <div className="row g-4">
                {projects.map((item, idx) => (
                    <div className="col-md-4" key={idx}>
                        <div
                            className={`border p-3 rounded hover-zoom h-100 ${theme === "dark"
                                    ? "bg-transparent border-light text-white"
                                    : "bg-transparent border text-black"
                                }`}
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="img-fluid mb-3 rounded"
                                style={{ height: "160px", objectFit: "cover", width: "100%" }}
                            />
                            <h5 className="fw-semibold text-center">{item.title}</h5>
                            <p className="small text-center">{item.description}</p>
                            <p className="text-center">
                                <a
                                    href={item.url}
                                    className="text-decoration-none"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {item.url}
                                </a>
                            </p>
                            <div className="text-center mt-auto">
                                <a
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary btn-sm"
                                >
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
