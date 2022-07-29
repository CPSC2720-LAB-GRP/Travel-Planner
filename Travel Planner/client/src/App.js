import React, { useEffect, useState} from 'react'
import Select from 'react-select'
import axios from 'axios'

function App() {

  //weather api
  const url = 'https://api.openweathermap.org/data/2.5/weather?q=${location}&appid={}'
  
  // get location from api
  const searchLocation = (event) => {
    axios.get(url).then((response) => {
      setData(response.data)
      console.log(response.data)
    }
    )
  }

  //set backend data
  const [backendData, setBackendData] = useState( [{}])

  //Location Data and setdata
  const [data, setData] = useState({})

  //location and set location
  const [location, setLocation] = useState('')

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then (
          data => {
            setBackendData(data)
          }
    )
  }, [])

  const options = [
    { value: 'Toronto', label: 'Toronto' },
    { value: 'London', label: 'London' },
    { value: 'New York', label: 'New York' }
  ]

console.log(options)
  return (
    <div>
          {(typeof backendData.cities === 'undefined') ?(
            <p>Loading...</p>
          ): (
            backendData.cities.map((cities, i) => (
              <p key={i}>{cities.name}</p>
            ))
          )}
        <select>
              {
              backendData.cities.map((cities)=>(<option title={cities.id}>{cities.name}</option>))
              }
        </select>
      
      {/*
      <select>
          {backendData.cities.map((cities, i) => <option key={i} value={cities.id}>{cities.name}</option>)}
      </select>
            */}
      <Select options={options} />
      
    </div>
  
  )
}

export default App
