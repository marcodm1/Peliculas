import React, { useEffect, useState } from 'react';
import { get } from '../../../../funciones/httpClient';
import Peli from '../../../peli/Peli';
import Spinner from '../../../spinner/Spinner';
import { useQuery } from '../../../hooks/useQuery';
import './MenuAccion.css';
import InfiniteScroll from 'react-infinite-scroll-component';
// import MenuOrden from '../../../menuOrden/MenuOrden';

const MenuAccion = () => {
  const [peliculas, setPeliculas] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [tieneMas, setTieneMas] = useState(true);

  const query = useQuery(); // esto captura la parte de la url despues de la ?, Ej:si busco venom será: http://localhost:3000/?search=venom
  const search = query.get('search'); // es lo que has puesto en el buscador: venom
  const searchUrl = '/discover/movie/?with_genres=28&sort_by=vote_average.desc&vote_count.gte=1000&page=' + pagina;

  useEffect(() => {
    get(searchUrl).then(data => { setPeliculas(data.results); });
    setPagina(pagina => pagina + 1);
  }, [search]);

  const scroll = () => {
    get(searchUrl).then(data => {
      setPeliculas(prevPelis => prevPelis.concat(data.results));
      setPagina(actual => actual + 1);
      setTieneMas(data.page < data.total_pages);
    });
  };



  return (
    <InfiniteScroll
      dataLength={peliculas.length}
      hasMore={tieneMas}
      next={scroll}
      loader={<Spinner />}
    >
      {/* <MenuOrden/> */}
      <ul className="stiloRejilla">
        {peliculas.map((pelicula) => <Peli key={pelicula.id} pelicula={pelicula} />)}
      </ul>
    </InfiniteScroll>
  )
}
export default MenuAccion;