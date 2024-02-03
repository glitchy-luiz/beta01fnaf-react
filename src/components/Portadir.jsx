import React, { useState } from 'react';
import Globais from './Globais';

const Portadir = () => {

    const [estado, setEstado] = useState('hidden');
    const [porta2, setPorta2] = useState(Globais.porta2)
    const [usando, setUsando] = useState(Globais.usando)
    
    
    const abrirfechar2 = () => {
      setEstado(estado === 'hidden' ? 'visible' : 'hidden');
      console.log(estado)
      
      setPorta2(!porta2)
      Globais.porta2 = porta2
      console.log(Globais.porta2)
      
      if(porta2){
        setUsando((prevUsando) => prevUsando - 1)
        Globais.usando = usando
      }
      else{
        setUsando((prevUsando) => prevUsando + 1)
        Globais.usando = usando
      }
      console.log(Globais.usando)
    };

    return (
        <div className='portabtn'>
        <button className="btnportad" onClick={abrirfechar2}></button>
        <div className="portad" style={{visibility: estado}}></div>
        </div>
    );
}

export default Portadir;