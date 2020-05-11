const express = require('express')
const app = express()
const calculatedDeaths = require('./app')
const cors = require('cors')
port = 5000

app.use(cors())

app.get('/api', async (req, res) => {
  const latestDeaths = await calculatedDeaths()
  res.json(latestDeaths)
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

module.exports = app
