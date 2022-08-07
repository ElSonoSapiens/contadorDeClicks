import React from 'react';
import '../styles/Selects.css';
import { SiNo, Metodos, BtnUncheck } from './Modulos';

const siNo = () => {
  return <div>siNo</div>;
};

const Selects = ({ manejarClick }) => {
  return (
    <div className="selectsContainer">
      <div className="metodos">
        <Metodos nombre="Retiro" />
        <Metodos nombre="Depósito" />
      </div>

      <div className="choises">
        <SiNo nombre="Loop" />
        <SiNo nombre="Wager" />
        <SiNo nombre="Duplicate" />
      </div>
    </div>
  );
};

export default Selects;
