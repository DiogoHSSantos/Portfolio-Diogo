import '../styles/phone-style-components/projects.sass'
import '../styles/tablet-style-components/projects.sass'
import '../styles/desktop-style-components/projects.sass'

import listaDeProjetos from './lista-projetos.js'

const Projects = ()=>{


    return(
        <section id="Projects">
            <div className="titulo-projects">
                <h2>Projetos </h2><span className="linha-titulo-projects"></span>
            </div>

            <div className="content-project">
                {listaDeProjetos.map((i)=>{
                    return(
                        <a href={i.link} target='_blank' className="link-project"  key={i.id}>
                            <div className="project-area">
                                <h3 className="nome-do-projeto">{i.nome}<span className="linha-nome-projeto"></span></h3>
                                <p className="descricao-do-projeto">{i.descricao}</p>
                                {/* <div className="linguagem-utilizada">{i.linguagens.filter((i)=> i.length)}</div> */}

                                <div className="area-linguagens-utilizadas">
                                    {i.linguagens.map((i)=>{
                                        return(
                                            <div className="linguagem-utilizada" key={i[1]}>
                                                <p>{i}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </a>
                    )
                })}
            </div>
        </section>
    )
}

export default Projects