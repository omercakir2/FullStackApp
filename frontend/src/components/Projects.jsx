import { useState } from "react";
import Card from "./Card";

function Projects() {
  const myProjects = [
    {
      title: "E-commerce Project With Django",
      content: "A comprehensive full-stack marketplace built with Django",
      img_link:
        "https://github.com/omercakir2/E-commerce/raw/main/sample_pngs/v1.1.1/home_2.png",
    },
    {
      title: "MaQr - Dynamic QR Generator",
      content:
        "A sophisticated web application for generating and managing dynamic QR codes.",
      img_link:
        "https://github.com/omercakir2/MaQR/raw/main/sample_pngs/qr1.png",
    },
    {
      title: "Bilkent Attendance Counter",
      content:
        "A specialized Chrome Extension for Bilkent University’s STARS system, automating attendance tracking and providing real-time data for students.",
      img_link:
        "https://lh3.googleusercontent.com/jNjWCDfSZyZa0qae_uFqlPbBJaULLlGma1N72dsxWBMDkil50omUdH8E-qUeou1ZGAafsfbsmUAkHXDryqPvanDVr-0=s1280-w1280-h800",
    },
    {
      title: "Tap the Black Tiles",
      content:
        "An interactive, reflex-based web game developed using vanilla JavaScript, HTML5, and CSS3. Features dynamic DOM manipulation and optimized event handling for real-time user interaction and score tracking.",
      img_link:
        "https://github.com/omercakir2/FrontEnd_Project/blob/main/demo.png?raw=true",
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
