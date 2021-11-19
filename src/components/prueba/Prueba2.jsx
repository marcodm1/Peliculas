import { useState} from 'react';

const Prueba2 = () => {
    const [personas, setPersonas] = useState(0);
    const [nombres, setNombres] = useState([]);

    const añadirPersona = () => {
        setPersonas(personas + 1);
        setNombres([...nombres, {"nombre":"Juan"}]);
    }

    return (
        <>
        <button onClick={() => añadirPersona()}>añadir persona = {personas}</button>
        {console.log(nombres)}
        </>   
       
    )
}

export default Prueba2;

/*


 // setTheArray([...theArray, newElement]);

    // useEffect(() => { 
        // const objetoJson = JSON.stringify(personas);
        // const api = 'http://marcodm.atwebpages.com/API/test2.php';

        // request = new XMLHttpRequest();
        // request.open("POST", api, true);
        // request.setRequestHeader("Content-type", "application/json");
        // request.send(personas); 
    // },[])

    */