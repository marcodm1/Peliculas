import React, {useState} from 'react';
import './FormularioSponsor.css';

// en el form voy a querer incluir, 
  // razonSocial "razón social"
  // nif
  // calle
  // tiempo que va a contratar
  // a lo mejor poner tipo de publicidad o donde de mi pagina

const FormularioSponsor = () => {
 
    const [datos, setDatos] = useState({
        razonSocial: '',
        direccion: '',
        email: '',
        diasPagados: 1, 
        range: 100
    });

    // con el onChange y esta función vamos actualizando los datos según los va escribiendo
    const actualizarInput = (evento) => {
        setDatos({...datos,
            [evento.target.name] : evento.target.value
            // [aqui va a pillar el razonSocial del input] : aqui lo va a realcionar con el razonSocial de datos del useState
        })
    }

    // a lo mejro en vez de esto es mejor que cuando se envien se actualice

    const enviarDatos = (evento) => {
        evento.preventDefault();
        // aqui se puede hacer la llamada al php con la info de lo introducido en el form
        // console.log('enviando datos...' + datos.razonSocial + ' ' + datos.apellido);
    }

    return (
        <>
        <h1>Hazte Sponsor!</h1>
        <p>El precio base del anuncio es de 100€ al dia.</p>
        {/* PONER EN CADA INPUT UN COMPROBANTE */}

        <form onSubmit={enviarDatos}>
            <div className="razonSocial"><input type="text" placeholder="Razon social" onChange={actualizarInput} name="razonSocial"></input></div>
            <div className="direccion"><input type="text" placeholder="Direccion de la empresa" onChange={actualizarInput} name="direccion"></input></div>
            <div className="email"><input type="email" placeholder="ejemplo@ejemplo.com" onChange={actualizarInput} name="email"></input></div>
                {/* no se si es para que seelccione una img para el anuncio */}
            <div className="file"><input type="file" onChange={actualizarInput} name="file"></input></div>
            {/* <div className="hidden"><input type="hidden" onChange={actualizarInput} name="hidden"></input></div> */}
            <div className="diasPagados"><input type="number" min="1" placeholder="Indique número de dias" onChange={actualizarInput} name="diasPagados"></input></div>
                {/* aqui molaríaque eligiese que tipo de anuncio quiere a lo mejor una opcion parecida para el tamaño*/}
            {/* <div className="radio">
                <label >Seleccione tipo de anuncio</label>
                <input type="radio" onChange={actualizarInput} name="radio"></input>
                <input type="radio" onChange={actualizarInput} name="radio"></input>
            </div> */}
            <h3 >Seleccione tamaño del anuncio (varía el precio)</h3>
            <div className="range"><input type="range" min="100" max="120" onChange={actualizarInput} name="range"></input></div>
            {/* <div className="time"><input type="time" onChange={actualizarInput} name="date"></input></div> */}
            <p>Resumen:</p>
            <p>a lo mejor poner un vista previa de la img para que puedan elegir mejor</p>
            {/* en algun sitio poder hacer dinamico el tamaño de ejemplo del anuncio */}
            <p>Precio actual {datos.range}€ al dia durante {datos.diasPagados} dias.</p>
            <input type="reset" onChange={actualizarInput} name="reset"></input>
            <button type="submit" >Enviar</button>
        </form>
       
        </>
    );
}
 
export default FormularioSponsor;