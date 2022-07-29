import React, { useEffect, useState} from 'react'
import Select from 'react-select'
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
  const [location, setLocation] = useState('')  

  //call backend API
  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then (
          data => {
            setBackendData(data)
          }
    )
  }, [])

  //set backend data
  const [backendData, setBackendData] = useState( [{}])

  //get initial state for backend
  const getInitialState = () => {
    const value = "";
    return value;
  };

  //use state for dropdown
  const [value, setValue] = useState(getInitialState);

  //handle change for dropdown and setting value
  const handleChange = (e) => {
    console.log(value)
    setValue(e.target.value);
  };

  console.log(backendData)

  return (
    <div>
            <div>
            <h1>Travel Planner</h1>

          <select value={value} onChange={handleChange}>
          {(typeof backendData.cities === 'undefined') ?(
            <p>Loading...</p>): 
            (
                backendData.cities.map((cities, i) => (  
                <option key={i} value={cities.name}>{cities.name}</option>
            ))
            )
            
          }
          </select>
          <p>You selected {value}</p>

          </div>  
    </div>
  
  )

}
export default App
