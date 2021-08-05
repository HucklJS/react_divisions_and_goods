import React, {useState, useEffect} from 'react'

import {API_GET_PRODUCTS} from "./api/config"

import './App.css'
import Table from "./components/Table"

function App() {
  const [isLoading, setLoading] = useState(true)
  const [isError, setError] = useState(false)
  const [divisions, setDivisions] = useState(null)

  useEffect(() => {
    fetch(API_GET_PRODUCTS)
      .then(res => res.json())
      .then(data => {
        setDivisions(data)
        setLoading(false)
        console.log(data)
      })
      .catch(err => {
        setError(true)
        setLoading(false)
      })
  }, [])

  return (
    <div className="App">
      {isLoading
        ? <span>Loading...</span>
        : isError
          ? <span>Error</span>
          : <div>
            {
              divisions.map(
                division =>
                  <Table
                    key={division.rid}
                    title={division.rname}
                    goods={division.goods}
                  />
              )
            }
          </div>
      }
    </div>
  )
}

export default App
