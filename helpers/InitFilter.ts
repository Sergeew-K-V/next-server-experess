import { WeatherFilter } from '../types'

export const GetKey = (type: string) => {
  if (type === WeatherFilter.lat || type === WeatherFilter.lon) {
    return `city.coord.${type}`
  }
  if (type === WeatherFilter.city) {
    return `${type}.findname`
  }
  if (type === WeatherFilter.country) {
    return `city.${type}`
  }
  return `main.${type}`
}

export const GetValue = (type: string, value: string | number) => {
  if (type === WeatherFilter.city || type === WeatherFilter.country) {
    return value
  }
  return Number(value)
}
