import React, { useEffect, useState } from "react";
import axios from "axios";
import WEATHER_API_KEY from "./apikey";

function App() {
  //Location Data and setdata
  const [data, setData] = useState({});

  //location and set location
  const [location, setLocation] = useState(null);

  //api key
  const api_key = WEATHER_API_KEY;

  //call backend API
  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        setCities(data.cities);
      });
  }, []);

  //set backend data
  const [cities, setCities] = useState(null);

  //use state for dropdown
  const [value, setValue] = useState(null);

  //set city
  let foundCity = cities && cities.find((e) => e.id === parseInt(value));

  //handle change for dropdown and setting value and city descriptiion, as well as sending request to weather api
  const handleChange = (e) => {
    // on change set value of selection
    const value = e.target.value;
    setValue(value);

    //
    const foundCity = cities && cities.find((e) => e.id === parseInt(value));

    if (foundCity) {
      console.log(foundCity.name);
      const test =
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        foundCity.name +
        api_key +
        "&units=metric";

      axios.get(test).then((response) => {
        setData(response.data);
      });
    }
  };

  return (
    <div className="app">
      <div className="dropdown">
        <h1>Travel Planner</h1>
        <div class="custom-select">
          <select value={value} onChange={handleChange}>
            <option value="" selected disabled hidden>
              Choose here
            </option>
            {!cities ? (
              <p>Loading...</p>
            ) : (
              cities.map((cities, i) => (
                <option key={i} value={cities.id}>
                  {cities.name}
                </option>
              ))
            )}
          </select>
        </div>
      </div>
      <div className="weatherApp">
        <div className="container">
          <div className="top">
            <div className="location">
              <h2>{foundCity && foundCity.name}</h2>
            </div>
            <div className="temp">
              {data.main ? <h1>{data.main.temp}°C</h1> : null}
            </div>
            <div className="description">
              <p>{foundCity && foundCity.description}</p>
            </div>
          </div>

          {data.name != undefined && (
            <div className="bottom">
              <div className="feels">
                {data.main ? (
                  <p className="bold">{data.main.feels_like}°C</p>
                ) : null}
                <p>Feels Like</p>
              </div>
              <div className="humidity">
                {data.main ? (
                  <p className="bold">{data.main.humidity}%</p>
                ) : null}
                <p>Humidity</p>
              </div>
              <div className="wind">
                {data.main ? (
                  <p className="bold">{data.wind.speed} KMH</p>
                ) : null}
                <p>Wind Speed</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
