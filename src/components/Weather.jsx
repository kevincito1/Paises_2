import React from 'react'

const WeatherDetails = (props) => {

   const {weather, main, coord, wind} = props

    return ( 
        <div>
            <p>Forecast={weather[0].description}</p>
            <p>Temperature={parseFloat(main.temp - 273.15).toFixed(2)}</p>
            <p>Latitude={coord.lat}</p>
            <p>Longitude={coord.lon}</p>
            <p>Wind Speed={wind.speed}</p>
        </div>
     );
}
 
export default WeatherDetails;