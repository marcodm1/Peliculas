import Swal from 'sweetalert2';
import { v4 } from 'uuid';
import { useFormulario } from '../../../hooks/useFormulario';
import './Formulario';

const Formulario = ({ agregarFavorito }) => { // aqui hacemos un destructuring para evitarno props.agregarFavorito, es una forma de activar un compnente desde el comp hijo
  const estadoInicial = {
    nombre: '',
  };
  const [inputs, handleChange, reset] = useFormulario(estadoInicial); // este es mi hook personalizado
  const { nombre } = inputs; // aqui destructuramos sponsor con las porpiedades que queramos

  const handleSubmit = (event) => {
    event.preventDefault();

    if (nombre.length >= 20) {
      Swal.fire({
        text: 'Máximo de 20 caractéres',
        icon: 'error',
      })
      return;
    }

    if (!nombre.trim()) { // si no hay algo vacio...
      event.target[0].focus(); // aqui decimos que despues de salir el error, me hace focus en el campo 0 que es el primero nombre
      Swal.fire({
        text: 'Nombre sin rellenar',
        icon: 'error',
      })
      return;
    }

    Swal.fire({
      text: `${nombre} agregado a favoritos`,
      icon: 'success',
    });

    agregarFavorito({
      nombre: nombre,
      id: v4(),
    })

    reset();
  }

  return (
    <>
      <h2 className="tituloFormulario"> Lista de favoritos</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="nombre" placeholder="Título:" className="añadir" onChange={handleChange} value={nombre} /> {/* en onChange necesita la info del objeto anterior, porque si no me pisa las otras propiedades, y lo que hace es, traeme este objeto y si esta propiedad se actualzia, agregala*/}
        <button type="submit" >Añadir</button>
      </form>
    </>
  )
}
export default Formulario;