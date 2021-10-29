import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Titulo from './components/titulo/Titulo';
import Search from './components/search/Search';
import Peliculas from './components/peliculas/Peliculas';
import EnDetalle from './components/enDetalle/EnDetalle';
import Favoritos from './components/favoritos/Favoritos';
import Perfil from './components/perfil/Perfil';

const App = () => {
    return (
    <>
    <Router>
      <div style={{display: 'flex', justifyContent: "space-Between"} }>
        <Link to='/'> <Titulo/> </Link>
        <Search/>
        <div style={{display: 'flex'} }>
          {/* <Login/> */}
          <Perfil/>
          <Link to='/favoritos'> <Favoritos/> </Link>
        </div>
        
      </div>
      <Switch>
        <Route exact path='/'> <Peliculas/> </Route>
        <Route exact path='/pelicula/:peliId'> <EnDetalle/> </Route>
        <Route exact path='/favoritos'> <p>Estamos en favoritos</p> </Route>
        {/* <Route exact path='/perfil'> <p>Estamos en el perfil</p> </Route> */}
        <Route path='/'> <br></br>Falta indicar en la dirección el número de la película deseada. Ejemplo pelicula/436969 </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;