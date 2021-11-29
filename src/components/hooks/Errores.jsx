import Swal from "sweetalert2";
import { useState } from "react";

const Errores = (props) => {
    const [error] = useState(props.error);
    return (
        <>
            {Swal.fire({
                title: 'Error!',
                text: error,
                icon: 'error',
            })}
        </>
    )
}

export default Errores;
