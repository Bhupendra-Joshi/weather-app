import { Api } from '@services'

import { StoreRef } from '../common-store'

export const WEATHER_DATA_STORE_ACTIONS = {

  WEATHER_DATA_REQUEST_START: 'WEATHER_DATA_REQUEST_START',
  WEATHER_DATA_REQUEST_SUCCESS: 'WEATHER_DATA_REQUEST_SUCCESS',
  WEATHER_DATA_REQUEST_FAILED: 'WEATHER_DATA_REQUEST_FAILED',

}

const weatherDataRequestStart = () => {
  return {
    type: WEATHER_DATA_STORE_ACTIONS.WEATHER_DATA_REQUEST_START
  }
}

const weatherDataRequestSuccess = (data:any) => {
  return {
    type: WEATHER_DATA_STORE_ACTIONS.WEATHER_DATA_REQUEST_SUCCESS,
    data: data
  }
}

const weatherDataRequestFailed = () => {
  return {
    type: WEATHER_DATA_STORE_ACTIONS.WEATHER_DATA_REQUEST_FAILED,
  }
}

export const fetchWeatherData = async (city:any) => {
  StoreRef.dispatch(weatherDataRequestStart())
  try {
    const payload = {
      lat: city.lat,
      lon: city.lang,
      units: 'metric',
      exclude: 'hourly,minutely',
    }

    const response:any = await Api.fetchWeatherData(payload)
    if (response.success) {
      response.data.id = city.key
      StoreRef.dispatch(weatherDataRequestSuccess(response.data))
    } else {
      StoreRef.dispatch(weatherDataRequestFailed())
    }
  } catch (error) {
    StoreRef.dispatch(weatherDataRequestFailed())
  }
}
