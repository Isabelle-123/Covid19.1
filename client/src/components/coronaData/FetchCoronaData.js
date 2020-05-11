import axios from 'axios'
import React, { useState, useEffect } from 'react'
import TableCoronaData from './TableCoronaData'

export const FetchCoronaData = () => {
  const [data, setData] = useState([])
  const [deaths, setDeaths] = useState([])

  useEffect(() => {
    axios
      .get('https://covidtracking.com/api/v1/states/current.json')
      .then((res) => {
        setData(res.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  useEffect(() => {
    axios
      .get('http://localhost:5000/api')
      .then((res) => {
        setDeaths(res.data)
        console.log(res)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return <TableCoronaData coronaData={data} latestDeaths={deaths} />
}
