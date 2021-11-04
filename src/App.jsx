import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import Titulo from './components/titulo/Titulo';
import Search from './components/search/Search';
import Peliculas from './components/peliculas/Peliculas';
import EnDetalle from './components/enDetalle/EnDetalle';
import Login from  './components/login/Login';
import Logout from './components/logout/Logout';
import { useAuth0 } from '@auth0/auth0-react';
import ErrorLink from './components/errores/errorLink/ErrorLink';
import ErrorPeli from './components/errores/errorPeli/ErrorPeli';
import MenuLateral from './components/menuLateral/MenuLateral';
import './App.css';


const App = () => {
    const {user, isAuthenticated, isloading} = useAuth0();
    const size = 20;
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
                        <MenuLateral size={size}/>
                    </div>
                    <div className="peliculas">
                        {/* <Redirect from="/aventura" to="/caca" /> */}
                        <Route exact path='/pelicula/:peliId'> <EnDetalle/> </Route>
                        <Route strict path='/aventura/'> <p>dsdsd</p> </Route>
                        <Route exact path='/'> <Peliculas/> </Route>
                        <Route path='/pelicula/'><ErrorLink/> </Route>
                        <Route path='/'><ErrorPeli/> </Route>
                    </div>  
                    <div className="sponsors">
                        <p>Sponsor: x</p>
                        <img src='./' alt="sponsor"></img>
                    </div>
                </div>
                <Route exact path='/prueba/'> <Titulo/> </Route>
            </Switch>
        </Router>
    );
}

export default App;

// ______________________ DUDAS__________________

    // EnDetalle: como puedo poner el fondo de de pantalla de cada peli con su propia foto ?
    // CSS: como puedo pasar props?
    // Componentes: como pasar props? puedo inventarmelo?
    // Peliculas: ya no me carga las primeras dos veces, pero no se si es correcto
    // App: se pueden poner varios router ?

// ______________________ FALLOS__________________

    // Solo me cargan las primeras 20 peliculas, y como no son suficientes no hay scroll y no puedo ver mas
    // App: supuestamente con switch solo me renderiza el primer Route pero no es asi
    // App: aunque ponga en orden de especificacion las rutas, me las coje todas
// ______________________ MAS FUNCIONALIDAD__________________

    // añadir el contacto para posibles emails
    // mejorar los mensajes de error
    // añadir todas las peliculas despues de las buscadas como sugerencia
    // base de datos para los Sponsors
    // buscar un traductor
    // zona de sponsors
    // zona de categorias
    // capturar busquedas
    // sessions para guardar registros
    // templates con graficos y tablas
    // añadir actores y directores en EnDetalle
    // manejo de sesiones para guardar registros y busquedas realizadas
    // añadir mas buscados a lo mejor
    // boton de ordenado por: nota, vistas, buscadas..