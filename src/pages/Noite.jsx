import React, { useState, useEffect } from 'react';
import Btnesquerdo from "../components/btnesquerdo";
import Btndireito from "../components/Btndireito";
import Portaesq from '../components/Portaesq';
import Portadir from '../components/Portadir';
import Globais from '../components/Globais';
import Bateria from '../components/Bateria';


function Noite() {

    return (
      <div className="office1">
        <Btnesquerdo/>
        <Btndireito/>
        <Portaesq />
        <Portadir />
        <Bateria/>
      </div>
    )
  }
  export default Noite
  