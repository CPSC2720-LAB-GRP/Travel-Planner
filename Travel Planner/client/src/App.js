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

  const options = backendData;

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

    </div>
  
  )
}

export default App