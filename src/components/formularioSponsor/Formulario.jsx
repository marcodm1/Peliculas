// import { useState } from 'react';
import Swal from 'sweetalert2';
import { v4 } from 'uuid';
import { useFormulario } from '../hooks/useFormulario';

const Formulario = ({ agregarSponsor }) => { // aqui hacemos un destructuring para evitarno props.agregarSponsor, es una forma de activar un compnente desde el comp hijo
  const estadoInicial = {
    nombre: '',
  };

  const [inputs, handleChange, reset] = useFormulario(estadoInicial); // este es mi hook personalizado
  const { nombre } = inputs; // aqui destructuramos sponsor con las porpiedades que queramos

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!nombre.trim()) { // si no hay algo vacio...
      event.target[0].focus(); // aqui decimos que despues de salir el error, me hace focus en el campo 0 que es el primero nombre
      Swal.fire({
        title: 'Error!',
        text: 'Nombre sin rellenar',
        icon: 'error',
      })
      return;
    }

    Swal.fire({
      title: 'Exito!',
      text: 'sponsor completada y agregada',
      icon: 'success',
    });

    agregarSponsor({
      nombre: nombre,
      id: v4(),
    })

    reset();
  }

  return (
    <>
      <p>Formulario para los sponsors</p>

      <form onSubmit={handleSubmit}>
        <input type="text" name="nombre" placeholder="Nombre:" className="area" onChange={handleChange} value={nombre} /> {/* en onChange necesita la info del objeto anterior, porque si no me pisa las otras propiedades, y lo que hace es, traeme este objeto y si esta propiedad se actualzia, agregala*/}
        <button type="submit" className="area">Agregar</button>
      </form>
    </>
  )
}
export default Formulario;
