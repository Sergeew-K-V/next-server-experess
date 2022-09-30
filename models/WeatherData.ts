import { Schema, model } from 'mongoose'

const WeatherDataSchema = new Schema({
  temperature: Number,
  pressure: Number,
  windSpeed: Number,
})

export default model('WeatherDataModel', WeatherDataSchema)
