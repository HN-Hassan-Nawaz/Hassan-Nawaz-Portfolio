import React from "react";
import {
  FaCode,
  FaGithub,
  FaCloudUploadAlt,
  FaCreditCard,
  FaVideo,
  FaUsers,
  FaLink,
} from "react-icons/fa";
import { SiVscodium, SiPostman } from "react-icons/si";


export default function Responsibilities() {
  const responsibilities = [
    {
      title: "Git",
      description: "Version control using Git for team collaboration and tracking changes.",
      icon: <FaGithub size={30} className="text-dark" />,
    },
    {
      title: "VS Code",
      description: "Development and debugging using Visual Studio Code editor.",
      icon: <SiVscodium  size={30} className="text-primary" />,
    },
    {
      title: "RESTful API",
      description: "Creating and consuming REST APIs for data exchange.",
      icon: <FaCloudUploadAlt size={30} className="text-info" />,
    },
    {
      title: "Payment API Integration",
      description: "Integrating secure payment gateways like Stripe and PayPal.",
      icon: <FaCreditCard size={30} className="text-success" />,
    },
    {
      title: "Audio/Video Calling APIs",
      description: "Implementing calling features using Agora/WebRTC APIs.",
      icon: <FaVideo size={30} className="text-danger" />,
    },
    {
      title: "Modern UI Interfaces",
      description: "Designing user-friendly UIs with React, Bootstrap, and Tailwind.",
      icon: <FaUsers size={30} className="text-warning" />,
    },
    {
      title: "Frontend-Backend Integration",
      description: "Connecting client-side apps with backend services using fetch/axios.",
      icon: <FaLink size={30} className="text-secondary" />,
    },
  ];

  return (
    <div className="container my-5">
      <h2 className="mb-4">Key Responsibilities</h2>
      <div className="row g-4 justify-content-center">
        {responsibilities.map((item, idx) => (
          <div className="col-md-6 col-lg-4" key={idx}>
            <div className="border p-3 rounded shadow-sm h-100 hover-zoom">
              <div className="d-flex align-items-center mb-3">
                <div className="me-3">{item.icon}</div>
                <h5 className="mb-0">{item.title}</h5>
              </div>
              <p className="mb-0">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
