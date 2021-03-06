import React , { useEffect, useState } from 'react';
import { get } from '../../../../funciones/httpClient';
import Peli from '../../../peli/Peli';
import Spinner from '../../../spinner/Spinner';
import { useQuery } from '../../../hooks/useQuery';
import './MenuDrama.css';
import InfiniteScroll from 'react-infinite-scroll-component';
// import MenuOrden from '../../../menuOrden/MenuOrden';

const MenuDrama = () => {
  const [peliculas, setPeliculas] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [tieneMas, setTieneMas] = useState(true);

  const query = useQuery(); // esto captura la parte de la url despues de la ?, Ej:si busco venom será: http://localhost:3000/?search=venom
  const search = query.get('search'); // es lo que has puesto en el buscador: venom
  const searchUrl = '/discover/movie/?with_genres=18&sort_by=vote_average.desc&vote_count.gte=1000&page=' + pagina;

  // aqui ordena peliculas de mas votadas a menos votadas con un minimo de 20k de votos
  // const searchUrl = '/discover/movie/?sort_by=vote_average.desc&vote_count.gte=20000';

  useEffect(() => {        
    get(searchUrl).then(data => { setPeliculas(data.results); });
    setPagina(actual => actual +1); // no se si esto es lo mas correcto, pero funciona
  }, [search]);

  const scroll = () => {
    get(searchUrl).then(data => {
      setPeliculas(prevPelis => prevPelis.concat(data.results));
      setPagina(actual => actual +1);
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
      {/* <MenuOrden/> */}
      <ul className="stiloRejilla">
        {peliculas.map((pelicula) => <Peli key={pelicula.id} pelicula={pelicula}/> )}
      </ul>
    </InfiniteScroll>
  )
}
export default MenuDrama;