import mongoose from 'mongoose'
import type { WithId, Document } from 'mongodb'
import { ApplyQuery } from '../helpers'
// const CreateWeather = async (req: any, res: any) => {
//   try {
//     // const WeatherData = await WeatherModel.create({ ...req.body })
//     // res.status(201).json({ message: `Weather was created succesfully`, WeatherData })
//   } catch (error) {
//     res.status(500).json({ message: `Error ${error}` })
//   }
// }

const GetWeather = async (req: any, res: any) => {
  try {
    const { requestLimit } = ApplyQuery(req.query)

    let data: WithId<Document>[]

    let weatherCollection = mongoose.connection.db.collection('MyWeatherDB').find()

    if (requestLimit) {
      weatherCollection = weatherCollection.limit(Number(requestLimit))
    }

    data = await weatherCollection.toArray()

    res.status(200).json(data)
  } catch (error) {
    res.json({ message: `Error ${error}` })
  }
}

export { GetWeather }
