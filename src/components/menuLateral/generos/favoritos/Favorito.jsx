import './Favorito.css';

const Favorito = ({ favorito, eliminarFavorito, editarFavorito }) => { // este es el componente padre que le da la lista de tareas al hijo

  const { nombre, id } = favorito;

  return (
    <>
      <div className="zonaFavoritosGrid">
        <div className="cadaFavorito" >
          <div className="nombreYfoto">
            <div className="fotoFavorita"></div>
            <div className="nombreFavorito">{nombre}</div>
          </div>
          <button className="eliminar" className="botonFavoritoEL" onClick={() => (eliminarFavorito(id, nombre))}>Eliminar</button>
          <button className="editar" className="botonFavoritosED" onClick={() => (editarFavorito(id))}>Editar</button>
        </div>
      </div>

    </>
  )
}
export default Favorito;

