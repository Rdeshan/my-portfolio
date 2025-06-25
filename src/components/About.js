import React, { useState } from "react";
import "../css/About.css"; // Your CSS file
// Add this at the top
import Certifications from "./Certifications";
import Educations from "./Educations";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaJava,
} from "react-icons/fa";
import { SiMongodb, SiFirebase, SiMysql, SiPython } from "react-icons/si";
import ParticlesBackground from "./ParticlesBackground";

const About = () => {
    const currentStatus = [
        {
            campus_Status: "🎓 3rd Year Undergraduate at SLIIT  ",
            passion: "🧠 Passionate about full-stack development ",
            building: "🛠️ Building: Student Management System (MERN)",
            learning: "🚀 Learning: React.js, Node.js, MongoDB, Express.js, Firebase, Email.js, css"
        }
        
    ];

  const projectData = [
    {
      name: "Garment Management System",
      languages: "React, Node.js, MongoDB,express, Email.js,css",
      image: "../../garment.jpeg",
      link: "/projects#garment-management-system"
    },
    {
      name: "Movie Browsing System",
      languages: "Java, MySQL",
      image: "../../movie.jpeg",
      link: "/projects#student-management-system"
    },
    {
      name: "Personal Finance Tracker| Mobile App",
      languages: "Kotlin, xml, sharedpreferences",
      image: "../../finance.png",
      link: "/projects#personal-finance-tracker"
    },
    {
      name: "My Portfolio",
      languages: "React, css, Firebase, formsubmit",
      image: "../../portfolio.png",
      link: "/projects#student-management-system"
    },
    {
      name: "Student Management System",
      languages: "React, Node.js, MongoDB",
      image: "/logo192.png",
      link: "/projects#student-management-system"
    }
  ];
  const [showAllProjects, setShowAllProjects] = useState(false);
  const isMobile = window.innerWidth <= 600;
  const visibleProjects = isMobile && !showAllProjects ? projectData.slice(0, 2) : projectData;

  return (
    <section className="about-section" id="about" style={{ position: 'relative', overflow: 'hidden' }}>
      <ParticlesBackground />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <h2 className="section-title">Proffesional Overview</h2>
        <div className="about-grid">
          {/* Top: Who I Am */}
          <div className="about-card full-width whoami">
          <section className="professional-overview card">
 
  <p>Here’s a snapshot of where I am in my journey:</p>
  {currentStatus.map((status,index)=>(
     <ul className="personal-timeline">
     <li>{status.campus_Status}</li>
     <li>{status.passion}</li>
     <li>{status.building}</li>
     <li>{status.learning}</li>
   </ul>
  ))}
</section>

          </div>

          {/* Left: Certifications */}
          <Certifications />

          {/* Center: Skills and Education (stacked vertically) */}
          <div className="about-center-column">
            <div className="about-card skills">
              <h3>Skills</h3>
              <div className="skill-grid">
                <div className="skill-item">
                  <FaHtml5 size={40} color="#e44d26" />
                  <span>HTML</span>
                </div>
                <div className="skill-item">
                  <FaCss3Alt size={40} color="#264de4" />
                  <span>CSS</span>
                </div>
                <div className="skill-item">
                  <FaJs size={40} color="#f7df1e" />
                  <span>JavaScript</span>
                </div>
                <div className="skill-item">
                  <FaReact size={40} color="#61dbfb" />
                  <span>React</span>
                </div>
                <div className="skill-item">
                  <FaNodeJs size={40} color="#3c873a" />
                  <span>Node.js</span>
                </div>
                <div className="skill-item">
                  <SiMongodb size={40} color="#4db33d" />
                  <span>MongoDB</span>
                </div>
                <div className="skill-item">
                  <FaGitAlt size={40} color="#f1502f" />
                  <span>Git</span>
                </div>
                <div className="skill-item">
                  <SiFirebase size={40} color="#ffcb2b" />
                  <span>Firebase</span>
                </div>
                <div className="skill-item">
                  <SiMysql size={40} color="#00758F" />
                  <span>MySQL</span>
                </div>
                <div className="skill-item">
                  <SiPython size={40} color="#306998" />
                  <span>Python</span>
                </div>
                <div className="skill-item">
                  <FaJava size={40} color="#f89820" />
                  <span>Java</span>
                </div>
                <div className="skill-item">
                  <FaGithub size={40} color="black" />
                  <span>Github</span>
                </div>
              </div>
            </div>
            <Educations/>
          </div>

          {/* Right: Projects */}
          <div className="about-card projects-wrapper">
            <h3>
              Projects 🚀
              <span style={{ fontSize: "1rem", marginLeft: 8, color: "#555" }}>({projectData.length})</span>
            </h3>
            <div style={{ maxHeight: '700px', overflowY: 'auto', paddingRight: '8px' }}>
              {visibleProjects.map((project, idx, arr) => (
                <div key={project.name} className="project-3d-hover" style={{ marginBottom: idx !== arr.length - 1 ? '18px' : 0 }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px' }}>
                    <div style={{ fontWeight: 'bold', fontSize: '0.9rem',marginLeft: '10px' }}>{project.name}</div>
                    <div style={{ color: '#555', fontSize: '0.85rem' ,marginLeft: '10px'}}>{project.languages}</div>
                    <div style={{ position: 'relative', width: 190, minHeight: 100, marginTop: 6 }}>
                      <img src={project.image} alt={project.name} style={{ width: 300, height: 150, borderRadius: 8, objectFit: 'cover', boxShadow: '0 2px 8px rgba(0,0,0,0.12)' }} />
                      <a
                        className="view-cert-btn"
                        href="/projects.link"
                        style={{ background: '#007bff', color: 'white', border: 'none', position: 'absolute', right: -90, bottom: 6, fontSize: '0.95rem', padding: '6px 12px' }}
                      >
                        See More
                      </a>
                    </div>
                  </div>
                  {idx !== arr.length - 1 && <hr style={{ margin: '18px 0', border: 0, borderTop: '1.5px solid #e0e0e0' }} />}
                </div>
              ))}
            </div>
            {isMobile && !showAllProjects && projectData.length > 2 && (
              <div style={{ textAlign: "center", marginTop: 10 }}>
                <button
                  style={{
                    background: "none",
                    border: "none",
                    color: "#007bff",
                    fontWeight: "bold",
                    cursor: "pointer",
                    fontSize: "1rem",
                    textDecoration: "underline"
                  }}
                  onClick={() => setShowAllProjects(true)}
                >
                  See more
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
