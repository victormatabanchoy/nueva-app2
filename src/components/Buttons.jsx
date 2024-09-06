import React from 'react';

function Buttons({ handleConversion, reset }) {
  return (
    <div className="buttons-container">
      <button onClick={() => handleConversion('celsius')}>Convertir a Celsius</button>
      <button onClick={() => handleConversion('fahrenheit')}>Convertir a Fahrenheit</button>
      <button onClick={() => handleConversion('kelvin')}>Convertir a Kelvin</button>
      <button onClick={() => handleConversion('all')}>Convertir a Todas</button>
      <button onClick={reset}>Resetear</button>
    </div>
  );
}

export default Buttons;
