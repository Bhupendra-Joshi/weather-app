import { ApiService, APIResult, BaseApiHandler, API_STATUS, API_PATH } from '@services'
import { getIconUrl, getQueryString } from '@utils'

export class GetWeatherData implements BaseApiHandler {
  /**
   * Function to invoke GET API to login user
   */
  async invoke(payload: ObjectType): Promise<APIResult> {
    const result: any = await ApiService.getInstance()
      .get(
        `${API_PATH.CURRENT_WEATHER_DATA}?${getQueryString(payload)}`,
        {
          transformResponse: this.transformResponse
        },
      )

    const { data = {}, kind = '' } = result

    if (kind === API_STATUS.OK) {
      return {
        success: true,
        data
      }
    } else {
      throw new Error(result)
    }
  }

  transformResponse = (response: any) => {
    if (response) {
      return response?.daily?.map((weather: any) => {
        return {
          date: weather?.dt * 1000,
          tempCelsius: weather.temp.day,
          tempCelsiusMax: weather.temp.max,
          tempCelsiusMin: weather.temp.min,
          conditions: weather?.weather?.[0]?.main,
          conditionsIcon: getIconUrl(weather?.weather?.[0]?.icon),
          humidity: weather.humidity,
          windSpeed: weather?.wind_speed,
          windDirection: weather?.wind_deg,
        }
      })
    }
    return []
  }
}
