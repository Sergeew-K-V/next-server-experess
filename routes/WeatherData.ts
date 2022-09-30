import { Router } from 'express'
import { CreateWeatherData, GetWeatherData } from '../controllers/WeatherData'

const WeatherDataRouter = Router()

WeatherDataRouter.get('/weatherdata', GetWeatherData)

WeatherDataRouter.post('/weatherdata', CreateWeatherData)

export default WeatherDataRouter
