import mongoose from 'mongoose'

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
    let data = await mongoose.connection.db.collection('MyWeatherDB').find().toArray()
    console.log('1', req.query)
    if (req.query) {
      console.log('2', req.query)
      if (req.query._limit) {
        console.log('3', req.query._limit)
        data = data.slice(req.query._limit, data.length)
        console.log(data.length)
      }
    }
    res.status(200).json(data)
  } catch (error) {
    res.json({ message: `Error ${error}` })
  }
}

export { GetWeather }
