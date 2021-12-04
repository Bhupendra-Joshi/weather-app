import { StoreRef } from '../common-store'
import { TempType } from '@constants'

export const APP_CONFIG = {

  SET_TEMP_UNIT: 'APP_CONFIG_SET_TEMP_UNIT',

}

const setTempUnitAction = (unit:TempType) => {
  return {
    type: APP_CONFIG.SET_TEMP_UNIT,
    data: { unit }
  }
}

export const setTempUnit = (unit: TempType) => {
  StoreRef.dispatch(setTempUnitAction(unit))
}
