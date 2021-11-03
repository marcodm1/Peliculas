import { useAuth0 } from '@auth0/auth0-react';
import './Perfil.css';

const Perfil = () => {
    const {user, isAuthenticated, isloading} = useAuth0();

    if (isloading) {
        return <div>Loading...</div>
    }

    return (
        isAuthenticated && (
            <div>
                <img className="fotoPerfil" src={user.picture} alt={user.name}/>
            </div>
        )
    )
}
export default Perfil;

// user devuelve:
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