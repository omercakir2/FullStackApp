import { useRef, useState } from "react";

function Contact() {
  const nameRef = useRef();
  const mailRef = useRef();
  const messageRef = useRef();

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Sayfanın yenilenmesini engeller

    setIsLoading(true);



    const data = {
      name: nameRef.current.value,
      mail: mailRef.current.value,
      message: messageRef.current.value,
    };

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/form`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      
      if (response.ok) {
        alert("Message Send Successfully");
        e.target.reset(); // Formu temizler
      }
      else if (response.status === 429) {
        alert(result.message); 
      }
      else{
        alert("Something went wrong!");
      }
    } catch (error) {
      alert("Connection Error!");
    } finally {
      setIsLoading(false);

    }
  };

  return (
    <div id="contact">
      <h2 className="centerText">Contact</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Your Name</label>
        <input id="name" ref={nameRef} type="text" required />

        <label htmlFor="mail">Your Mail</label>
        <input id="mail" ref={mailRef} type="email" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" ref={messageRef} required />

        <button disabled={isLoading} type="submit" className="submit-btn" >
          {isLoading ? "Wait..." : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default Contact;
