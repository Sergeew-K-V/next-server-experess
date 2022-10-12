const ApplyQuery = (requestQuery: any) => {
  let requestLimit: number = 0
  let requestBottomRange: number = 0
  let requestTopRange: number = 0
  let requestFilter: object = {}

  try {
    if (requestQuery._filter) {
      console.log(requestQuery._filter)
      console.log(requestQuery)
      requestFilter = requestQuery._filter
    }

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
