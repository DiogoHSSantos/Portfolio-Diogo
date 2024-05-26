import './styles/app.sass'
import Menu from './components/Menu.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Agradecimentos from './components/Agradecimentos.jsx'

function App() {

  return (
    <section className='main-content'>
      <Menu />
      <Home />
      <About />
      <Projects />
      <Agradecimentos />
    </section>
  )
}

export default App
