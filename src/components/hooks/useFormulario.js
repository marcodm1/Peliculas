import { useState } from "react";

export const useFormulario = (initialState = {}) => { // creo un hook que inicia vacio {}
    const [inputs, setInputs] = useState(initialState);

    const handleChange = (e) => {
        const { type, name, value, checked } = e.target;

        // console.log(e);
        // console.log(e.target);


        setInputs((old) => ({
            ...old,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const reset = () => {
        setInputs(initialState);
    };

    return [inputs, handleChange, reset];
};