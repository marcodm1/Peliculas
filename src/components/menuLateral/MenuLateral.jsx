import { BrowserRouter as Router, Link } from 'react-router-dom';
import Sponsors from './sponsors/Sponsors';
import './MenuLateral.css';

const MenuLateral = (props) => {
    
    return ( 
        <>
        <h2>Por género:</h2>
        <Router>
            <Link to='/accion'> <div className="tituloMenu">Accion</div> </Link> 
            <Link to='/aventura'> <div className="tituloMenu">Aventura</div> </Link>
            <Link to='/cienciaFiccion'> <div className="tituloMenu">CienciaFiccion</div></Link>
            <Link to='/drama'> <div className="tituloMenu">Drama</div> </Link>
            <Link to='/fantasia'> <div className="tituloMenu">Fantasia</div> </Link>
            <Link to='/musical'> <div className="tituloMenu">Musical</div></Link>
            <Link to='/suspense'> <div className="tituloMenu">Suspense</div> </Link>
            <Link to='/terror'><div className="tituloMenu">Terror</div></Link>
        
            <h2>Contactos:</h2>

            <Link to='/sponsors'> <Sponsors/> </Link>
        </Router>
        </>
    )
}
export default MenuLateral;