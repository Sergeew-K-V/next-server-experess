import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import path from 'path'
import cors from 'cors'
import mongoose from 'mongoose'
import WeatherRouter from '../routes/Weather'
import MenuRouter from '../routes/Menu'
import HomeRouter from '../routes/Home'
import WeatherDataRouter from '../routes/WeatherData'
import bodyParser from 'body-parser'
import WeatherDataModel from '../models/WeatherDataModel'

const app = express()
const PORT = process.env.PORT || 8081

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/static', express.static(path.join(__dirname, 'public')))
app.use(cors())
app.use(MenuRouter)
app.use(HomeRouter)
app.use(WeatherRouter)
app.use(WeatherDataRouter)

//WeatherDB
//sample_weatherdata
// mongodb://localhost:27017/weatherDB
const GeneratorWeatherData = async (
  howManyToGen = 0,
  minTemp = -50,
  maxTemp = 60,
  minPres = 652.5,
  maxPres = 798,
  maxWindSpeed = 25,
  minWindSpeed = 0
) => {
  try {
    for (let i = 0; i < howManyToGen; i++) {
      // const genTemperature = Math.random() * (maxTemp - minTemp) + minTemp
      // const genPressure = Math.random() * (maxPres - minPres) + minPres
      // const genWindSpeed = Math.random() * (maxWindSpeed - minWindSpeed) + minWindSpeed
      const Obj = {
        temperature: Math.random() * (maxTemp - minTemp) + minTemp,
        pressure: Math.random() * (maxPres - minPres) + minPres,
        windSpeed: Math.random() * (maxWindSpeed - minWindSpeed) + minWindSpeed,
      }
      await WeatherDataModel.create({ ...Obj })
    }
  } catch (error) {}
}

async function startServer() {
  try {
    if (process.env.CLUSTER_HTTP && process.env.USERNAME && process.env.PASSWORD && process.env.CLUSTER !== undefined) {
      // await mongoose.connect('mongodb://localhost:27017/weatherDB')
      // await mongoose.connect(process.env.CLUSTER_HTTP + process.env.USERNAME + ':' + process.env.PASSWORD + process.env.CLUSTER + process.env.DB_NAME_CLUSTER)
      await mongoose.connect(process.env.CLUSTER_HTTP + process.env.USERNAME + ':' + process.env.PASSWORD + process.env.CLUSTER + 'WeatherDB')
      let db = mongoose.connection
      app.listen(PORT, () => {
        console.log('Server started on PORT: ', PORT)
      })
    }
  } catch (error) {
    return console.log(`Server have some errors: ${error}`)
  }
}

startServer()

export default app
