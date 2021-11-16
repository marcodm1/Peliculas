import React from 'react';
import { Link } from 'react-router-dom';
import './Peli.css';
//hhhhhjghjghjghsdjjsd
const Peli = ({pelicula}) => {
    const imgUrl = "https://image.tmdb.org/t/p/w300" + pelicula.poster_path;
    return ( 
        <li className="peliculita"> 
            <Link to={'/pelicula/' + pelicula.id}>
                <img className="portada" src={imgUrl} alt={pelicula.title}/>
                <div className="tituloPeli">{pelicula.title}</div> 
            </Link>
        </li>
    )
}
export default Peli;