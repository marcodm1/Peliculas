import {useState, useEffect} from 'react';
import './Sponsors.css';

const Sponsors = () => {
    const [error, setError] = useState(null);
    const [sponsors, setSponsors] = useState([]);
  
    useEffect(() => {        
        fetch('http://marcodmapi.atwebpages.com/', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
                // ,'Cache-Control': 'no-cache'
            },
            body: JSON.stringify(data),
        })
        .then(data => data.json())
        .then(response => console.log(response));
    }, []);

    // useEffect(() => {        
    //     fetch("http://marcodmapi.atwebpages.com/")
    //         .then(resultado => resultado.json())
    //         .then(
    //             data => {setSponsors(data)}, 
    //             error => setError(error) 
    //         ) 
    // }, []);

    return (
        <>
        <div className="sponsors">Sponsors</div>
        {console.log(sponsors)}
        {/* <ul>
            <p>{sponsors.map(sponsor => <li>{sponsors} </li>)}</p>
        </ul> */}
        </>
    );
    
}
export default Sponsors;