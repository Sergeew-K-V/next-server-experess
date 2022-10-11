const ApplyQuery = (requestQuery: any) => {
  let requestLimit: number = 0
  let requestFilter: object = {}

  if (requestQuery._filter) {
    console.log(requestQuery._filter)
    console.log(requestQuery)
    requestFilter = requestQuery._filter
  }

  if (requestQuery._limit) {
    requestLimit = Number(requestQuery._limit)
  }

  return { requestLimit, requestFilter }
}

export default ApplyQuery
