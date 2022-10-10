import { Router } from 'express'
import { GetWeather } from '../controllers/Weather'

const WeatherRouter = Router()

WeatherRouter.get('/weather', GetWeather)

export default WeatherRouter
