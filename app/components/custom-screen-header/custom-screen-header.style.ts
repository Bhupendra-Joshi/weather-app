import { StyleSheet } from 'react-native'

import { COLORS, FONT_SIZE } from '@theme'

export const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },

  Button: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },

  TitleLight: {
    color: COLORS.palette.white,
    fontWeight: '300',
    fontSize: FONT_SIZE.LARGE_3X
  },

  TitleDark: {
    color: COLORS.palette.black,
    fontWeight: '300',
    fontSize: FONT_SIZE.LARGE_3X
  },

})
