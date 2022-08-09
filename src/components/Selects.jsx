import React from 'react';
import '../styles/Selects.css';
import { SiNo, Metodos } from './Modulos';

const Selects = ({ manejarClick }) => {
  return (
    <div className="selectsContainer">
      <div className="metodos">
        <Metodos nombre="Retiro" />
        <Metodos nombre="Depósito" />
      </div>

      <div className="choises">
        <SiNo nombre="Wager" />
        <SiNo nombre="Duplicate" />
      </div>
    </div>
  );
};

export default Selects;
