import { Kelvin } from '../constants'

const Convector = (arrayOfData: Array<any>) => {
  arrayOfData = arrayOfData.map((el) => {
    el.main.temp -= Kelvin
    el.main.temp_min -= Kelvin
    el.main.temp_max -= Kelvin
    el.main.temp = Number(el.main.temp.toPrecision(2))
    el.main.temp_min = Number(el.main.temp_min.toPrecision(2))
    el.main.temp_max = Number(el.main.temp_max.toPrecision(2))

    // console.log(el.main.temp.toPrecision(2))
    // console.log(el.main.temp_min.toPrecision(2))
    // console.log(el.main.temp_max.toPrecision(2))
    return el
  })
}

export default Convector
