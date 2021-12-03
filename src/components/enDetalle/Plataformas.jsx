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
      {/* {console.log(Object.keys(peli))} */}
      {/* {Object.keys(peli).map((valor) => (
          <tr >
            <td >{valor} </td>
          </tr>
        ))
        } */}

      {/* {claves.map(clave => (
          <tr >
            <td >{clave} </td>
          </tr>
        ))} */}
      <table >
        <tr>
          <td><p>id</p></td>
          <td><p>580489</p></td>
        </tr>
        <tr>
          <td><p>Netflix</p></td>
          <td><p>✅</p></td>
        </tr>
        <tr>
          <td><p>HBO</p></td>
          <td><p>&#10060;</p></td>
        </tr>
        <tr>
          <td><p>Amazon Prime</p></td>
          <td><p>✅</p></td>
        </tr>
        <tr>
          <td><p>SkyTV</p></td>
          <td><p>&#10060;</p></td>
        </tr>
        <tr>
          <td><p>Movistar+</p></td>
          <td><p>✅</p></td>
        </tr>
        <tr>
          <td><p>Filmin</p></td>
          <td><p>✅</p></td>
        </tr>
        <tr>
          <td><p>Disney+</p></td>
          <td><p>&#10060;</p></td>
        </tr>


      </table>

    </>
  )
}

export default Plataformas
