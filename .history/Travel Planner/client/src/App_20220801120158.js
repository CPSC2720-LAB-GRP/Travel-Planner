import React, { useEffect, useState} from 'react'
import axios from 'axios'

function App() {

  //weather api
  //const url = 'https://api.openweathermap.org/data/2.5/weather?q=toronto&appid=26fe08b75a89956ef8e86cf1e40c19a1&units=metric'
  let url = '';

  //Location Data and setdata
  const [data, setData] = useState({})

  //location and set location
  const [location, setLocation] = useState(null)  
  
  // get location from weather api
  const searchLocation = (event) => {
    axios.get(url).then((response) => {
      setData(response.data)
      console.log(response.data)
    })
    setLocation('')
  }

  //call backend API
  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then (
          data => {
            setCities(data.cities)
          }
    )
  }, [])

  //set backend data
  const [cities, setCities] = useState(null);

  //use state for dropdown
  const [value, setValue] = useState(null);

  //set city
  let foundCity = cities&&cities.find(e => e.id === parseInt(value));
 // url = 'https://api.openweathermap.org/data/2.5/weather?q=' + (foundCity.name) +'&appid=26fe08b75a89956ef8e86cf1e40c19a1&units=metric' 

  if (foundCity != null) {
    console.log(foundCity.name);
    url = 'https://api.openweathermap.org/data/2.5/weather?q=' + 'asdfsd' +'&appid=26fe08b75a89956ef8e86cf1e40c19a1&units=metric'; 
    console.log(url);
    searchLocation();
  }

  //handle change for dropdown and setting value and city descriptiion
  const handleChange = (e) => {
    setValue(e.target.value);
    
    //searchLocation();
  };

  return (
    <div className="app">
            <div className="dropdown">
              <h1 >Travel Planner</h1>
          <select value={value} onChange={handleChange}>
          <option value="" selected disabled hidden>Choose here</option>
            {(!cities) ?(
            <p>Loading...</p>): 
            (
                cities.map((cities, i) => (  
                <option key={i} value={cities.id}>{cities.name}</option>
            ))
            )
          }
          </select>
          </div>  
          <div className="weatherApp">
            <div className="container">
              <div className="top">
                  <div className="location">
                  <h2>{foundCity && foundCity.name}</h2>
                  </div>  
              <div className="temp">              
                  {data.main ? <h1>{data.main.temp}°C</h1> :null}       
              </div>
              <div className="description">
              <p>{foundCity && foundCity.description}</p>
              </div>
            </div>

              {data.name != undefined &&
                              <div className="bottom">
                              <div className="feels">
                                {data.main ? <p className="bold">{data.main.feels_like}°C</p> : null}
                                  <p>Feels Like</p>
                              </div>
                              <div className="humidity">
                              {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
                            <p>Humidity</p>
                              </div>
                              <div className="wind">
                              {data.main ? <p className="bold">{data.wind.speed}  KMH</p> : null}
                                <p>Wind Speed</p>
                              </div>
                          </div>
              }
            </div>
          </div>
    </div>
  
  );
}

export default App
