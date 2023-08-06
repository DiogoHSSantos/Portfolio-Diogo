import '../styles/projeto.css'
import projetos from './meusProjetos';


function Projeto(){
    
    return(
        <div className="allProjectArea">
            {projetos.map((i)=>{
                return(
                    <div key={i.id} className="projeto">
                        <div className="descriptionProjectArea">
                            <h1 className="projetoTitle">{i.title}</h1>
                            <p className="projetoDescription">{i.description}</p>
                        </div>
                        <div className='navPArea'>
                            <div className="linkProjectsArea">
                                <a href={i.link} target="_blank"><i className='bx bx-link' ></i></a>
                                <a href={i.githubRepo} target="_blank"><i className='bx bxl-github'></i></a>
                            </div>
                            <img src={i.linguagem} alt="Imagem da Linguage que o projeto foi programado" className="logoLinguagemProjeto"/>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Projeto;