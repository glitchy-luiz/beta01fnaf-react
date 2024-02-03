import React, { useState, useEffect } from 'react';
import '../app.css'
import Globais from './Globais';

const Bateria = () => {

    const [bateria, setBateria] = useState(Globais.bateria)
    var [usando, setUsando] = useState(Globais.usando)


    useEffect(() => {
        const intervalId = setInterval(() => {
            setBateria((prevBateria) => prevBateria - (0.05 * Globais.usando))
        }, 450)

    }, [])

    return (
        <div className="bateria">
            <h1>{Globais.usando}</h1>
            <h1>{bateria}%</h1>
        </div>
    );
}

export default Bateria;