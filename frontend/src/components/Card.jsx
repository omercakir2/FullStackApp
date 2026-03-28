function Card({ content, title , img_link}) {
  return (
        <div className="card">
          <h2>{title}</h2>
          <span>
            {content} 
          </span>
          <img src={img_link} alt=""  style={{margin:"10px"}}/>
        </div>
    
  );
}
export default Card;
