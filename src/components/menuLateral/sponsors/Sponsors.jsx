import {useState, useEffect} from 'react';
import {getSponsors} from '../../../funciones/httpClient';
import './Sponsors.css';

const Sponsors = () => {
    const [sponsors, setSponsors] = useState([]);

    useEffect(() => {        
        getSponsors().then(data => setSponsors(data))
    }, []);

    return (
        <>
        <div className="sponsors">Sponsorss</div>
        {console.log(sponsors)}
        </>
    );
    
}
export default Sponsors;