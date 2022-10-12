import mongoose from 'mongoose'
import type { WithId, Document } from 'mongodb'
import { ApplyQuery, Convector } from '../helpers'
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
    if (process.env.DB_NAME) {
      const { requestLimit, requestFilter, requestBottomRange, requestTopRange } = ApplyQuery(req.query)

      let data: WithId<Document>[]

      let weatherCollection = mongoose.connection.db.collection(process.env.DB_NAME).find()

      if (requestFilter) {
        console.log(requestFilter, 'controller')
        // weatherCollection = weatherCollection.filter({ requestFilter })
        // weatherCollection = weatherCollection.filter({ 'city.name': 'Kathmandu' })
      }

      if (requestLimit) {
        weatherCollection = weatherCollection.limit(requestLimit)
      }

      if (requestBottomRange && requestTopRange) {
        data = await weatherCollection.limit(requestTopRange).toArray()
        data = data.slice(requestBottomRange, requestTopRange)
      } else {
        data = await weatherCollection.toArray()
      }

      Convector(data)
      res.status(200).json(data)
    }
  } catch (error) {
    res.json({ message: `Error ${error}` })
  }
}

export { GetWeather }
