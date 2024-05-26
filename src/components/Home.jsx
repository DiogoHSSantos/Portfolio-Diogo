import '../styles/phone-style-components/home.sass'
import '../styles/tablet-style-components/home.sass'

const Home = ()=>{
    return(
        <section id="Home">
            <div className="content-home-area">
                <div className="title-area-content">
                    <div className="titulo">
                        <h1>Diogo Henrique</h1>
                        <h1>developer</h1>
                        <h1 className="cor-rosa">Front-end Júnior</h1>
                    </div>
                    
                    <span className="line"></span>
                    <p className="frase-impactante">Sem saber que era impossivel, foi lá e fez</p>
                </div>

                <div className="area-contact-content">
                    <a href="https://drive.google.com/file/d/1IsDecZ8F8XDPMQjQJgMVablnnSefeOxL/view?usp=drive_link" target='_blank' className='link-curriculo-btn'>
                        <button className="curriculo-btn">
                            Baixar currículo PDF
                        </button>
                    </a>
                    <div className="meios-de-contato">
                        <a href="https://wa.me/+5511958784456" target='_blank'><i className='bx bxl-whatsapp'></i></a>
                        <a href="https://www.instagram.com/diogoo_h._dev/" target='_blank'><i className='bx bxl-instagram' ></i></a>
                        <a href="https://github.com/DiogoHSSantos" target='_blank'><i className='bx bxl-github' ></i></a>
                        <a href="https://www.linkedin.com/in/diogo-henrique-22732221b/" target='_blank'><i className='bx bxl-linkedin' ></i></a>
                    </div>
                </div>
            </div>

        </section>
    )
}
export default Home;