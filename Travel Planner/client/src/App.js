import React, { useEffect, useState} from 'react'
import axios from 'axios'

function App() {

  //weather api
  const url = 'https://api.openweathermap.org/data/2.5/weather?q=${location}&appid={45567e79f27c046f256a6abdc981e528}'
  
  // get location from weather api
  const searchLocation = (event) => {
    axios.get(url).then((response) => {
      setData(response.data)
      console.log(response.data)
    }
    )
  }

  //Location Data and setdata
  const [data, setData] = useState({})

  //location and set location
  const [location, setLocation] = useState(null)  

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

  //handle change for dropdown and setting value and city descriptiion
  const handleChange = (e) => {

    setValue(e.target.value);
    
  };

  let foundCity = cities&&cities.find(e => e.id === parseInt(value));
  console.log(foundCity)

  return (
    <div>
            <div>
            <h1>Travel Planner</h1>

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
          <p>{foundCity && foundCity.description}</p>
          <p>Weather: {foundCity && foundCity.name}</p>
          </div>  
    </div>
  
  )
}
export default App
