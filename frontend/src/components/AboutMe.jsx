import Card from "./Card";
import Button from "./Button"; 
import photo from "../../public/me.png";

function AboutMe() {
  return (
    <div id="about">
      <h2 className="centerText">Who is Ömer Çakır?</h2>
      
      {/* Üst Bölüm: Akademik & Fotoğraf */}
      <div className="cards">
        <Card
          title="Academic Background & Tech Stack"
          content="I am a 2nd-year CTIS student at Bilkent University, but I’ve always believed that software engineering is learned by building. My academic path is driven by a desire to turn complex theories into functional tools. Whether it's mastering database normalization to ensure data integrity or developing specialized Chrome extensions like the Bilkent Attendance Automator to solve campus-wide pain points, I focus on practical impact. Currently, I am deepening my expertise in the Django, React, and PostgreSQL ecosystem, aiming to build scalable applications that bridge the gap between elegant code and real-world utility."
        />
        <img
          src={photo}
          alt="Ömer Çakır"
          style={{ 
            width: "300px", 
            borderRadius: "1rem", 
            boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            objectFit: "cover"
          }}
        />
      </div>

      {/* Orta Bölüm: Hobiler */}
      <div className="cards">
        <Card
          title="Hobbies & Interests"
          content="When I’m not at my computer, I spend a lot of time with music; I play both the guitar and the saz. I’m also a big fan of video games with great stories and gameplay, especially titles like Ghost of Tsushima and Detroit: Become Human. To stay active, I enjoy swimming and playing football. I think having these hobbies keeps me creative and helps me stay focused when I get back to my projects."
        />
      </div>

      {/* Alt Bölüm: Sosyal Medya & CV Butonları */}
      <div className="button-group" style={{ display: 'flex', gap: '15px', justifyContent: 'center', marginTop: '30px', flexWrap: 'wrap' }}>
        
        {/* LinkedIn - Klasik Mavi & Beyaz Yazı */}
        <Button 
          text="Linkedin" 
          link="https://linkedin.com/in/omercakir" 
          bg_color="#0ea5e9" 
          svg_link="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/1280px-LinkedIn_icon.svg.png"
          font_color="#ffffff"
        />

        {/* GitHub - Koyu Antrasit & Açık Gri Yazı */}
        <Button 
          text="GitHub" 
          link="https://github.com/omercakir" 
          bg_color="#334155" 
          svg_link="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
          font_color="#f1f5f9"
        />

        {/* Resume - Canlı Yeşil & Beyaz Yazı */}
        <Button 
          text="Download Resume" 
          link="/omercakir_resume.pdf" 
          bg_color="#10b981" 
          svg_link="https://www.svgrepo.com/show/491176/download-minimalist.svg"
          font_color="#ffffff"
        />
      </div>
    </div>
  );
}

export default AboutMe;