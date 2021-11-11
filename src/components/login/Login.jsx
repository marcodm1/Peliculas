import { useAuth0 } from '@auth0/auth0-react';
import './Login.css';

const Login = (props) => {
    const {loginWithRedirect} = useAuth0();

    return (
        <>
        <div className="login">
            <button onClick={() => loginWithRedirect()}>{props.name}</button>
        </div>
        </>
    )
}
export default Login;

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