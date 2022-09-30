import WeatherDataModel from '../models/WeatherData'

const CreateWeatherData = async (req: any, res: any) => {
  try {
    const WeatherData = await WeatherDataModel.create({ ...req.body })
    res.status(201).json({ message: `WeatherData was created succesfully`, WeatherData })
  } catch (error) {
    res.status(500).json({ message: `Error ${error}` })
  }
}

const GetWeatherData = async (req: any, res: any) => {
  try {
    const WeatherDataArray = await WeatherDataModel.find()

    return res.json({ WeatherDataArray })
  } catch (error) {
    res.status(500).json({ message: `Error ${error}` })
  }
}

export { CreateWeatherData, GetWeatherData }
