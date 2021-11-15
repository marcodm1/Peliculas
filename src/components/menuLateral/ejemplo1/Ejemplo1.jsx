import { useForm } from "react-hook-form";
import './Ejemplo1.css';

const Ejemplo1 = () => {
    
    const { register, handleSubmit, formState: {errors} } = useForm();
    
    return(
        <>
        <h1>Ejemplo1</h1>
        </>
    )
}
   
export default Ejemplo1;