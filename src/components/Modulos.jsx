import React from 'react';
import '../styles/Modulos.css';

export const Metodos = ({ nombre }) => {
  let estadoInput = false;

  const anti = () => {
    let antiInput = !estadoInput;
    return antiInput;
  };

  return (
    <div className="metodoContainer">
      <span className="titulo">{nombre}</span>
      <div className="metodoContent">
        <div className="content">
          <span>APayBank</span>
          <input type="checkbox" checked={estadoInput} onClick={anti()} />
        </div>
        <div className="content">
          <span>APayCard</span>
          <input type="checkbox" checked={estadoInput} onClick={anti()} />
        </div>
        <div className="content">
          <span>VCréditos</span>
          <input type="checkbox" checked={estadoInput} onClick={anti()} />
        </div>
        <div className="content">
          <span>Pay4Fun</span>
          <input type="checkbox" checked={estadoInput} onClick={anti()} />
        </div>
      </div>
    </div>
  );
};

export const SiNo = ({ nombre }) => {
  let estadoInput = false;

  const anti = () => {
    let antiInput = !estadoInput;
    return antiInput;
  };

  return (
    <div className="SiNoContainer">
      <span className="titulo">{nombre}</span>
      <div className="SiNoContent">
        <div className="content">
          <span>SI</span>
          <input type="checkbox" checked={estadoInput} onClick={anti()} />
        </div>
        <div className="content">
          <span>NO</span>
          <input type="checkbox" checked={estadoInput} onClick={anti()} />
        </div>
      </div>
    </div>
  );
};
