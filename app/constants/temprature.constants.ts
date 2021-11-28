export const tempUnits = {
  celsius: {
    title: 'Celsius',
    short: 'C'
  },
  fahrenheit: {
    title: 'Fahrenheit',
    short: 'F'
  }
}

export const DEGREE = '\u00b0'

export type TempType = keyof typeof tempUnits
