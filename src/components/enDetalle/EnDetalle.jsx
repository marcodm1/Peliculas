import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { get } from '../../funciones/httpClient';
import Spinner from '../spinner/Spinner';
import './enDetalle.css';

const EnDetalle = () => {
    const {peliId} = useParams();
    const [cargado, setCargado] = useState(true);
    const [pelicula, setPelicula] = useState(null);

    useEffect(() => {
        setCargado(true);
        get('/movie/' + peliId).then(data => {
            setPelicula(data);
            setCargado(false);
        });
    }, [peliId]);
    
    if (!pelicula) {
        return null;
    }

    if (cargado) {
        return <Spinner/>;
    }
    const imgUrl = "https://image.tmdb.org/t/p/w500" + pelicula.poster_path;
    return (
        <div className="detallesPeli">
            <img src={imgUrl} alt={pelicula.title} className="columna"/>
            <div className="descripcion">
                <p className="tituloDetallado"><strong>Titulo:</strong> {pelicula.title}</p>
                <p><strong>Géneros:</strong> {pelicula.genres.map(objeto => objeto.name).join(", ")}</p>
                <p><strong>Descripción:</strong> {pelicula.overview}</p>
            </div>
        </div>
    )
}
export default EnDetalle;