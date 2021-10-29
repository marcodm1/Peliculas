import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Titulo from './components/titulo/Titulo';
import Search from './components/search/Search';
import Peliculas from './components/peliculas/Peliculas';
import EnDetalle from './components/enDetalle/EnDetalle';
import Login from  './components/login/Login';
import Logout from './components/logout/Logout';
import Perfil from './components/perfil/Perfil';
import { useAuth0 } from '@auth0/auth0-react';

const App = () => {
  const {isAuthenticated} = useAuth0();
    return (
    <>
    <Router>
      <div style={{display: 'flex', justifyContent: "space-Between"} }>
        <Search/>
        <Link to='/'> <Titulo/> </Link>
        <div style={{display: 'flex'} }>
          {isAuthenticated ? <><Perfil/><Logout/></> : <Login/>}
        </div>
        
      </div>
      <Switch>
        <Route exact path='/'> <Peliculas/> </Route>
        <Route exact path='/pelicula/:peliId'> <EnDetalle/> </Route>
        <Route path='/'> <br></br>Falta indicar en la dirección el número de la película deseada. Ejemplo pelicula/436969 </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;