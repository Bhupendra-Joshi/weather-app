export const convertCelsiusToFahrenheit = (celsius:number, decimalPlaces = 2) => {
  return Number(((celsius * 9 / 5) + 32).toFixed(decimalPlaces))
}

export const convertFahrenheitToCelsius = (fahrenheit:number, decimalPlaces = 2) => {
  return Number(((fahrenheit * -32) * 5 / 9).toFixed(decimalPlaces))
}
