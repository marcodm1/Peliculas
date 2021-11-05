import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import Titulo from './components/titulo/Titulo';
import Search from './components/search/Search';
import Peliculas from './components/peliculas/Peliculas';
import EnDetalle from './components/enDetalle/EnDetalle';
import Login from  './components/login/Login';
import Logout from './components/logout/Logout';
import { useAuth0 } from '@auth0/auth0-react';
import GeneroTerror from './components/menuLateral/generos/terror/GeneroTerror';
// import ErrorLink from './components/errores/errorLink/ErrorLink';
// import ErrorPeli from './components/errores/errorPeli/ErrorPeli';
import MenuLateral from './components/menuLateral/MenuLateral';
import './App.css';

const App = () => {
    const {user, isAuthenticated, isloading} = useAuth0();
    const size = 20;
    return (
        <Router>
            <div className="zonaEncabezado">
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
            {/* <Switch> */}
                <div className="elBody"> 
                    <div className="zonaGeneros">
                        <MenuLateral size={size}/>
                    </div>
                    <div className="zonaPeliculas">
                        {/* <Redirect from="/aventura" to="/caca" /> */}
                        <Route exact path='/pelicula/:peliId'> <EnDetalle/> </Route>
                        <Route exact path='/accion'> pelis de acción </Route>
                        <Route exact path='/aventura'> pelis de aventura </Route>
                        <Route exact path='/cienciaFiccion'> pelis de cienciaFiccion </Route>
                        <Route exact path='/drama'> pelis de drama </Route>
                        <Route exact path='/fantasia'> pelis de fantasia </Route>
                        <Route exact path='/musical'> pelis de musical </Route>
                        <Route exact path='/suspense'> pelis de suspense </Route>
                        {/* terror es el que estoy haciendo de pruebas */}
                        <Route exact path='/terror'> <GeneroTerror/> </Route>
                        <Route exact path='/'> <Peliculas/> </Route>



                        {/* <Route path='/pelicula/'><ErrorLink/> </Route> */}
                        {/* <Route path='/'><ErrorPeli/> </Route> */}
                    </div>  
                    <div className="zonaSponsors">
                        <p>Sponsor: x</p>
                        <img src='./' alt="sponsor"></img>
                    </div>
                </div>
                <Route exact path='/prueba/'> <Titulo/> </Route>
            {/* </Switch> */}
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
    // donde cambio la llamada por genero? en el comp search o en el comp peliculas?

// ______________________ FALLOS__________________

    // Solo me cargan las primeras 20 peliculas, y como no son suficientes no hay scroll y no puedo ver mas
    // App: supuestamente con switch solo me renderiza el primer Route pero no es asi
    // App: aunque ponga en orden de especificacion las rutas, me las coje todas
    // en el Network del f12 me aparece un token que no se que es
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
    // registrar usuarios
    // añadir mas buscados a lo mejor
    // boton de ordenado por: nota, vistas, buscadas..
    // añadir formulario para los sponsors
    // poner la foto de fondo de la pagina con la que este de moda ?
    // añadir botón de subir arriba cuando se hace scroll