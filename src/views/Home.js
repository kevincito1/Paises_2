import React, { useState } from "react";
import Countries from "../components/Countries";
import urlApi from "../assets/useFetchDataCountries";

const Home = () => {
  const { data } = urlApi("https://restcountries.eu/rest/v2/all");
  const [searchTerm, setSearchterm] = useState("");
  const [initialPosition, setInitialPosition] = useState(0);
  const [finalPosition, setFinalPosition] = useState(6);

  const doNext = () => {
    if(finalPosition < data.length)
    {nextInitial();
    nextFinal();}
  };

  const nextInitial = () => {
    setInitialPosition(initialPosition + 6);
  };

  const nextFinal = () => {
    setFinalPosition(finalPosition + 6);
  };

  const doPrev = () => {
    if(initialPosition > 0)
   {prevInitial();
    prevFinal();}
  };

  const prevInitial = () => {
    setInitialPosition(initialPosition - 6);
  };

  const prevFinal = () => {
    setFinalPosition(finalPosition - 6);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Buscar..."
        onChange={(event) => {
          setSearchterm(event.target.value);
        }}
      />
      {data.slice(initialPosition, finalPosition).map((country) => {
        if (country.name.toLowerCase().includes(searchTerm.toLowerCase())) {
          return (
            <Countries
              key={country.numericCode}
              flag={country.flag}
              name={country.name}
              capital={country.capital}
              demonym={country.demonym}
              region={country.region}
              population={country.population}
            />
          );
        } else if (searchTerm === "") {
          return (
            <Countries
              key={country.capital}
              flag={country.flag}
              name={country.name}
              capital={country.capital}
              demonym={country.demonym}
              region={country.region}
              population={country.population}
            />
          );
        } else return [];
      })}
      <button onClick={doPrev}>Prev</button> 
      <button onClick={doNext}>Next</button>
    </div>
  );
};
export default Home;
