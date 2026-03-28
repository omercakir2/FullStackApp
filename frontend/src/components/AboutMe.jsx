import Card from "./Card";
import Button from "./Button";
import me from "../../public/me.png";

function AboutMe() {
  const handleDownload = () => {
    // Portu 5001 yaptıysan ona göre güncelle
    window.location.href = `${import.meta.env.VITE_API_URL}/api/download-resume`;
  };

  
  return (
    <div id="about">
      <br />
      <br />
      <h2 className="centerText">Who is Ömer Çakır?</h2>

      {/* Üst Bölüm: Akademik & Fotoğraf */}
      <div className="cards">
        <Card
          title="Academic Background"
          content="I am a 2nd-year CTIS student at Bilkent University.I’ve always believed that software engineering is learned by building. My academic path is driven by a desire to turn complex theories into functional tools. Whether it's mastering database normalization to ensure data integrity or developing specialized Chrome extensions like the Bilkent Attendance Automator to solve campus-wide pain points, I focus on practical impact. Currently, I am deepening my expertise in Express.js, React, and DBMSs ecosystem, aiming to build scalable applications that bridge the gap between elegant code and real-world utility."
        />
        <img
          src={me}
          alt="Ömer Çakır"
          style={{
            width: "300px",
            borderRadius: "1rem",
            boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            objectFit: "cover",
          }}
        />
      </div>

      {/* Orta Bölüm: Hobiler */}
      <div className="cards">
        <Card
          title="Hobbies & Interests"
          content="I spend a lot of time with music; I play both the guitar and the saz. I’m also a big fan of video games with great stories and gameplay, especially the ones like Ghost of Tsushima and Detroit: Become Human. To stay active, I enjoy swimming and playing football. I think having these hobbies keeps me creative and helps me stay focused."
        />
      </div>

      {/* Alt Bölüm: Sosyal Medya & CV Butonları */}
      <div
        className="button-group"
        style={{
          display: "flex",
          gap: "15px",
          justifyContent: "center",
          marginTop: "30px",
          flexWrap: "wrap",
        }}
      >
        {/* LinkedIn - Klasik Mavi & Beyaz Yazı */}
        <Button
          text="Linkedin"
          link="https://www.linkedin.com/in/%C3%B6mer-%C3%A7ak%C4%B1r-b0aa74284/"
          bg_color="#0ea5e9"
          svg_link="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/1280px-LinkedIn_icon.svg.png"
          font_color="#ffffff"
        />

        {/* GitHub - Koyu Antrasit & Açık Gri Yazı */}
        <Button
          text="GitHub"
          link="https://github.com/omercakir2"
          bg_color="#334155"
          svg_link="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
          font_color="#f1f5f9"
        />

        {/* Resume - Canlı Yeşil & Beyaz Yazı */}
        <Button
          text="Download Resume"
          link="http://localhost:5001/api/download-resume"
          bg_color="#10b981"
          svg_link="https://www.svgrepo.com/show/532034/cloud-arrow-down.svg"
          font_color="#ffffff"
        />
      </div>
    </div>
  );
}

export default AboutMe;
