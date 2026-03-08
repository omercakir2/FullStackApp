import { useState } from 'react';
import Card from './Card';

function Projects() {

    const myProjects = [
      {
          title: "E-commerce Project With Django",
          content: "A comprehensive full-stack marketplace built with Django"
      },
      {
          title: "MaQr - Dynamic QR Generator",
          content: "A sophisticated web application for generating and managing dynamic QR codes." 
      },
      {
          title: "Bilkent Attendance Counter",
          content: "A specialized Chrome Extension for Bilkent University’s STARS system, automating attendance tracking and providing real-time data for students."
      },
      {
          title: "Java GUI Development",
          content: "A collaborative desktop application built using Java Swing and OOP principles. Focused on team-based development with friend (Onur and Abdurrahman)"
      }
  ];

    return (
        <div id="projects">
        <div>
            <h2 className="centerText">Projects</h2>
            <div className="cards">
                {myProjects.map((p, i) => (
                    <Card key={i} title={p.title} content={p.content} img_link={"https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg?semt=ais_rp_50_assets&w=740&q=80"} />
                ))}
            </div>

            
        </div>
        </div>
    );
}
export default Projects;