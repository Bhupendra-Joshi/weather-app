import * as Types from './api-types'
import { GetWeatherData } from './api-invokes'

/**
 * Manages all requests to the API.
 */
export class Api {
  /**
   * Worker profile request
   */
  static async fetchWeatherData(payload: ObjectType): Promise<Types.APIResult> {
    return new GetWeatherData().invoke(payload)
  }
}
