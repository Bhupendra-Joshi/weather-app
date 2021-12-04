import { TempType } from '@constants'

export const convertCelsiusToOthers = (tempInCelsius:number, toUnit:TempType, decimalPlaces = 2) => {
  if (tempInCelsius !== undefined && tempInCelsius !== null && !isNaN(tempInCelsius)) {
    switch (toUnit) {
      case 'celsius':
        return Number(tempInCelsius.toFixed(decimalPlaces))
      case 'fahrenheit':
        return Number(((tempInCelsius * 9 / 5) + 32).toFixed(decimalPlaces))
    }
  }
  return '-'
}
