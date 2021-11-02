import React , { useEffect, useState } from 'react';
import { get } from '../../funciones/httpClient';
import Peli from '../peli/Peli';
import Spinner from '../spinner/Spinner';
import { useQuery } from '../hooks/useQuery';
import './Peliculas.css';
import InfiniteScroll from 'react-infinite-scroll-component';

const Peliculas = () => {
    const [peliculas, setPeliculas] = useState([]);
    const [cargado, setCargado] = useState(true);
    const [pagina, setPagina] = useState(1);
    const [tieneMas, setTieneMas] = useState(true);

    const query = useQuery(); // esto captura la parte de la url despues de la ?
    const search = query.get('search');

    useEffect(() => {
        setCargado(true);
        const searchUrl = search 
        ? '/search/movie?query=' + search  + '&page=' + pagina
        : '/discover/movie?page=' + pagina;
        get(searchUrl).then(data => {
            setPeliculas(prevPelis => prevPelis.concat(data.results)); // me añade las peliculas a las que tengo en
            setTieneMas(data.page < data.total_pages);
            setCargado(false);
        });
    }, [pagina]);

    useEffect(() => {
        setCargado(true);
        const searchUrl = search ? '/search/movie?query=' + search  + '&page=' + pagina : '/discover/movie?page=' + pagina;
        get(searchUrl).then(data => {
            setPeliculas(data.results); // me añade las peliculas a las que tengo en
        });
    }, [search]);

    return (
        <InfiniteScroll 
            dataLength={peliculas.length} 
            hasMore={tieneMas} 
            next={() => setPagina((prevPage) => prevPage +1)}
            loader={<Spinner/>}
        >
            <ul className="stiloRejilla">
                {peliculas.map((pelicula) => <Peli key={pelicula.id} pelicula={pelicula}/> )}
            </ul>
        </InfiniteScroll>
    )
}
export default Peliculas;