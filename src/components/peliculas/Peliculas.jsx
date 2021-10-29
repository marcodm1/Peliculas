import React , { useEffect, useState } from 'react';
import { get } from '../../funciones/httpClient';
import Peli from '../peli/Peli';
import Spinner from '../spinner/Spinner';
import { useQuery } from '../hooks/useQuery';
import './Peliculas.css';

const Peliculas = () => {
    const [peliculas, setPeliculas] = useState([]);
    const [cargado, setCargado] = useState(true);
    const query = useQuery();
    const search = query.get('search');

    useEffect(() => {
        setCargado(true);
        const searchUrl = search 
        ? '/search/movie?query=' + search 
        : '/discover/movie';
        get(searchUrl).then(data => {
            setPeliculas(data.results);
            setCargado(false);
        });
    }, [search]);

    if (cargado) {
        return <Spinner/>;
    }

    return (
        <ul className="stiloRejilla">
            {peliculas.map((pelicula) => <Peli key={pelicula.id} pelicula={pelicula}/> )}
        </ul>
    )
}
export default Peliculas;