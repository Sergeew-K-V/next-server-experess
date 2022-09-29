import { Schema, model } from 'mongoose'

const WeatherSchema = new Schema({
  id: Number,
  Month: Number,
  Region: String,
  WeatherDataId: Number,
})

export default model('Weather', WeatherSchema)
