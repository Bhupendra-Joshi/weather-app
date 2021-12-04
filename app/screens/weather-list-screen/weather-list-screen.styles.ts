import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { COLORS, FONT_SIZE } from '@theme'

export const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: COLORS.palette.white,
  } as ViewStyle,

  SubContainer: {
    flex: 1,
  } as ViewStyle,

  TempSwitchContainer: {
    position: 'absolute',
    bottom: 30,
    flexDirection: 'row',
    alignSelf: 'center',
    backgroundColor: COLORS.palette.white,
    borderRadius: 20,

    shadowColor: COLORS.palette.black,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,

  } as ViewStyle,

  TempSwitchButton: {
    paddingVertical: 8,
  }as ViewStyle,

  TempSwitchText: {
    paddingHorizontal: 20,
    color: COLORS.palette.black,
    fontSize: FONT_SIZE.MEDIUM,
    fontWeight: '300',
  }as TextStyle,

  TempSwitchTextBold: {
    paddingHorizontal: 20,
    fontSize: FONT_SIZE.MEDIUM,
    fontWeight: 'bold',
  }as TextStyle

})
