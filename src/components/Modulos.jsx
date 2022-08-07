import { click } from '@testing-library/user-event/dist/click';
import React from 'react';
import { useState, useEffect } from 'react';

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
          <span>AstroPayBank</span>
          <input type="checkbox" checked={estadoInput} onClick={anti()} />
        </div>
        <div className="content">
          <span>AstroPayCard</span>
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
      <div>
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
