import React, { useState } from 'react';
import '../styles/Body.css';
import trini from '../img/trini.jpg';
import Boton from '../components/Boton';
import Contador from '../components/Contador';
import Selects from '../components/Selects';
import Modulos from '../components/Modulos';

const Body = () => {
  const [clicks, setClicks] = useState(0);

  const manejarClick = () => {
    setClicks(clicks + 1);
  };

  const reset = () => {
    setClicks(0);
  };

  return (
    <div className="mainContainer">
      <div className="upperContainer">
        <Contador clicks={clicks} />
        <div>
        <Boton texto="OK" btnClick={true} manejarClick={manejarClick} />
        <Boton texto="🧼" btnClick={false} manejarClick={reset} />
        </div>
      </div>
      <Selects />
      <div className="triniContainer">
        <img className="trini" src={trini} alt="trini mirando feo" />
      </div>
    </div>
  );
};

export default Body;
