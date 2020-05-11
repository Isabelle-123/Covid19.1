const axios = require('axios')
const moment = require('moment')

let dateYesterday = moment().subtract(1, 'days').format('YYYYMMDD')
let dateThreeBack = moment().subtract(3, 'days').format('YYYYMMDD')

const getYesterdayData = async () => {
  try {
    const response = await axios.get(`https://covidtracking.com/api/v1/states/${dateYesterday}.json`)
    const stateDeaths = response.data.map((item) => ({
      deaths: item.death,
    }))
    return stateDeaths
  } catch (error) {
    console.log(error)
  }
}

const getTwoBeforeYesterdayData = async () => {
  try {
    const response = await axios.get(`https://covidtracking.com/api/v1/states/${dateThreeBack}.json`)
    const stateDeaths = response.data.map((item) => ({
      deaths: item.death,
    }))
    return stateDeaths
  } catch (error) {
    console.log(error)
  }
}

const calculatedDeaths = async () => {
  const yesterdayData = await getYesterdayData()
  const twoBeforeYesterdayData = await getTwoBeforeYesterdayData()
  const calculation = yesterdayData.map((item, index) => {
    return { deaths: item.deaths - twoBeforeYesterdayData[index].deaths }
  })
  return calculation
}

module.exports = calculatedDeaths

//calculatedDeaths().then((res) => console.log(res))
