import { WEATHER_DATA_STORE_ACTIONS } from './weather-data.actions'

const initialState = {
  weatherData: {},
  isLoading: false,
  isFailed: false
}

export const weatherDataReducer = (state = initialState, action:ActionType) => {
  switch (action.type) {
    case WEATHER_DATA_STORE_ACTIONS.WEATHER_DATA_REQUEST_START: {
      return {
        ...state,
        isLoading: true,
        isFailed: false,
      }
    }
    case WEATHER_DATA_STORE_ACTIONS.WEATHER_DATA_REQUEST_SUCCESS: {
      const newWeatherData: ObjectType = { ...state.weatherData }
      newWeatherData[`${action.data.id}`] = action.data
      return {
        ...state,
        weatherData: newWeatherData,
        isLoading: false,
        isFailed: false,
      }
    }
    case WEATHER_DATA_STORE_ACTIONS.WEATHER_DATA_REQUEST_FAILED: {
      return {
        ...state,
        isLoading: false,
        isFailed: true,
      }
    }
    default:
      return state
  }
}
