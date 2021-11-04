import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import MenuAccion from './generos/accion/MenuAccion';
import MenuAventura from './generos/aventura/MenuAventura';
import MenuCienciaF from './generos/cienciaFiccion/MenuCienciaF';
import MenuDrama from './generos/drama/MenuDrama';
import MenuFantasia from './generos/fantasia/MenuFantasia';
import MenuMusical from './generos/musical/MenuMusical';
import MenuSuspense from './generos/suspense/GeneroSuspense';
import MenuTerror from './generos/terror/GeneroTerror';
import './MenuLateral.css';

const MenuLateral = (props) => {
    
    return ( 
        <>
        <h2>Por género:</h2>
        <Router>
            <Link to='/accion'> <MenuAccion size={props}/> </Link> 
            <Link to='/aventura'> <MenuAventura/> </Link>
            <Link to='/cienciaFiccion'> <MenuCienciaF/> </Link>
            <Link to='/drama'> <MenuDrama/> </Link>
            <Link to='/fantasia'> <MenuFantasia/> </Link>
            <Link to='/musical'> <MenuMusical/> </Link>
            <Link to='/suspense'> <MenuSuspense/> </Link>
            <Link to='/terror'> <MenuTerror/> </Link>
        </Router>

        </>
    )
}
export default MenuLateral;