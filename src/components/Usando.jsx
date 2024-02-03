// import React, { useState, useEffect } from 'react';
// import '../app.css'
// import Globais from './Globais';

// const Usando = () => {

//   const [usando, setUsando] = useState(Globais.usando)
//     const [porta1, setPorta1] = useState(Globais.porta1)
//     const [ porta2, setPorta2] = useState(Globais.porta2)
    

//     useEffect(() => {
//       const intervalId = setInterval(() => {
//         console.log(Globais.porta1)
//         if(Globais.porta1 = true){
//           setUsando((prevUsando) => prevUsando - 1)
//           Globais.usando = usando
//         }
//         else{
//           setUsando((prevUsando) => prevUsando + 1)
//           Globais.usando = usando
//         }

//         if(porta2){
//           setUsando((prevUsando) => prevUsando - 1)
//           Globais.usando = usando
//         }
//         else{
//           setUsando((prevUsando) => prevUsando + 1)
//           Globais.usando = usando
//         }

//       }, 100)

//   }, [])

//     return (
//         <div className='usando'>
//           <h1>{Globais.usando}</h1>
//         </div>
//     );
// }

// export default Usando;