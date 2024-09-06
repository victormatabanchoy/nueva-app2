import React, { useState } from 'react';
import Title from './components/TitleApp';
import Buttons from './components/Buttons';
import './components/Styles.css';
import { convertToCelsius, convertToFahrenheit, convertToKelvin, convertToAll } from './logic/TemperatureConverter';

function App() {
  const [temperature, setTemperature] = useState('');
  const [result, setResult] = useState({
    celsius: '',
    fahrenheit: '',
    kelvin: ''
  });

  const handleChange = (e) => {
    const value = e.target.value;
    if (isNaN(value)) {
      alert('Por favor, ingrese un valor numérico');
    } else {
      setTemperature(value);
    }
  };

  const handleConversion = (scale) => {
    let temp = parseFloat(temperature) || 0;
    if (scale === 'all') {
      setResult(convertToAll(temp));
    } else {
      switch (scale) {
        case 'celsius':
          setResult({ celsius: convertToCelsius(temp), fahrenheit: '', kelvin: '' });
          break;
        case 'fahrenheit':
          setResult({ fahrenheit: convertToFahrenheit(temp), celsius: '', kelvin: '' });
          break;
        case 'kelvin':
          setResult({ kelvin: convertToKelvin(temp), celsius: '', fahrenheit: '' });
          break;
        default:
          break;
      }
    }
  };

  const reset = () => {
    setTemperature('');
    setResult({ celsius: '', fahrenheit: '', kelvin: '' });
  };

  return (
    <div className="app-container">
      <Title />
      <input 
        type="text" 
        value={temperature} 
        onChange={handleChange} 
        placeholder="Ingrese temperatura en °C" 
      />
      <Buttons handleConversion={handleConversion} reset={reset} />
      <div className="result">
        {result.celsius !== '' && <p>Grados Celsius: {result.celsius}°C</p>}
        {result.fahrenheit !== '' && <p>Grados Fahrenheit: {result.fahrenheit}°F</p>}
        {result.kelvin !== '' && <p>Grados Kelvin: {result.kelvin}K</p>}
      </div>
    </div>
  );
}

export default App;
