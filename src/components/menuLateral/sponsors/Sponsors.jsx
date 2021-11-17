import {useState, useEffect} from 'react';
import './Sponsors.css';

const Sponsors = () => {
    const [error, setError] = useState(null);
    const [sponsors, setSponsors] = useState([]);
  
    useEffect(() => {        
        fetch("http://marcodmapi.atwebpages.com/")
            .then(resultado => resultado.json())
            .then(
                data => {setSponsors(data)}, 
                error => setError(error) 
            ) 
    }, []);

    // fetch('http://localhost:300/users')
    //   .then(response => {
    //     //do something with response
    //     const users = response.json();
    //     this.setState({ users })
    //   })
    //   .catch(err => {
    //     throw new Error(err)
    //   })
      
    return (
        <>
        <div className="sponsors">Sponsords</div>
        {console.log(sponsors)}
        {/* <ul>
            <p>{sponsors.map(sponsor => <li>{sponsors} </li>)}</p>
        </ul> */}
        </>
    );
    
}
export default Sponsors;