import React from 'react';
import '../styles/Boton.css';

const Boton = ({ texto, btnClick, manejarClick }) => {
  return (
    <button
      className={btnClick ? 'btnClick' : 'btnReset'}
      onClick={manejarClick}
    >
      {texto}
    </button>
  );
};

export default Boton;
