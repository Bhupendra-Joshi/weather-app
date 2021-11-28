import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { COLORS, FONT_SIZE } from '@theme'

export const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20
  } as ViewStyle,

  Temp: {
    flex: 1.1,
    color: COLORS.palette.black,
    fontSize: FONT_SIZE.LARGE_4X,
    textAlign: 'center',
    fontWeight: '200',
  } as TextStyle,

  SubContainer: {
    flex: 2,
    justifyContent: 'flex-end',
    paddingBottom: 10
  } as ViewStyle,

  ConditionIconContainer: {
    shadowColor: COLORS.palette.black,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  } as ViewStyle,

  ConditionIcon: {
    backgroundColor: COLORS.palette.azure,
    height: 50,
    width: 50,
    borderRadius: 25
  },

  CityName: {
    color: COLORS.palette.black,
    fontSize: FONT_SIZE.SMALL_2X,
    fontWeight: '600',
  } as TextStyle,

  Conditions: {
    color: COLORS.palette.black,
    fontSize: FONT_SIZE.SMALL_2X,
    fontWeight: '300',
  } as TextStyle,
})
