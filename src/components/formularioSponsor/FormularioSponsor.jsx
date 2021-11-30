import { useState } from "react";
import { useForm } from "react-hook-form";


const FormularioSponsor = () => {
    const [entradas, setEntradas] = useState([]);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [nombre, setNombre] = useState();

    const onsubmit = (data, evento) => {
        evento.target.reset();
        setEntradas([
            ...entradas, data
        ])


        // getGet()
        // .then(data => { setNombre(data.nombre); });
        // setNombre(actual => actual +1); // no se si esto es lo mas correcto, pero funciona

    }

    return (
        <>
            <h2 className="tituloFormulario"> Hazte sponsor!!</h2>

            <form onSubmit={handleSubmit(onsubmit)}>

                {/* nombre de la empresa */}
                <input type="text" className="campo" placeholder='Nombre:' name="nombre"
                    {...register("nombre", {
                        required: { value: true, message: 'Introduzca el Nombre de la empresa.' },
                        minLength: { value: 3, message: 'Introduzca mínimo 3 caractéres.' },
                        maxLength: { value: 20, message: 'Introduzca máximo 20 caractéres.' }
                    })
                    }
                />
                <div className="mensajeError"> {errors.nombre && errors.nombre.message} </div>

                {/* direccion */}
                <input type="text" className="campo" placeholder='Dirección:' name="direccion"
                    {...register("direccion", {
                        required: { value: true, message: 'Introduzca la dirección de la empresa.' },
                        minLength: { value: 3, message: 'Introduzca mínimo 3 caractéres.' },
                        maxLength: { value: 40, message: 'Introduzca máximo 40 caractéres.' }
                    })
                    }
                />
                <div className="mensajeError"> {errors.direccion && errors.direccion.message} </div>

                {/* dias que va a contratar */}
                <input type="number" className="campo" placeholder='Días:' name="dias"
                    {...register("dias", {
                        required: { value: true, message: 'Introduzca número de dias a contratar.' }
                    })
                    }
                />
                <div className="mensajeError">{errors.dias && errors.dias.message}</div>

                {/* código de la empresa */}
                <input type="number" className="campo" placeholder='Código:' name="codigo"
                    {...register("codigo", {
                        required: { value: true, message: 'Introduzca el código de la empresa.' },
                        minLength: { value: 5, message: 'Longitud del código tiene que contenet 5 números.' },
                        maxLength: { value: 5, message: 'Longitud del código tiene que contenet 5 números.' }
                    })
                    }
                />
                <div className="mensajeError">{errors.codigo && errors.codigo.message}</div>

                <ul>
                    {entradas.map(envio =>
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