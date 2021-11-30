import { useEffect, useState } from "react";
import Formulario from "./Formulario";
import Favorito from "./Favorito";
import Swal from "sweetalert2";

const Favoritos = () => { // este es el componente padre que le da la lista de favoritos al hijo

  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("favoritos")) {
      setFavoritos(JSON.parse(localStorage.getItem("favoritos"))) // aqui vienen cosas del local
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("favoritos", JSON.stringify(favoritos))
  }, [favoritos]) // aqui cada vez que el usuario hace algo se guarda

  const agregarFavorito = (favorito) => { // recibe un favorito
    setFavoritos((old) => [...old, favorito]);
  };

  const eliminarFavorito = (id, nombre) => { // recibe una id
    setFavoritos((old) => old.filter(favorito => favorito.id !== id)); // elimina el id que coincida on el recibido
    Swal.fire({
      text: `Eliminado: ${nombre} correctamente`,
      icon: 'error',
    })
    return;
  }

  const editarFavorito = (id) => {
    const cambio = prompt("Instroduzca el nuevo nombre.");
    console.log(cambio)
    if (cambio == null) {
      return;
    }
    if (cambio.length >= 20) {
      Swal.fire({
        text: 'Máximo de 20 caractéres',
        icon: 'error',
      })
      return;
    }
    if (!cambio.trim()) { // si no hay algo vacio...
      Swal.fire({
        text: 'Nombre sin rellenar',
        icon: 'error',
      })
      return;
    }

    Swal.fire({
      text: 'Nombre cambiado',
      icon: 'success',
    })

    const editarFavorito = favoritos.map((favorito) => (
      favorito.id === id ? { ...favorito, nombre: cambio } : favorito
    ));

    setFavoritos(editarFavorito);
  }

  return (
    <>
      <Formulario agregarFavorito={agregarFavorito} />

      <ul>
        {favoritos.map((favorito) => (
          <Favorito key={favorito.id} favorito={favorito} eliminarFavorito={eliminarFavorito} editarFavorito={editarFavorito} />
        ))}
      </ul>
    </>
  )
}

export default Favoritos;