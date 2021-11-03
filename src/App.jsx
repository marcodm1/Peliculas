import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Titulo from './components/titulo/Titulo';
import Search from './components/search/Search';
import Peliculas from './components/peliculas/Peliculas';
import EnDetalle from './components/enDetalle/EnDetalle';
import Login from  './components/login/Login';
import Logout from './components/logout/Logout';
import { useAuth0 } from '@auth0/auth0-react';
import ErrorLink from './components/errores/errorLink/ErrorLink';
import './App.css';


const App = () => {
    const {user, isAuthenticated, isloading} = useAuth0();
    return (
        <Router>
            <div className="elEncabezado">
                <div className="search">
                    <Search/>
                </div>
                <div className="titulo">
                    <Link to='/'> <Titulo/> </Link>
                </div>
                <div className="perfil">
                    {isAuthenticated ? <><Logout name={user.name}/></> : <Login name="conectarse"/>}
                </div>
            </div>
        <Switch>
            <div className="elBody"> 
                <div className="generos">
                    <p>Géneros</p>
                </div>
                <div className="peliculas">
                    {/* <Route exact path='/'> <Peliculas/> </Route> */}
                    <p>peliculas</p>
                </div>
                <div className="sponsors">
                    <p>Sponsors</p>
                </div>
            </div>

            
            {/* <Route exact path='/'> <Peliculas/> </Route> */}
                <Route exact path='/pelicula/:peliId'> <EnDetalle/> </Route>
                <Route exact path='/prueba/'> <Titulo/> </Route>
                <Route path='/'> <ErrorLink/> </Route>
                <Route path='/pelicula/'> <ErrorLink/> </Route>
            </Switch>
        </Router>
    );
}

export default App;