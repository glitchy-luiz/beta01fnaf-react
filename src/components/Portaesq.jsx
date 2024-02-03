import React, { useState } from 'react';
import '../app.css'
import Globais from './Globais';

const Portaesq = () => {

    const [estado, setEstado] = useState('hidden');
    const [porta1, setPorta1] = useState(Globais.porta1)
    const [usando, setUsando] = useState(Globais.usando)
    
    const abrirfechar1 = () => {
      setEstado(estado === 'hidden' ? 'visible' : 'hidden');
      console.log(estado)
      
      setPorta1(!porta1)
      Globais.porta1 = porta1
      console.log(Globais.porta1)
      
      if(porta1){
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
        <div className="portae" style={{visibility: estado}}></div>
        <button className="btnportae" onClick={abrirfechar1}></button>
        </div>
    );
}

export default Portaesq;