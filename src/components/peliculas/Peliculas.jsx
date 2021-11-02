import React , { useEffect, useState } from 'react';
import { get } from '../../funciones/httpClient';
import Peli from '../peli/Peli';
import Spinner from '../spinner/Spinner';
import { useQuery } from '../hooks/useQuery';
import './Peliculas.css';
import InfiniteScroll from 'react-infinite-scroll-component';

const Peliculas = () => {
    const [peliculas, setPeliculas] = useState([]);
    const [pagina, setPagina] = useState(1);
    const [tieneMas, setTieneMas] = useState(true);

    const query = useQuery(); // esto captura la parte de la url despues de la ?
    const search = query.get('search');
    const searchUrl = search ? '/search/movie?query=' + search  + '&page=' + pagina : '/discover/movie?page=' + pagina;

    useEffect(() => {        
        get(searchUrl).then(data => {
            setPeliculas(data.results);
        });
    }, [search]);

    const scroll = () => {
        get(searchUrl).then(data => {
            setPeliculas(prevPelis => prevPelis.concat(data.results)); 
            setTieneMas(data.page < data.total_pages);
        });
    };

    return (
        <InfiniteScroll 
            dataLength={peliculas.length} 
            hasMore={tieneMas} 
            next={scroll}
            loader={<Spinner/>}
        >
            <ul className="stiloRejilla">
                {peliculas.map((pelicula) => <Peli key={pelicula.id} pelicula={pelicula}/> )}
            </ul>
        </InfiniteScroll>
    )
}
export default Peliculas;