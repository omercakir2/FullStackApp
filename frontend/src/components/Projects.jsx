import { useState } from "react";
import Card from "./Card";
import ecom_demo from "/ecom_demo.png";
import maqr_demo from "/maqr_demo.png";
import attendance_demo from "/attendance_demo.png";
import tap_demo from "/tap_demo.png";

function Projects() {
  const myProjects = [
    {
      title: "E-commerce Project With Django",
      content: "A comprehensive full-stack marketplace built with Django",
      img_link: ecom_demo,
    },
    {
      title: "MaQr - Dynamic QR Generator",
      content:
        "A sophisticated web application for generating and managing dynamic QR codes.",
      img_link: maqr_demo,
    },
    {
      title: "Bilkent Attendance Counter",
      content:
        "A specialized Chrome Extension for Bilkent University’s STARS system, automating attendance tracking and providing real-time data for students.",
      img_link: attendance_demo,
    },
    {
      title: "Tap the Black Tiles",
      content:
        "An interactive, reflex-based web game developed using vanilla JavaScript, HTML5, and CSS3. Features dynamic DOM manipulation and optimized event handling for real-time user interaction and score tracking.",
      img_link: tap_demo,
    },
  ];

  return (
    <div id="projects">
      <div>
        <h2 className="centerText">Projects</h2>
        <div className="cards">
          {myProjects.map((p, i) => (
            <Card
              key={i}
              title={p.title}
              content={p.content}
              img_link={p.img_link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Projects;
