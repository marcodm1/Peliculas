import { useForm } from "react-hook-form";
import './FormularioSponsor.css';

const FormularioSponsor = () => {
    
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
 
    return (
   
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} />
      <select {...register("gender")}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
      <input type="submit" />
    </form>
  );
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