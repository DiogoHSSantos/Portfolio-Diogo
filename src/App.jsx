import './styles/app.sass'
import Menu from './components/Menu.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Agradecimentos from './components/Agradecimentos.jsx'

function App() {

  return (
    <section className='main-content'>
      <div className="menu-home">
        <Menu />
        <Home />
      </div>
      <div className="about-projects-agradecimentos">
        <About />
        <Projects />
        <Agradecimentos />
      </div>
    </section>
  )
}

export default App
