import NavBar from './components/NavBar.jsx'
import Landing from './components/Landing.jsx'
import AboutMe from './components/AboutMe.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {
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