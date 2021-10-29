import React from 'react';
import { FaSpinner } from 'react-icons/fa'
import './Spinner.css';

const Spinner = () => {
    
    return ( 
        <div className="spinner">
            <FaSpinner className="spinning" size={50}/>
        </div>
    )
}
export default Spinner;