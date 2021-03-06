import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// mi App
import Titulo from './components/titulo/Titulo';
import Search from './components/search/Search';
import Peliculas from './components/peliculas/Peliculas';
import EnDetalle from './components/enDetalle/EnDetalle';
// menu
import Favoritos from './components/menuLateral/generos/favoritos/Favoritos';
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
// formulario
import FormularioSponsor from './components/formularioSponsor/FormularioSponsor';
// sponsors
import ZonaSponsors from './components/zonaSponsors/ZonaSponsors';
// css
import './App.css';

const App = () => {
    return (
        <Router>
            <div className="zonaEncabezado">
                <div className="search">
                    <Search />
                </div>
                <div className="titulo">
                    <Link to='/'> <Titulo /> </Link>
                </div>
            </div>
            <Switch>
                <div className="elBody">
                    <div className="zonaGeneros">
                        <MenuLateral />
                    </div>
                    <div className="zonaPeliculas">
                        <Route exact path='/pelicula/:peliId'> <EnDetalle /> </Route>
                        <Route exact path='/pelicula/'><p>No ha introducido una ID de pel??cula</p></Route>
                        {/* SALE UNA PAGINA DEL SERVIDOR DE ERROR CUANDO NO PONGO EL ID DE UNA PEL??CULA */}
                        <Route exact path='/favoritos'> <Favoritos /> </Route>
                        <Route exact path='/accion'> <MenuAccion /> </Route>
                        <Route exact path='/animacion'> <MenuAnimacion /> </Route>
                        <Route exact path='/aventura'> <MenuAventura /> </Route>
                        <Route exact path='/cienciaFiccion'> <MenuCienciaF /> </Route>
                        <Route exact path='/comedia'> <MenuComedia /> </Route>
                        <Route exact path='/crimen'> <MenuCrimen /> </Route>
                        <Route exact path='/drama'> <MenuDrama /> </Route>
                        <Route exact path='/fantasia'> <MenuFantasia /> </Route>
                        <Route exact path='/misterio'> <MenuMisterio /> </Route>
                        <Route exact path='/musical'> <MenuMusical /> </Route>
                        <Route exact path='/terror'> <MenuTerror /> </Route>
                        <Route exact path='/sponsors'> <FormularioSponsor /> </Route>
                        <Route exact path='/'> <Peliculas /> </Route>
                    </div>
                    <div className="zonaSponsors">
                        <ZonaSponsors />
                    </div>
                </div>
                <Route exact path='/prueba/'> <Titulo /> </Route>
            </Switch>
        </Router>
    );
}

export default App;

//_________ https://trello.com/b/4o2BzD0t/proyecto _______
//_________ http://marcodm.atwebpages.com/ _______________

// ______________________ DUDAS__________________

    // EnDetalle: como puedo poner el fondo de de pantalla de cada peli con su propia foto ?
    // CSS: como puedo pasar props?
    // Componentes: como pasar props? puedo inventarmelo?
    // App: se pueden poner varios router ?

// ______________________ FALLOS__________________

    // Solo me cargan las primeras 20 peliculas, y como no son suficientes no hay scroll y no puedo ver mas
    // si relleno el form y lo envio se "reinicia" pero si le doy a enviar, se vuelven a cargar los datos

// ______________________ MAS FUNCIONALIDAD__________________

    // mejorar los mensajes de error
    // a??adir todas las peliculas despues de las buscadas como sugerencia
    // buscar un traductor
    // capturar busquedas
    // a??adir actores y directores en EnDetalle
    // boton de ordenado por: nota, vistas, buscadas..
    // a??adir bot??n de subir arriba cuando se hace scroll