import express from 'express'
import dotenv from 'dotenv'
import path from 'path'
import cors from 'cors'
import mongoose from 'mongoose'
import WeatherRouter from '../routes/Weather'
import MenuRouter from '../routes/Menu'
import HomeRouter from '../routes/Home'
import WeatherDataRouter from '../routes/WeatherData'

dotenv.config()
const app = express()
const PORT = process.env.PORT || 8081

app.use('/static', express.static(path.join(__dirname, 'public')))
app.use(cors())
app.use(MenuRouter)
app.use(HomeRouter)
app.use(WeatherRouter)
app.use(WeatherDataRouter)
//WeatherDB
//sample_weatherdata
// mongodb://localhost:27017/weatherDB
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
