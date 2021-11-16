import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Titulo from './components/titulo/Titulo';
import Search from './components/search/Search';
import Peliculas from './components/peliculas/Peliculas';
import EnDetalle from './components/enDetalle/EnDetalle';
import Login from  './components/login/Login';
import Logout from './components/logout/Logout';
// import { useAuth0 } from '@auth0/auth0-react';
// menu
import MenuAccion from './components/menuLateral/generos/accion/MenuAccion';
import MenuAnimacion from './components/menuLateral/generos/animacion/MenuAnimacion';
import MenuAventura from './components/menuLateral/generos/aventura/MenuAventura';
import MenuCienciaF from './components/menuLateral/generos/cienciaFiccion/MenuCienciaF';
import MenuComedia from './components/menuLateral/generos/comedia/MenuComedia';
import MenuCrimen from './components/menuLateral/generos/crimen/MenuCrimen';
import MenuDrama from './components/menuLateral/generos/drama/MenuDrama';
import MenuFantasia from './components/menuLateral/generos/fantasia/MenuFantasia';
import MenuMisterio from './components/menuLateral/generos/misterio/MenuMisterio';
import MenuMusical from './components/menuLateral/generos/musical/MenuMusical';
import MenuTerror from './components/menuLateral/generos/terror/MenuTerror';
import MenuLateral from './components/menuLateral/MenuLateral';
import FormularioSponsor from './components/menuLateral/formularioSponsor/FormularioSponsor';
// menuOrden
// import MenuOrden from './components/menuOrden/MenuOrden';

// errores
// import ErrorLink from './components/errores/errorLink/ErrorLink';
// import ErrorPeli from './components/errores/errorPeli/ErrorPeli';
import './App.css';

const App = () => {
    // const {user, isAuthenticated} = useAuth0();
    return (
        <Router>
            <div className="zonaEncabezado">
                <div className="search">
                    <Search/>
                </div>
                <div className="titulo">
                    <Link to='/'> <Titulo/> </Link>
                </div>
                {/* <div className="perfil">
                    {isAuthenticated ? <><Logout name={user.name}/></> : <Login name="conectarse"/>}
                </div> */}
            </div>
            <Switch>
                <div className="elBody"> 
                    <div className="zonaGeneros">
                        <MenuLateral/>
                    </div>
                    <div className="zonaPeliculas">
                        {/* <MenuOrden/> */}
                        <Route exact path='/pelicula/:peliId'> <EnDetalle/> </Route>
                        <Route exact path='/accion'> <MenuAccion/> </Route>
                        <Route exact path='/animacion'> <MenuAnimacion/> </Route>
                        <Route exact path='/aventura'> <MenuAventura/> </Route>
                        <Route exact path='/cienciaFiccion'> <MenuCienciaF/> </Route>
                        <Route exact path='/comedia'> <MenuComedia/> </Route>
                        <Route exact path='/crimen'> <MenuCrimen/> </Route>
                        <Route exact path='/drama'> <MenuDrama/> </Route>
                        <Route exact path='/fantasia'> <MenuFantasia/> </Route>
                        <Route exact path='/misterio'> <MenuMisterio/> </Route>
                        <Route exact path='/musical'> <MenuMusical/> </Route>
                        <Route exact path='/terror'> <MenuTerror/> </Route>
                        <Route exact path='/sponsors'> <FormularioSponsor/> </Route>
                        <Route exact path='/'> <Peliculas/> </Route>

                        {/* cuando entro en /pelicula me carga los dos errores de abajo */}
                        {/* <Route path='/pelicula/'><ErrorLink/> </Route>
                        <Route path='/'><ErrorPeli/> </Route> */}

                    </div>  
                    <div className="zonaSponsors">
                        <p>Sponsors:</p>
                        <div className="sponsorAnuncio"><p>Espacio de cada sponsor</p></div>
                        <div className="sponsorAnuncio"><p>Espacio de cada sponsor</p></div>
                        <div className="sponsorAnuncio"><p>Espacio de cada sponsor</p></div>
                    </div>
                </div>
                <Route exact path='/prueba/'> <Titulo/> </Route>
            </Switch>
        </Router>
    );
}

export default App;

//_________ https://trello.com/b/4o2BzD0t/proyecto ______________

// ______________________ DUDAS__________________

    // EnDetalle: como puedo poner el fondo de de pantalla de cada peli con su propia foto ?
    // CSS: como puedo pasar props?
    // Componentes: como pasar props? puedo inventarmelo?
    // Peliculas: ya no me carga las primeras dos veces, pero no se si es correcto
    // App: se pueden poner varios router ?
    // donde cambio la llamada por genero? en el comp search o en el comp peliculas?

// ______________________ FALLOS__________________

    // Solo me cargan las primeras 20 peliculas, y como no son suficientes no hay scroll y no puedo ver mas
    // App: aunque ponga en orden de especificacion las rutas, me las coje todas
    // si relleno el form y lo envio se "reinicia" pero si le doy a enviar, se vuelven a cargar los datos

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