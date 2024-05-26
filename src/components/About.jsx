import '../styles/phone-style-components/about.sass'
import '../styles/tablet-style-components/about.sass'
import '../styles/desktop-style-components/about.sass'

const About = ()=>{
    return(
        <section id="About">
            <div className="titulo-about">
                <h2>Sobre mim</h2><span className='linha-titulo-about'></span>
            </div>
            <div className="sobre-mim-description">
                <p>Muito prazer em conhecê-lo, é um prazer imenso ter você aqui!
                    <br/>
                    <br/>
                    Contando um pouco sobre mim, eu sou Diogo, nasci em 2003 e estou estudando programação desde o início de 2020, no intuíto de entrar no mercado de trabalho Front-End.
                    <br/>
                    <br/>
                    sou um cara muito estudioso, concentrado nos meus objetivos e determinado sobre onde quero chegar.
                    <br/>
                    <br/>
                    Espero que você se interesse por meu trabalho e depois de conversarmos, que possamos trabalhar jutos e que eu possa demonstrar minhas abilidades em trabalho.
                </p>
            </div>
        </section>
    );
};

export default About;