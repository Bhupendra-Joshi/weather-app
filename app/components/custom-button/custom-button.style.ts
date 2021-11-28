import { StyleSheet } from 'react-native'

import { COLORS, FONT_SIZE } from '@theme'
import { Device } from '@utils'

export const styles = StyleSheet.create({
  Container: {
    backgroundColor: COLORS.palette.black,
    height: Device.verticalScale(50),
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  Label: {
    color: COLORS.palette.white,
    fontSize: FONT_SIZE.MEDIUM
  }
})
