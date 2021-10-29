import React , { useState } from 'react';
// import React , { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './perfil.css';

// Tengo que poner un estado, para cuando este el usuario desconectado salga en el boton, logearse, y si esta 
// logeado y entrada a su perfil, quie salga la informacion del perfil.

const Perfil = () => {
    const {loginWithRedirect, user} = useAuth0();
    // const [cargado, setCargado] = useState(true);

    return (
        <>
        <div className="perfil">
            <button onClick={() => loginWithRedirect()}>Conectarse</button>
        </div>
        {/* {JSON.stringify(user)} */}
        {/* {user.name} */}
        </>
    )
}
export default Perfil;

// Los datos quu devuelve al conectarse:
// "given_name":"marco"
// "family_name":"dominguez"
// "nickname":"marcodomat"
// "name":"marco dominguez"
// "picture":"https://lh3.googleusercontent.com/a-/AOh14GihOaIzXBQIV2Zw9yUaOYzwbXqsBV15cuhDuHzw=s96-c"
// "locale":"es"
// "updated_at":"2021-09-21T08:11:58.351Z"
// "email":"marcodomat@gmail.com"
// "email_verified":true
// "sub":"google-oauth2|100453930244470696706"