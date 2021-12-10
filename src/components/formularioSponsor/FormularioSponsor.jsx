import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
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
            .then(res => res.json())
            .then(
                (result) => {
                    if (result.resultado) {
                        Swal.fire({
                            text: result.texto,
                            icon: 'success',
                        });
                    } else {
                        Swal.fire({
                            text: 'Error, ha introducido un código ya existente.',
                            icon: 'error',
                        })
                    }
                })
        evento.target.reset();
    }

    return (
        <>
            <div className="zonaFormulario">
                <h2 className="tituloFormulario"> Hazte sponsor!!</h2>
                <div>
                    <p>Publicita tu anuncio en <strong>Age of movies</strong> para que todo el mundo pueda ver tus anuncios.</p>
                    <p>1ª casilla: Indroduzca el nombre completo de la empresa.</p>
                    <p>2ª casilla: Indique la dirección fiscal de la empresa.</p>
                    <p>3ª casilla: Introduzca la cantidad de días desde el momento de la contratación va a querer que su anuncio se esté publicitando en nuestra página, cada dia son 24 horas exactas</p>
                    <p>4ª casilla: En la ultima</p>
                </div>
                <div className="parteForm">
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

                        <input type="number" className="area" placeholder='CIF:' name="codigo"
                            {...register("codigo", {
                                required: { value: true, message: 'Introduzca el código de la empresa.' },
                                minLength: { value: 9, message: 'Longitud del CIF tiene que contener 9 números.' },
                                maxLength: { value: 9, message: 'Longitud del CIF tiene que contener 9 números.' }
                            })
                            }
                        />
                        <div className="mensajeError">{errors.codigo && errors.codigo.message}</div>

                        <button className="botonEnvio" >Contratar</button>
                    </form>
                </div>

            </div>
        </>
    )
}
export default FormularioSponsor;