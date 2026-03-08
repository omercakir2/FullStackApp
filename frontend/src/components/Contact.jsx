import Card from "./Card";

function Contact() {
  // İçeriği JSX olarak tanımlıyoruz
  const content = (
    <div className="contact-links">
      <a href="#">Phone Number</a>
      <a href="#">Mail</a>
      <a href="#">Linkedin</a>
      <a href="#">Github</a>
    </div>
  );

  return (
    <div id="contact">
      <h2 className="centerText">Contact</h2>
      <form action="" method="post">
        <label htmlFor="name">Your Name</label>
        <input type="text"  placeholder="Alex"/>

        <label htmlFor="mail">Your Mail</label>
        <input type="text" placeholder="example@gmail.com"/>

        <label htmlFor="mesasge">Message</label>
        <input type="text" />

        <button type="submit" className="submit-btn">Submit</button>
      </form>
      
      <div className="cards">
        <Card content={content} />
      </div>
    </div>
  );
}

export default Contact;