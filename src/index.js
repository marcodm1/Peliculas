import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Auth0Provider} from '@auth0/auth0-react';

    const domain = process.env.REACT_APP_AUTH0_DOMAIN;
    const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.render(
    // este proovedor va a almacenar el estado de la autenticacion de nuestros usuarios
    // a parte nos da metodos para conectarnos o desconectarnos
    // y nos da un hook useAuth0 gfdgdgf
    <Auth0Provider domain={domain} clientId={clientId} redirectUri={window.location.origin}>
        <App />
    </Auth0Provider>,
    document.getElementById('root')
);
