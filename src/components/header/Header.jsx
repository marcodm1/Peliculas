import React from 'react';
import Titulo from '../titulo/Titulo';
import Search from '../search/Search';
import Iconos from '../iconos/Iconos';
import './Header.css';

const Header = () => {
    return (
        <>
            <div className="elTitulo">
                <Titulo/>
            </div>
            <div className="elSearch">
                <Search/>
            </div>
            <div className="losIconos">
                <Iconos/>
            </div>
        </>   
       
    )
}
export default Header;