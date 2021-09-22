import React, { useState, fragment } from "react";
import GeneralDataCountries from "../components/GeneralDataCountries";
import urlApi from "../assets/useFetchDataCountries";

const Home = () => {
  const { data } = urlApi("https://restcountries.eu/rest/v2/all");
  const [searchTerm, setSearchterm] = useState("");
  const [initialPosition, setInitialPosition] = useState(0);
  const [finalPosition, setFinalPosition] = useState(10);

  const doNext = () => {
    if(finalPosition < data.length)
    {nextInitial();
    nextFinal();}
  };

  const nextInitial = () => {
    setInitialPosition(initialPosition + 10);
  };

  const nextFinal = () => {
    setFinalPosition(finalPosition + 10);
  };

  const doPrev = () => {
    if(initialPosition > 0)
   {prevInitial();
    prevFinal();}
  };

  const prevInitial = () => {
    setInitialPosition(initialPosition - 10);
  };

  const prevFinal = () => {
    setFinalPosition(finalPosition - 10);
  };

  const dataSearch = data.map((country) => {
    if(country.name.toLowerCase().includes(searchTerm.toLowerCase())){
      return country;
    }
  });

  const fixedData = dataSearch.filter((country) => {
    return country !== undefined;
  });

  return (
    <fragment>
    <div>
      <input
        type="text"
        placeholder="Buscar..."
        onChange={(event) => {
          setSearchterm(event.target.value);
        }}
      />
      {fixedData.slice(initialPosition, finalPosition).map((country) => {
        if (country !== undefined) {
          return (
            <GeneralDataCountries
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
            <GeneralDataCountries
              key={country.numericCode}
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
    </div>
    <button onClick={doPrev}>Prev</button> 
    <button onClick={doNext}>Next</button>    
    </fragment>
  );
};
export default Home;
