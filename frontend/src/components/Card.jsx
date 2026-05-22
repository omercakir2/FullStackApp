import { useState, useEffect } from "react";

function Card({ content, title, img_link }) {
  const [activeIndex, setActiveIndex] = useState(0);

  // img_link'in geçerli bir array olup olmadığını kontrol ediyoruz
  const hasImages = Array.isArray(img_link) && img_link.length > 0;

  useEffect(() => {
    // Eğer görsel yoksa zamanlayıcıyı hiç kurma
    if (!hasImages) return;

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => 
        prevIndex === img_link.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [img_link, hasImages]);

  return (
    <div className="card">
      <h2>{title}</h2>
      <span>{content}</span>
      
      {/* 
        Eğer görsel varsa resmi bas, yoksa buraya hiçbir şey koyma (null).
        Böylece kartın yapısı ve diğer bilgileri aynen ekranda kalır.
      */}
      {hasImages ? (
        <div className="carousel-container">
          <img 
            src={img_link[activeIndex]} 
            alt={`${title} - ${activeIndex + 1}`}  
            style={{ margin: "10px", transition: "all 0.5s ease" }}
          />
        </div>
      ) : null}
    </div>
  );
}

export default Card;