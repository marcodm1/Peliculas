import { useState } from "react";
import { useForm } from "react-hook-form";
// import { enviarFormulario } from "../../funciones/httpClient";

const FormularioSponsor = () => {
    const [entradas, setEntradas] = useState([]);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onsubmit = (data, evento) => {
        setEntradas([
            ...entradas, data
        ])
        const formulario = [...entradas, data];
        const objHTTP = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formulario[0])
        };
        fetch('http://marcodm.atwebpages.com/API/test2.php', objHTTP)
            .then(response => response.json())
            .then(data => console.log(data));
        evento.target.reset();
    }

    return (
        <>
            <h2 className="tituloFormulario"> Hazte sponsor!!</h2>
            <form onSubmit={handleSubmit(onsubmit)}>
                {/* nombre de la empresa */}
                <input type="text" className="area" placeholder='Nombre:' name="nombre"
                    {...register("nombre", {
                        required: { value: true, message: 'Introduzca el Nombre de la empresa.' },
                        minLength: { value: 3, message: 'Introduzca mínimo 3 caractéres.' },
                        maxLength: { value: 20, message: 'Introduzca máximo 20 caractéres.' }
                    })
                    }
                />
                <div className="mensajeError"> {errors.nombre && errors.nombre.message} </div>

                {/* direccion */}
                <input type="text" className="area" placeholder='Dirección:' name="direccion"
                    {...register("direccion", {
                        required: { value: true, message: 'Introduzca la dirección de la empresa.' },
                        minLength: { value: 3, message: 'Introduzca mínimo 3 caractéres.' },
                        maxLength: { value: 40, message: 'Introduzca máximo 40 caractéres.' }
                    })
                    }
                />
                <div className="mensajeError"> {errors.direccion && errors.direccion.message} </div>

                {/* dias que va a contratar */}
                <input type="number" className="area" placeholder='Días:' name="dias"
                    {...register("dias", {
                        required: { value: true, message: 'Introduzca número de dias a contratar.' }
                    })
                    }
                />
                <div className="mensajeError">{errors.dias && errors.dias.message}</div>

                {/* código de la empresa */}

                <input type="number" className="area" placeholder='Código:' name="codigo"
                    {...register("codigo", {
                        required: { value: true, message: 'Introduzca el código de la empresa.' },
                        minLength: { value: 3, message: 'Longitud del código tiene que contener 3 números.' },
                        maxLength: { value: 3, message: 'Longitud del código tiene que contener 3 números.' }
                    })
                    }
                />
                <div className="mensajeError">{errors.codigo && errors.codigo.message}</div>

                <button className="botonEnvio" >Contratar</button>
            </form>
        </>
    )
}
export default FormularioSponsor;


// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { enviarFormulario } from "../../funciones/httpClient";

// const FormularioSponsor = () => {
//     const [entradas, setEntradas] = useState([]);
//     const { register, handleSubmit, formState: { errors } } = useForm();
//     const objetoJson = JSON.stringify(entradas);

//     const onsubmit = (data, evento) => {
//         setEntradas([
//             ...entradas, data
//         ])
//         enviarFormulario(objetoJson)
//             .then(data => {
//                 console.log('Me devuelve: ' + data);
//             });
//         evento.target.reset();
//     }

//     return (
//         <>
//             <h2 className="tituloFormulario"> Hazte sponsor!!</h2>

//             <form onSubmit={handleSubmit(onsubmit)}>
//                 {/* nombre de la empresa */}
//                 <input type="text" className="area" placeholder='Nombre:' name="nombre"
//                     {...register("nombre", {
//                         required: { value: true, message: 'Introduzca el Nombre de la empresa.' },
//                         minLength: { value: 3, message: 'Introduzca mínimo 3 caractéres.' },
//                         maxLength: { value: 20, message: 'Introduzca máximo 20 caractéres.' }
//                     })
//                     }
//                 />
//                 <div className="mensajeError"> {errors.nombre && errors.nombre.message} </div>

//                 {/* direccion */}
//                 <input type="text" className="area" placeholder='Dirección:' name="direccion"
//                     {...register("direccion", {
//                         required: { value: true, message: 'Introduzca la dirección de la empresa.' },
//                         minLength: { value: 3, message: 'Introduzca mínimo 3 caractéres.' },
//                         maxLength: { value: 40, message: 'Introduzca máximo 40 caractéres.' }
//                     })
//                     }
//                 />
//                 <div className="mensajeError"> {errors.direccion && errors.direccion.message} </div>

//                 {/* dias que va a contratar */}
//                 <input type="number" className="area" placeholder='Días:' name="dias"
//                     {...register("dias", {
//                         required: { value: true, message: 'Introduzca número de dias a contratar.' }
//                     })
//                     }
//                 />
//                 <div className="mensajeError">{errors.dias && errors.dias.message}</div>

//                 {/* código de la empresa */}

//                 <input type="number" className="area" placeholder='Código:' name="codigo"
//                     {...register("codigo", {
//                         required: { value: true, message: 'Introduzca el código de la empresa.' },
//                         minLength: { value: 5, message: 'Longitud del código tiene que contenet 5 números.' },
//                         maxLength: { value: 5, message: 'Longitud del código tiene que contenet 5 números.' }
//                     })
//                     }
//                 />
//                 <div className="mensajeError">{errors.codigo && errors.codigo.message}</div>

//                 <button className="botonEnvio" >Contratar</button>
//             </form>
//         </>
//     )
// }
// export default FormularioSponsor;


// const [entradas, setEntradas] = useState([]);
// const { register, handleSubmit, formState: { errors } } = useForm();
// const objetoJson = JSON.stringify(entradas);

// const onsubmit = (data, evento) => {
//     setEntradas([
//         ...entradas, data
//     ])
//     evento.target.reset();
//     // setEntradas([]);
// }

// useEffect(() => {
//     console.log('le envio ' + objetoJson); // [{"nombre":"Pedro","direccion":"123","dias":"123","codigo":"123"}]
//     // enviarFormulario(objetoJson).then(data => console.log(data));
//     enviarFormulario().then(data => console.log(data));
// }, [entradas])