import mongoose from 'mongoose'
import type { WithId, Document } from 'mongodb'
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
    let data: WithId<Document>[]

    if (req.query) {
      if (req.query._limit) {
        let limit = Number(req.query._limit)

        const weatherCollectionLimited = mongoose.connection.db.collection('MyWeatherDB').find().limit(limit)
        data = await weatherCollectionLimited.toArray()
        data = data.slice(0, limit)
        res.status(200).json(data)
      }
    } else {
      const weatherCollection = mongoose.connection.db.collection('MyWeatherDB').find()
      data = await weatherCollection.toArray()
      res.status(200).json(data)
    }
  } catch (error) {
    res.json({ message: `Error ${error}` })
  }
}

export { GetWeather }
