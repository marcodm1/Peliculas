

// aun no se esta usando Encabezado.jsx

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Search from '../search/Search';
import Titulo from '../titulo/Titulo';
import Perfil from '../perfil/Perfil';
import Logout from '../logout/Logout';
import Login from '../login/Login';
import Peliculas from '../peliculas/Peliculas';
import ErrorLink from '../errores/errorLink/ErrorLink';
import './Encabezado.css';

const EnDetalle = () => {
  const {isAuthenticated} = useAuth0();
  return (
    <>
    <Router>
    <div style={{display: 'flex', justifyContent: "space-Between", position: "fixed", backgroundColor: "black"} }>
        <Search/>
        <Link to='/'> <Titulo/> </Link>
        <div style={{display: 'flex'} }>
        {isAuthenticated ? <><Perfil/><Logout/></> : <Login/>}
        </div>
    </div>
    <Switch>
        <Route exact path='/'> <Peliculas/> </Route>
        <Route exact path='/pelicula/:peliId'> <EnDetalle/> </Route>
        <Route path='/'> <ErrorLink/> </Route>
    </Switch>
    </Router>
    </>
  )
}
export default EnDetalle;