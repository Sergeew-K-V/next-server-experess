import { Schema, model } from 'mongoose'

const WeatherDataSchema = new Schema({
  id: Number,
  temperature: Number,
  pressure: Number,
  windSpeed: Number,
})

export default model('WeatherData', WeatherDataSchema)
