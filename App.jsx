import React, { useState, useEffect } from 'react';

const WeatherApp = () => { // meu componente principal
  const [city, setCity] = useState(''); // variaveis que vao receber os dados da api
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = '2b6e864eb0fb60705b9774d8071aca31';
  const handleChange = (event) => {  // o usuario vai digitar e vai colocar na variavel city 
    setCity(event.target.value);
  };

  useEffect(() => { // quando o city e alterado ele vai atualizando
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        if (!response.ok) {
          throw new Error('Não foi possível obter os dados da previsão do tempo.');
        }
        const data = await response.json();
        const translatedData = {
          cidade: data.name,
          temperatura: data.main.temp,
        };
        setWeatherData(translatedData);
      } catch (error) {
        console.error(error);
      }
    };

    if (city !== '') {
      fetchWeatherData();
    }
  }, [city, apiKey]);
  // pega a varivel so a temperatura que queremos
  return (
    <div>
      <h1>Previsão do Tempo</h1>
      <input type="text" value={city} onChange={handleChange} placeholder="Digite o nome da cidade" />
      {weatherData && (
        <div>
          <h2>{weatherData.cidade}</h2> 
          <p>Temperatura: {weatherData.temperatura}°C</p> 
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
