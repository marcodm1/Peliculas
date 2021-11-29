import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { FaSearch } from 'react-icons/fa';
import { useQuery } from '../hooks/useQuery';
import './Search.css';

const Search = () => {
  const [searchText, setSearchText] = useState('');
  const history = useHistory(); // me permite cambiar el historial de elementos de la ruta

  const query = useQuery();
  const search = query.get('search');

  useEffect(() => {
    setSearchText(search || "");
  }, [search]);

  const handleSubmit = (evento) => {
    evento.preventDefault();
    history.push('/?search=' + searchText);
  }

  return (
    <form className="searchForm" onSubmit={handleSubmit}>
      <div className='searchDiv'>
        <input className='searchInput' type="text" name='inputSearch' placeholder="Buscar" value={searchText} onChange={(evento) => setSearchText(evento.target.value)} />
        <button className='searchButton' type='submit'>{<FaSearch size={15} />}</button>
      </div>
    </form>
  )
}
export default Search;