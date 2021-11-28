import axios, { AxiosInstance, AxiosTransformer } from 'axios'
import { config } from '@config'
import { API_CONFIG, API_RESPONSE_TYPE, API_STATUS } from './api-constants'

interface Options {
  transformRequest?: AxiosTransformer
  transformResponse?: AxiosTransformer
  baseURL?: string
  extras?: any
}

const responseTransformer = (response: any, transformResponse?: (response: any) => any) => {
  let cleanedResponse
  if (typeof response === 'string') {
    try {
      cleanedResponse = JSON.parse(`${response}`)
    } catch (error) {
      return response
    }
  }

  return transformResponse ? transformResponse(cleanedResponse) : cleanedResponse
}

export class ApiService {

  static instance: ApiService

  axiosClient: AxiosInstance

  constructor(authToken = '') {
    if (authToken) API_CONFIG.headers.common['Authorization'] = authToken

    this.axiosClient = axios.create({ ...API_CONFIG, baseURL: config.BASE_URL })
    this.configureInterceptors()
  }

  /**
   *
   *
   * @static
   */
  static getInstance = (authToken = null) => {
    if (!ApiService.instance) {
      ApiService.instance = new ApiService()
    }

    if (authToken) {
      ApiService.instance = new ApiService(`Bearer ${authToken}`)
    }
    return ApiService.instance
  }

  /**
   * Updates the auth token
   */
  updateAuthToken = (token: string) => {
    this.axiosClient.defaults.headers.common.Authorization = token
  }

  /**
   *
   * To handle request
   */
  requestHandler = (request: any) => request

  /**
   *
   * To handle error
   */
  errorHandler = (error: any) => error

  /**
   *
   * To handle success
   */
  successHandler = (response: { kind?: any; status?: any; data?: any; statusText?: any }) => {
    let { data, statusText } = response

    /**
     * data is coming as a string so used JSON.parse
     */
    if (typeof data === 'string' || data instanceof String) {
      data = JSON.parse(`${data}`)
    }

    if (statusText === 'OK') {
      response.kind = API_STATUS.OK
      return { ...response, data }
    } else if (data && data.status === 'success') {
      delete data.status
      response.kind = API_STATUS.OK
      return { ...response, data }
    } else if (response.status === 200) {
      response.kind = API_STATUS.OK
      return response
    } else {
      return this.errorHandler(data)
    }
  }

  /**
   *
   * Setup interceptor
   */
  configureInterceptors = () => {
    this.axiosClient.interceptors.request.use(async request => {
      return this.requestHandler(request)
    })
    this.axiosClient.interceptors.response.use(
      (response: any) => this.successHandler(response),
      (error: any) => this.errorHandler(error),
    )
  }

  /**
   *
   * GET request method
   */
  get = async (apiPath: string, options?: Options) => {

    const source = axios.CancelToken.source()
    const timeout = setTimeout(source.cancel, options?.extras?.timeout || config.API_TIME_OUT)

    return await this.axiosClient
      .get(`${apiPath}&appid=${config.API_KEY}`, {
        baseURL: options?.baseURL,
        cancelToken: source.token,
        transformRequest: options?.transformRequest || (data => data),
        transformResponse: res => responseTransformer(res, options?.transformResponse),
        validateStatus: () => true,
        responseType: API_RESPONSE_TYPE,
        ...options?.extras
      }).then(response => {
        clearTimeout(timeout)
        return response
      }).catch(actualError => {
        clearTimeout(timeout)
        if (actualError.name === 'TypeError') {

          const customError = new Error('Network Error')
          customError.name = 'APIError'
          throw customError

        } else {
          throw actualError
        }
      })
  }
}
