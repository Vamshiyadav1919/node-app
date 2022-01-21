const express = require('express')
const app = express()
const port = 3000

app.get('/data/2.5/weather', (req, res) => {
  console.log("em ra gutle!")
  res.json({"coord":{"lon":-123.262,"lat":44.5646},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"base":"stations","main":{"temp":284.81,"feels_like":283.96,"temp_min":281.27,"temp_max":286.77,"pressure":1027,"humidity":74},"visibility":10000,"wind":{"speed":0.45,"deg":293,"gust":1.79},"clouds":{"all":75},"dt":1642722713,"sys":{"type":2,"id":2040223,"country":"US","sunrise":1642693376,"sunset":1642727096},"timezone":-28800,"id":5720727,"name":"Corvallis","cod":200})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
