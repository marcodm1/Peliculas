import { useEffect, useState } from "react";
import { getPlataformas } from "../../funciones/httpClient";

const Plataformas = (props) => {
  const [pelicula, setPeliculas] = useState([]);
  // const peli = pelicula[0];
  // const claves = Object.keys(peli);
  // const valores = Object.values(peli);

  useEffect(() => {
    getPlataformas().then(data => setPeliculas(data))
  }, [])

  // console.log(claves);
  // console.log(valores);

  return (
    <>
      <div className="tablaPlataformas" >
        <table >
          {pelicula.map(peli => Object.keys(peli).map((item, i) => (
            <tr>
              <td><p>{item}</p></td>
            </tr>
          )))}
        </table>

        <table>
          {pelicula.map(peli => Object.values(peli).map((item, i) => (
            <tr>
              <td><p>{item === '1' ? '✅' : '❌'}</p></td>
            </tr>
          )))}
        </table>

      </div>

    </>
  )
}

export default Plataformas
