import { useEffect, useState } from "react";
import Formulario from "./Formulario";
import Sponsor from "./Sponsor";
// __________________________________ dejo el video en el los ultimos  11 minutos finales que creo que no es para nada
const ListaSponsors = () => { // este es el componente padre que le da la lista de sponsors al hijo

  const [sponsors, setSponsors] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("sponsors")) {
      setSponsors(JSON.parse(localStorage.getItem("sponsors"))) // aqui vienen cosas del local
    }
  }, []) // como estan vacios [] solo se hace una vez

  useEffect(() => {
    localStorage.setItem("sponsors", JSON.stringify(sponsors))
  }, [sponsors]) // aqui cada vez que el usuario hace algo se guarda

  const agregarSponsor = (sponsor) => { // recibe un sponsor
    console.log(sponsor);
    setSponsors((old) => [...old, sponsor]);
  };

  const eliminarSponsor = (id) => { // recibe una id
    // el filter devuelve un array 
    setSponsors((old) => old.filter(sponsor => sponsor.id !== id)); // elimina el id que coincida on el recibido
  }

  const editarSponsor = (id) => {
    const cambio = prompt("Instroduzca el nuevo nombre.");
    const editarSponsors = sponsors.map((sponsor) => (
      sponsor.id === id ? { ...sponsor, nombre: cambio } : sponsor
    ));

    setSponsors(editarSponsors);
  }

  return (
    <>
      <Formulario agregarSponsor={agregarSponsor} />

      <ul>
        {sponsors.map((sponsor) => (
          <Sponsor key={sponsor.id} sponsor={sponsor} eliminarSponsor={eliminarSponsor} editarSponsor={editarSponsor} />
        ))}
      </ul>
    </>
  )
}

export default ListaSponsors;