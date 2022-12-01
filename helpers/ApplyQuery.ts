import { GetKey, GetValue } from './InitFilter'

const ApplyQuery = (requestQuery: any) => {
  let requestLimit: number = 0
  let requestBottomRange: number = 0
  let requestTopRange: number = 0

  let requestFilter = {
    [GetKey(requestQuery._filterType)]: GetValue(requestQuery._filterType, requestQuery._filterValue),
  }

  if (requestQuery._limit) {
    if (requestQuery._limit !== 'All') {
      requestLimit = Number(requestQuery._limit)
    }
  }

  if (requestQuery._bottomRange && requestQuery._topRange) {
    requestBottomRange = Number(requestQuery._bottomRange)
    requestTopRange = Number(requestQuery._topRange)
  }

  return { requestLimit, requestFilter, requestBottomRange, requestTopRange }
}

export default ApplyQuery
