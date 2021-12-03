import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { get } from '../../funciones/httpClient';
import Spinner from '../spinner/Spinner';
import './enDetalle.css';
import Plataformas from './Plataformas';

const EnDetalle = () => {
    const { peliId } = useParams();
    const [cargado, setCargado] = useState(true);
    const [pelicula, setPelicula] = useState(null);

    useEffect(() => {
        setCargado(true);
        get('/movie/' + peliId)
            .then(data => {
                setPelicula(data);
                setCargado(false);
            });
    }, [peliId]);

    if (!pelicula) {
        return null;
    }

    if (cargado) {
        return <Spinner />;
    }

    const imgUrl = "https://image.tmdb.org/t/p/w500" + pelicula.poster_path;
    return (
        pelicula.genres ? (
            <>
                <div className="detallesPeli">
                    <img src={imgUrl} alt={pelicula.title} className="columna" />
                    <div className="descripcion">
                        <p className="pStrong"><strong>Nombre: </strong> {pelicula.title}</p>
                        <p className="pStrong"><strong>Nota: </strong> {pelicula.vote_average}</p>
                        <p className="pStrong"><strong>Valoraciones:</strong> {pelicula.vote_count}</p>
                        <p className="pStrong"><strong>Titulo:</strong> {pelicula.title}</p>
                        <p><strong>Géneros:</strong> {pelicula.genres.map(objeto => objeto.name).join(", ")}</p>
                        <p><strong>Descripción:</strong> {pelicula.overview}</p>
                    </div>
                </div>
                <Plataformas id={peliId} />
            </>
        ) : <p>Película no encontrada</p>
    )
}
export default EnDetalle;