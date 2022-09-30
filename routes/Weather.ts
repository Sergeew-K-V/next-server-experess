import { Router } from 'express'
import { CreateWeather, GetWeather } from '../controllers/Weather'

const WeatherRouter = Router()

WeatherRouter.get('/weather', GetWeather)

WeatherRouter.post('/weather', CreateWeather)

export default WeatherRouter
