import { useState } from 'react';
import '../styles/phone-style-components/menu.sass'
import '../styles/tablet-style-components/menu.sass'

const Menu = ()=>{

    const [linha, setLinha] = useState('menu-burger')
    const [menuArea, setMenuArea] = useState('menu-area')

    const MenuAtivo = ()=>{
        linha=='menu-burger'?setLinha('menu-burger burger-active'):setLinha('menu-burger')
        menuArea=='menu-area'?setMenuArea('menu-area menu-area-active'):setMenuArea('menu-area')
    }

    const desativarMenu = ()=>{
        menuArea=='menu-area menu-area-active'?setMenuArea('menu-area'):''
        linha=='menu-burger burger-active'?setLinha('menu-burger'):''
    }

    return(
        <section id="menu-content">
            <button className={linha} onClick={MenuAtivo}>
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
            </button>

            <div className={menuArea}>
                <a href="#Home" className="nav-item-menu" onClick={desativarMenu}>Home <span className="line-menu"></span></a>
                <a href="#About" className="nav-item-menu" onClick={desativarMenu}>About <span className="line-menu"></span></a>
                <a href="#Projects" className="nav-item-menu" onClick={desativarMenu}>Projects <span className="line-menu"></span></a>
            </div>
        </section>
    );
};

export default Menu;
