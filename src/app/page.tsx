import Navbar from '../components/Navbar'
import About from '../components/About';
import Experience from '../components/Experience';
import Feedbacks from '../components/Feedbacks';
import Hero from '../components/Hero';
import Tech from '../components/Tech';
import Works from '../components/Works';
import Contact from '../components/Contact';
import StarCanvas from '../components/canvas/Stars';

const App = () => {
  return (
    <div className = "relative z-0 bg-primary">
      <div className = "bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
      <div className = "relative z-0">
        <Contact />
        <StarCanvas />
      </div>
    </div>
  )
}

export default App