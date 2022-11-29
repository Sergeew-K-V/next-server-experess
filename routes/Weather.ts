import { Router } from 'express'
import { GetWeather, UpdateDBFields } from '../controllers/Weather'

const WeatherRouter = Router()

WeatherRouter.put('/weather', UpdateDBFields)
WeatherRouter.get('/weather', GetWeather)

export default WeatherRouter
