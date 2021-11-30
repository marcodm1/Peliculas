import './Favoritos';

const Favorito = ({ favorito, eliminarFavorito, editarFavorito }) => { // este es el componente padre que le da la lista de tareas al hijo

  const { nombre, id } = favorito;

  return (
    <>
      <li>
        <div>
          <div className="favorito">{nombre}</div>
          <div>
            <button className="eliminar" onClick={() => (eliminarFavorito(id, nombre))}>Eliminar</button>
            <button className="editar" onClick={() => (editarFavorito(id))}>Editar</button>
          </div>
        </div>
      </li >
    </>
  )
}
export default Favorito;

