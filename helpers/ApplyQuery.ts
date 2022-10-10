const ApplyQuery = (requestQuery: any) => {
  let requestLimit: number = 0

  if (requestQuery._limit) {
    requestLimit = Number(requestQuery._limit)
  }

  return { requestLimit }
}

export default ApplyQuery
