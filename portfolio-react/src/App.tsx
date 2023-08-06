// ¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹
import './styles/mobileLandscape.css'
import './styles/mobile.css'

import './styles/tablets.css'
import './styles/desktop.css'

import {useState} from 'react'

import logo from './assets/LogoDiogo.png' 

import Projeto from './components/projetos'
import Contato from './components/contato';

// ¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹¹



function App() {

// *************************************************************************



  const[line1, setLine1]= useState('line1 line');
  const[line2, setLine2]= useState('line2 line');
  const[line3, setLine3]= useState('line3 line');


  const[navArea, setNavArea] = useState('navArea');

  


  
  



  const animacaoMenu = ()=>{
    line1 =='line1 line'?setTimeout(()=>{setLine1('line1 line line1Active')}, 300):setLine1('line1 line');

    line2 =='line2 line'?setLine2('line2 line line2Active'):setTimeout(()=>{setLine2('line2 line')}, 300);

    line3 =='line3 line'?setTimeout(()=>{setLine3('line3 line line3Active')}, 300):setLine3('line3 line');

    navArea == 'navArea'?setNavArea('navArea navAreaActive'):setNavArea('navArea');  
  }
  
  const fechaMenu = ()=>{
    setLine1('line1 line')
    setLine2('line2 line')
    setLine3('line3 line')
    setNavArea('navArea')
  }

  
// **************************************************************************

  return (
    <>
      <div>
        <button className='btnMenu' onClick={animacaoMenu}>
          <div className={line1}></div>
          <div className={line2}></div>
          <div className={line3}></div>
        </button>

        <div className={navArea}>
            <p className="pStyle sobreCertificados">Para saber mais sobre meus cerificados, vá em contato e acesse meu perfil do instagram, lá estarão todos os meus certificados.</p>
          <div className='MenuAll'>
            <div className="contatoRapido">
              <p>contato rápido</p>
              <div className="iconsContatoRapido">
                <a href="https://ig.me/m/diogoo_h._dev" target='_blank'>
                  <i className='bx bxl-instagram' ></i>
                </a>
                <a href="mailto:diogodeveloperjob@gmail.com">
                  <i className='bx bxl-gmail'></i>
                  </a>
                <a href="https://wa.me/11958784456" target='_blank'>
                  <i className='bx bxl-whatsapp'></i>
                  </a>
              </div>
            </div>
            <div className="navSite">
              <p>Navegação</p>
              <a href="#Home" onClick={fechaMenu}>Home</a>
              <a href="#Projects" onClick={fechaMenu}>Projetos</a>
              <a href="#Contato" onClick={fechaMenu}>Contato</a>
              <a href="#Observacoes" onClick={fechaMenu}>Observações</a>
            </div>
          </div>
        </div>
      </div>
      
      {/* --------------------------------------------------------------- */}

      <div>

        <div className='content' id='Home'>
          
          <img src={logo} alt="Logo" className='logo' />

          <div className="description">
            <div>
              <p className='apresentationName'>olá, eu sou -</p>
              <h1  className="name">Diogo Henrique</h1>
            </div>
            <h2>Front-end developer</h2>
            <p className='pStyle'>Sou desenvolvedor Front-End Júnior, seja bem vindo(a) ao meu portfolio ! Se precisar de ajuda, basta clicar no menu acima </p>
          </div>

          <div className='ilustracao'>
            <h1>{'</dev>'}</h1>
          </div>

        </div>

        {/* --------------------------------------------------------------- */}

        <div className='content' id='Projects'>
          
          <div>
            <p className='pStyle'>Meus Projetos -</p>
            <h2 className="projectsTitle">Projetos que programei por meio dos meus estudos.</h2>
          </div>

          <div className="areaScrollProjetos">
            <p className="pStyle dicaProjeto">Role para baixo para ver mais projetos, e clique na corrente para acessá-los</p>
            <Projeto/>
          </div>

        </div>

        {/* --------------------------------------------------------------- */}

        <div className='content' id='Contato'>

          <div>
            <p className="pStyle">Redes sociais e contato -</p>
            <h1 className="descriptionContact">Se gostou do que consigo programar, entre em contato! vamos trabalhar juntos!</h1>
          </div>

          <Contato/>

          <div className="contatoCelular">
            <div>
              <p className="pStyle">E-mail-</p>
              <h2 className='email'>DiogoDeveloperJob@gmail.com</h2>
            </div>
            <div>
              <p className="pStyle">Celular-</p>
              <h2 className='celular'>(+55)11 9 5878-4456</h2>
              <p className="pStyle noTel">(No momento, eu Estou sem celular. Por favor entre em contato através do E-mail, Instagram ou LinkedIn)</p>
            </div>
          </div>

        </div>

        {/* --------------------------------------------------------------- */}

        <div className='content' id='Observacoes'>
          <p className="agradecimentos">Todo esse portfólio foi produzido com ReactJS e TypesCript. Fiz adaptações com Media Query (CSS) para torna-lo responsivo, portanto, para melhor experiência você pode acessá-lo em qualquer plataforma.</p>
          <p className='agradecimentos'>Obrigado Por acessar meu portfólio, melhorias chegarão em breve.</p>
          <img src={logo} alt="" className='logoObservacoes'/>
        </div>
        
      </div>
    </>
  )
}

export default App
