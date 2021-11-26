
const Sponsor = ({ sponsor, eliminarSponsor, editarSponsor }) => { // este es el componente padre que le da la lista de tareas al hijo

  const { nombre, id } = sponsor;

  return (
    <>
      <li>
        <div>
          <div>{nombre}</div>
          <div>
            <button onClick={() => (eliminarSponsor(id))}>Eliminar</button>
            <button onClick={() => (editarSponsor(id))}>Editar</button>
          </div>
        </div>
      </li >
    </>
  )
}
export default Sponsor;

