import { images } from '@assets'

export const cities = [
  {
    key: 'budapest',
    lat: 47.4979,
    lang: 19.0402,
    title: 'Budapest',
    image: images.budapest
  },
  {
    key: 'tokyo',
    lat: 35.6762,
    lang: 139.6503,
    title: 'Tokyo',
    image: images.tokyo
  },
  {
    key: 'newYork',
    lat: 40.7128,
    lang: -74.0060,
    title: 'New York',
    image: images.newYork
  },
  {
    key: 'miami',
    lat: 25.7617,
    lang: -80.1918,
    title: 'Miami',
    image: images.miami
  }
]

export const getCityInfo = (cityKey: string) => cities.find(item => item.key === cityKey)

export type CityType = 'budapest' | 'tokyo' | 'newYork' | 'miami'
