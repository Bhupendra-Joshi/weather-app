import { config } from '@config'

// API status
export const API_STATUS = {
  ERROR: 'error',
  OK: 'ok',
  SUCCESS: 'success',
  FAIL: 'fail',
  UPDATED: 'updated'
}

export const API_RESPONSE_TYPE = 'json'

export const API_PATH = {
  CURRENT_WEATHER_DATA: 'onecall',
}

export const API_CONFIG = {
  timeout: config.API_TIME_OUT,
  headers: {
    common: {
      'Authorization': '',
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  },
}
