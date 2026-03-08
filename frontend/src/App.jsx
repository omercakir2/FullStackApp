import NavBar from './components/NavBar.jsx'
import Landing from './components/Landing.jsx'
import AboutMe from './components/AboutMe.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import { useEffect } from 'react';
function App() {
  useEffect(() => {
    fetch('http://localhost:5001/api/data')
      .then(res => res.json())
      .then(data => console.log(data.message));
  }, []); 
  return (
    <div className="App">
      <NavBar/>
      <AboutMe/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App