import React, { useState } from "react";
import "../Converter.scss";
import logo from "../Components/tempico.png"

function Converter() {
  const [inputValue, setInputValue] = useState("");
  const [selectedScale, setSelectedScale] = useState("Celsius");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setResult("");
    setError("");
  };

  const handleScaleChange = (e) => {
    setSelectedScale(e.target.value);
    setResult("");
    setError("");
  };

  const convertToCelsius = () => {
    const temperature = parseFloat(inputValue);

    if (isNaN(temperature)) {
      setError("Please enter a valid number");
      return;
    }

    if (selectedScale === "Celsius") {
      setResult(`${temperature}°C is equal to ${temperature}°C`);
    } else {
      const celsius = ((temperature - 32) * 5) / 9;
      setResult(`${temperature}°F is equal to ${celsius.toFixed(2)}°C`);
    }
  };

  const convertToFahrenheit = () => {
    const temperature = parseFloat(inputValue);

    if (isNaN(temperature)) {
      setError("Please enter a valid number");
      return;
    }

    if (selectedScale === "Fahrenheit") {
      setResult(`${temperature}°F is equal to ${temperature}°F`);
    } else {
      const fahrenheit = (temperature * 9) / 5 + 32;
      setResult(`${temperature}°C is equal to ${fahrenheit.toFixed(2)}°F`);
    }
  };

  return (
    <div className="converter" id="converter">
      
      <div className="main-container">
      <h2>Temperature Converter</h2>
      <div className="img">
       <img src={logo} alt="" />
       </div>
      <div className="container">
        <input
          type="text"
          placeholder="Enter temperature"
          value={inputValue}
          onChange={handleInputChange}
        />
        <select value={selectedScale} onChange={handleScaleChange}>
          <option value="Celsius">Celsius</option>
          <option value="Fahrenheit">Fahrenheit</option>
        </select>
      </div>
      <div className="buttons">
        <button onClick={convertToCelsius}>Convert to Celsius</button>
        <button onClick={convertToFahrenheit}>Convert to Fahrenheit</button>
      </div>
      {error && <p>{error}</p>}
      {result && <p>{result}</p>}
      </div>
    </div>
  );
}

export default Converter;
