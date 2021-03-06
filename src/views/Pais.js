import React, { useState, useEffect } from "react";
import Details from "../components/Details.jsx";
// import urlApi from "../assets/useFetchDataCountries";
import { useParams } from "react-router-dom";
import Weather from '../components/Weather';


const Pais = () => {
  const { id } = useParams();
  const [countries, setCountries] = useState([]);
  const [weatherData, setWeather] = useState([]);

  useEffect(() => {
    const consultCountries = async () => {
      try {
        const url = `https://restcountries.eu/rest/v2/name/${id}?fullText=true`;
        const response = await fetch(url);
        const result = await response.json();
        console.log(result);
        setCountries(result[0]);
      } catch (error) {
        console.error(error);
      }
    };
    consultCountries();
  }, [id]);

  const {
    numericCode,
    flag,
    name,
    capital,
    demonym,
    region,
    population,
    topLevelDomain,
    nativeName,
    alpha2Code,
  } = countries;

  useEffect(() => {
    const consultWeather = async () => {
      const apiKey = `6283dbbf2c422b124b45da6563daa4bc`;
      const url2 = `https://api.openweathermap.org/data/2.5/weather?q=${id},${alpha2Code}&appid=${apiKey}`;
      const response = await fetch(url2);
      const result = await response.json();
      setWeather(result);
    };
    consultWeather();
  }, [id, countries]);
  console.log(weatherData);
  const { weather, main, coord, wind } = weatherData;
  return (
    <div>
      {/* {weather && weather.map((forecast) => {
          return (
            <span key={id} className="forecast">
              {forecast.description}
            </span>
          );
        })} */}
      {/* <p>{main && parseFloat(main.temp - 273.15).toFixed(2)} </p> */}
      <Details
        name={name}
        key={numericCode}
        flag={flag}
        capital={capital}
        demonym={demonym}
        region={region}
        population={population}
        topLevelDomain={topLevelDomain}
        nativeName={nativeName}
      />
      
      {weather && <Weather 
      weather={weather}
      main={main}
      coord={coord}
      wind={wind}      
      />}
    </div>
  );
};
export default Pais;
