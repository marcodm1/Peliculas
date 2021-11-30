import React, { useEffect, useState } from 'react';
import { get } from '../../funciones/httpClient';
import Peli from '../peli/Peli';
import Spinner from '../spinner/Spinner';
import { useQuery } from '../hooks/useQuery';
import InfiniteScroll from 'react-infinite-scroll-component';
import Swal from 'sweetalert2';
import './Peliculas.css';

const Peliculas = () => {
  const [peliculas, setPeliculas] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [tieneMas, setTieneMas] = useState(true);

  const query = useQuery(); // esto captura la parte de la url despues de la ?, Ej:si busco venom será: http://localhost:3000/?search=venom
  const search = query.get('search'); // es lo que has puesto en el buscador: venom
  const searchUrl = search ? '/search/movie?query=' + search + '&page=' + pagina : '/discover/movie?page=' + pagina;

  // console.log(peliculas)
  useEffect(() => {
    if (search === '') {
      Swal.fire({
        title: 'Error!',
        text: 'No ha escrito nada',
        icon: 'error',
      });
    }
  }, [search]);

  useEffect(() => {
    get(searchUrl)
      .then(data => {
        if (data.total_results === 0) {
          Swal.fire({
            title: 'Error!',
            text: `Sin resultados en "${search}"`,
            icon: 'error',
          })
        } else {
          setPeliculas(data.results);
        }
      })
    setPagina(actual => actual + 1); // no se si esto es lo mas correcto, pero funciona
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
      <ul className="stiloRejilla">
        {peliculas.map((pelicula) => <Peli key={pelicula.id} pelicula={pelicula} />)}
      </ul>
    </InfiniteScroll>
  )
}
export default Peliculas;