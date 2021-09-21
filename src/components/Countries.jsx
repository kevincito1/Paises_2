import React from "react";
import { Link } from "react-router-dom";

const countries = (props) => {
  const { flag, name, capital, demonym, region, population, numericCode } =
    props;
  return (
    <div key={numericCode} className="card-pais">
      <img src={flag} alt={name} style={{ width: "200px", height: "150px" }} />

      <h1>{name}</h1>
      <h2>Capital: {capital}</h2>
      <p>Gentilicio: {demonym}</p>
      <p>Región: {region}</p>
      <p>Población: {population}</p>
      <Link to={`/pais/${name}`}>Leer más</Link>
    </div>
  );
};

export default countries;
