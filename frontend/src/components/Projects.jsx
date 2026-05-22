import { useState } from "react";
import Card from "./Card"
import ProjectCard from "./ProjectCard"
import ecom_demo from "/ecom_demo.png";
import maqr_demo from "/maqr_demo.png";
import attendance1 from "/attendance1.png";
import attendance2 from "/attendance2.png";
import tap_demo from "/tap_demo.png";
import greenmarkt1 from "/greenmarkt1.png"
import greenmarkt2 from "/greenmarkt2.png"
import greenmarkt3 from "/greenmarkt3.png"
import glut1 from "/glut1.png"
import glut2 from "/glut2.png"
import glut3 from "/glut3.png"

function Projects() {
  const myProjects = [
    {
      title: "GreenMarkt",
      content:
        "Full-stack web application team project using Node.js,Express,EJS,Ajax for backend development course",
      img_link: [greenmarkt1,greenmarkt2,greenmarkt3],
      link:"https://github.com/omercakir2/CTIS256_TERM_PROJECT"
    },
    {
      title: "Hitting the Ballons",
      content: "Game developed using openGL and glut for Technical Mathematics with Programming course",
      img_link: [glut1,glut2,glut3],
      link: "https://github.com/omercakir2/OpenGL"
    },
    {
      title: "Dynamic QR Generator",
      content:
        "A web application for generating and managing dynamic QR codes using Django",
      img_link: [maqr_demo],
      link:"https://github.com/omercakir2/MaQR"
    },
    {
      title: "Bilkent Attendance Counter",
      content:
        "A Chrome Extension for Bilkent University’s STARS system, automating attendance tracking and providing real-time data for students.",
      img_link: [attendance1,attendance2],
      link:"https://github.com/omercakir2/StarsAttendanceCalculator"
    },
    {
      title: "Tap the Black Tiles",
      content:
        "An interactive, reflex-based web game developed using vanilla JavaScript, HTML5, and CSS3 for frontend development course. Features dynamic DOM manipulation and optimized event handling for real-time user interaction and score tracking.",
      img_link: [tap_demo],
      link:"https://github.com/omercakir2/FrontEnd_Project"
    }
    
  ];

  return (
    <div id="projects">
      <div>
        <h2 className="centerText">Projects</h2>
        <div className="cards">
          {myProjects.map((p, i) => (
            <ProjectCard
              key={i}
              title={p.title}
              content={p.content}
              img_link={p.img_link}
              link={p.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Projects;
