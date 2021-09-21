import React from "react";

const Details = (props) => {
  const {
    flag,
    name,
    capital,
    demonym,
    region,
    population,
    numericCode,
    nativeName,
    topLevelDomain,
  } = props;

  return (
    <div key={numericCode} className="card-pais">
      <img src={flag} alt={name} style={{ width: "600px", height: "350px" }} />
      <h1>{name}</h1>
      <h2>Capital: {capital}</h2>
      <p>Gentilicio: {demonym}</p>
      <p>Región: {region}</p>
      <p>Población: {population}</p>
      <p>Nombre nativo: {nativeName} </p>
      <p>Dominio: {topLevelDomain} </p>
      
    </div>
  );
};

export default Details;
