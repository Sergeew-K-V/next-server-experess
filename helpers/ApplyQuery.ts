import { WeatherFilter } from '../types'
// WeatherFilter.city |
//       WeatherFilter.country |
//       WeatherFilter.temp |
//       WeatherFilter.max_temp |
//       WeatherFilter.min_temp |
//       WeatherFilter.pressure |
//       WeatherFilter.humidity

const ApplyQuery = (requestQuery: any) => {
  let requestLimit: number = 0
  let requestBottomRange: number = 0
  let requestTopRange: number = 0
  let requestFilter = {
    [requestQuery._filterType === WeatherFilter.city
      ? `${requestQuery._filterType}.findname`
      : requestQuery._filterType === WeatherFilter.country
      ? `city.${requestQuery._filterType}`
      : `main.${requestQuery._filterType}`]:
      requestQuery._filterType === WeatherFilter.city || requestQuery._filterType === WeatherFilter.country
        ? requestQuery._filterValue
        : Number(requestQuery._filterValue),
  }

  try {
    // if (requestQuery._filterType && requestQuery._filterValue) {
    //   if (requestQuery._filterType === WeatherFilter.country) {
    //     // requestFilter.type = `city.${requestQuery._filterType}`
    //     // requestFilter.value = requestQuery._filterValue
    //   } else if (requestQuery._filterType === WeatherFilter.city) {
    //     // requestFilter.type = `${requestQuery._filterType}.name`
    //     // requestFilter.value = requestQuery._filterValue
    //   } else {
    //     // requestFilter.type = `main.${requestQuery._filterType}`
    //     // requestFilter.value = Number(requestQuery._filterValue)
    //   }
    // }

    if (requestQuery._limit) {
      requestLimit = Number(requestQuery._limit)
    }

    if (requestQuery._bottomRange && requestQuery._topRange) {
      requestBottomRange = Number(requestQuery._bottomRange)
      requestTopRange = Number(requestQuery._topRange)
    }
  } catch (error) {
    console.log('Error in query', error)
  }

  return { requestLimit, requestFilter, requestBottomRange, requestTopRange }
}

export default ApplyQuery
