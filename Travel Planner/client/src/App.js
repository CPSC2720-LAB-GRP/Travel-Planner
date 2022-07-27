import React, { useEffect, useState} from 'react'

function App() {

  const [backendData, setBackendData] = useState( [{}])

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then (
          data => {
            setBackendData(data)
          }
    )
  }, [])

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
    </div>
  
  )
}

export default App