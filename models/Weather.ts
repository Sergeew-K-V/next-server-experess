import { Schema, model, Types } from 'mongoose'

const WeatherSchema = new Schema({
  month: Number,
  year: Number,
  region: String,
  weatherDataId: Types.ObjectId,
})

export default model('WeatherModel', WeatherSchema)
