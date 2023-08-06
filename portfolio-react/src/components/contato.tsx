

import '../styles/contato.css'
import '../styles/mobileLandscape.css'


const Linkedin = 'https://www.linkedin.com/in/diogo-henrique-22732221b/';
const GitHub = 'https://github.com/DiogoHSSantos';
const WhatsApp = 'https://wa.me/11958784456';
const Instagram = 'https://www.instagram.com/diogoo_h._dev/';

function Contato() {

    return(
        <div className='areaContato'>
            <a href={Linkedin} target='_blank'>
                <div className="itemContato">
                    <p>LinkedIn</p>
                    <i className='bx bxl-linkedin' ></i>
                </div>
            </a>

            <a href={GitHub} target='_blank'>
                <div className="itemContato">
                    <p>GitHub</p>
                    <i className='bx bxl-github'></i>
                </div>
            </a>

            <a href={WhatsApp} target='_blank'>
                <div className="itemContato">
                    <p>WhatsApp</p>
                    <i className='bx bxl-whatsapp'  ></i>
                </div>
            </a>

            <a href={Instagram}target='_blank'>
                <div className="itemContato">
                    <p>Instagram</p>
                    <i className='bx bxl-instagram' ></i>
                </div>
            </a>

        </div>
    )
}
export default Contato;