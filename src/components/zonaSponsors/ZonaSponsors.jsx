import { useState, useEffect } from 'react';
import { getSponsors } from '../../funciones/httpClient';
import './ZonaSponsors.css';

const Sponsors = () => {
    const [sponsors, setSponsors] = useState([]);

    useEffect(() => {
        getSponsors().then(data => setSponsors(data))
    }, []);

    return (
        <>
            <h2>Sponsors</h2>
            {sponsors.map(sponsor => <div className="zonaSponsor">{sponsor.nombreEmpresa}</div>)}
        </>
    );

}
export default Sponsors;