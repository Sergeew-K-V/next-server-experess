import { WeatherFilter } from '../types'

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
