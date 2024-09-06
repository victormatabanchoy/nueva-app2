export const convertToCelsius = (temperature) => {
    return temperature;
  };
  
  export const convertToFahrenheit = (temperature) => {
    return (temperature * 9/5) + 32;
  };
  
  export const convertToKelvin = (temperature) => {
    return temperature + 273.15;
  };
  
  export const convertToAll = (temperature) => {
    return {
      celsius: convertToCelsius(temperature),
      fahrenheit: convertToFahrenheit(temperature),
      kelvin: convertToKelvin(temperature),
    };
  };
  