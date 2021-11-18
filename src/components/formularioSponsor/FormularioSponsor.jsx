import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import './FormularioSponsor.css';

const FormularioSponsor = () => {

    // aqui hacer que por cada campo, se guarde si es necesario
    // const [] = useEffect([]);
    
    // useForm recibe register la función y los errores
    const { register, handleSubmit, formState: {errors} } = useForm();
        
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

    return(
        <>
        <h2 className="tituloFormulario"> Hazte sponsor!!</h2>

        <form onSubmit={handleSubmit(onsubmit)}>
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
            <input  type="text" className="a" placeholder='Dirección de la empresa' name="direccion" 
                {...register("direccion", {      
                    required: { value: true, message: 'Introduzca la dirección de la empresa.' },
                    minLength: { value: 3, message: 'Introduzca mínimo 3 caractéres.' },
                    maxLength: { value: 40, message: 'Introduzca máximo 40 caractéres.' }})
                }   
            />
            <div className="mensajeError"> { errors.direccion &&  errors.direccion.message } </div>
            
            {/* dias que va a contratar */}
            <input type="number" className="a" placeholder='Días que va a contratar' name="dias" 
                {...register("dias", { 
                    required: { value: true, message: 'Introduzca número de dias a contratar.' }})
                }   
            />
            <div className="mensajeError">{ errors.dias &&  errors.dias.message }</div>

            {/* código de la empresa */}

            <input type="number" className="a" placeholder='Código de la empresa' name="codigo" 
                {...register("codigo", {      
                    required: { value: true, message: 'Introduzca el código de la empresa.' },
                    minLength: { value: 15, message: 'Longitud del código tiene que contenet 15 números.' },
                    maxLength: { value: 15, message: 'Longitud del código tiene que contenet 15 números.' }})
                }  
            />
            <div className="mensajeError">{ errors.codigo &&  errors.codigo.message }</div>

            <div className="precio"> El precio total sería de: 0€/dia </div>
            <ul>
                { entradas.map(envio => 
                    <li key={envio.nombre}> {envio.nombre} - {envio.direccion} - {envio.dias} - {envio.codigo}</li>
                    ) 
                }
            </ul>
            <button className="botonEnvio" >Contratar</button>
        </form>
        </>
    )
}
export default FormularioSponsor;