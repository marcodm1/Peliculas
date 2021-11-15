// import { Fragment } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import './FormularioSponsor.css';

const FormularioSponsor = () => {
    
    // useForm recibe register la función y los errores
    const { register, handleSubmit, formState: {errors} } = useForm();

    // aqui le vamos a poner el evento para el precio
        
    // const {register,handleSubmit, formState: { errors }} = useForm();
    const onsubmit = (data, evento) => {
        // aqui va lo que va a pasar cada vez que se envie el formulario
        // console.log(data);
        evento.target.reset();
        // aqui a lo mejor poner un mensaje de enviado correctamente

        // aqui añadimos el objeto con toda la info 
        setEntradas([
            ...entradas, data
        ])
    }

    // aqui pongo el hook
    const [entradas, setEntradas] = useState([]);

    // aqui voy a poner el hook dinamico para que el usuario vea cuanto va a pagar
    // const onChange = (event) => {
    //     precioDia: 100
    //     precioTotal: 0
    // }

    return(
        <>
        <h2 className="tituloFormulario"> Hazte sponsor!!</h2>

        <form onSubmit={handleSubmit(onsubmit)}>
            
            {/* nombre */}
            <input type="text" className="a" placeholder='Nombre de la empresa' name="nombre" 
                // no se porque no se puede poner eso como el type o className
                {...register("nombre", { 
                    required: { value: true, message: 'Introduzca el Nombre de la empresa.' },
                    minLength: { value: 3, message: 'Introduzca mínimo 3 caractéres.' },
                    maxLength: { value: 20, message: 'Introduzca máximo 20 caractéres.' }})
                }   
            />
            <div className="mensajeError"> { errors.nombre &&  errors.nombre.message } </div>
            
            {/* direccion */}
            <input  type="text" className="a" placeholder='Dirección de la empresa' name="calle" 
                {...register("calle", {      
                    required: { value: true, message: 'Introduzca la dirección de la empresa.' },
                    minLength: { value: 3, message: 'Introduzca mínimo 3 caractéres.' },
                    maxLength: { value: 40, message: 'Introduzca máximo 40 caractéres.' }})
                }   
            />
            <div className="mensajeError"> { errors.calle &&  errors.calle.message } </div>
            
            {/* dias que va a contratar */}
            <input type="number" className="a" placeholder='Días que va a contratar' name="dias" 
                {...register("dias", { 
                    required: { value: true, message: 'Introduzca número de dias a contratar.' }})
                }   
            />
            <div className="mensajeError">{ errors.dias &&  errors.dias.message }</div>

            <div className="precio"> El precio total sería de: 0€/dia </div>

            <ul>
                { entradas.map(envio => 
                    <li key={envio.nombre}> {envio.nombre} - {envio.calle} - {envio.dias} </li>
                    ) 
                }
            </ul>
            <button className="botonEnvio" >Contratar</button>
        </form>
        </>
    )
}
   
export default FormularioSponsor;

/*

Lista de reglas de validación admitidas:

required
min
max
minLength
maxLength
pattern
validate

*/

/*

,
                    minLength:{
                        value: 3,
                        message: 'Tiene que introducir el nombre con mas de 3 caractéres.' 
                    }
    */