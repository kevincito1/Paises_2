import React from "react";
import { Link } from "react-router-dom";

const generalDataCountries = (props) => {
  const { flag, name, numericCode } =
    props;
  return (
    <div key={numericCode} className="card-pais">
      <img src={flag} alt={name} style={{ width: "200px", height: "150px" }} />

      <h1>{name}</h1>
      <Link to={`/pais/${name}`}>Leer más</Link>
    </div>
  );
};

export default generalDataCountries;
