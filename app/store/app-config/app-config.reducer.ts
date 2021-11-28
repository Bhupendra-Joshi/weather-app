import { APP_CONFIG } from './app-config.actions'

const initialState = {
  unit: 'celsius'
}

export const appConfigReducer = (state = initialState, action:ActionType) => {
  switch (action.type) {

    case APP_CONFIG.SET_TEMP_UNIT: {
      return {
        ...state,
        unit: action.data.unit
      }
    }

    default:
      return state
  }
}
