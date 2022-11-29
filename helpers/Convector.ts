import { Kelvin, pressureMultiplier } from '../constants'

const Convector = (arrayOfData: Array<any>) => {
  arrayOfData = arrayOfData.map((el) => {
    el.main.temp -= Kelvin
    el.main.temp_min -= Kelvin
    el.main.temp_max -= Kelvin
    el.main.temp = Number(el.main.temp.toFixed(1))
    el.main.temp_min = Number(el.main.temp_min.toFixed(1))
    el.main.temp_max = Number(el.main.temp_max.toFixed(1))
    el.main.pressure = (el.main.pressure / pressureMultiplier).toFixed(2)
    return el
  })
}

export default Convector
