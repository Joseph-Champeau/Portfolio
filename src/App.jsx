import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';

function App() {

  return (
    <div className="container">
      <section className="left-col">
        <Hero />
      </section>

      <section className="right-col">
        <About />
        <Experience />
        <Projects />
      </section>
    </div>
  )
}

export default App
