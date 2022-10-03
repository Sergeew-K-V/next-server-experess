import WeatherModel from '../models/WeatherModel'

const CreateWeather = async (req: any, res: any) => {
  try {
    const WeatherData = await WeatherModel.create({ ...req.body })
    res.status(201).json({ message: `Weather was created succesfully`, WeatherData })
  } catch (error) {
    res.status(500).json({ message: `Error ${error}` })
  }
}

const GetWeather = async (req: any, res: any) => {
  try {
    const WeatherArray = await WeatherModel.find()

    return res.json({ WeatherArray })
  } catch (error) {
    res.status(500).json({ message: `Error ${error}` })
  }
}

export { CreateWeather, GetWeather }
