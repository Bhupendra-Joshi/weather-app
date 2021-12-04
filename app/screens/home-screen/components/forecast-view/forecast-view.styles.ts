import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { Device } from '@utils'
import { COLORS, FONT_SIZE } from '@theme'

export const styles = StyleSheet.create({

  Container: {
    width: Device.screenWidth
  } as ViewStyle,

  ItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
  } as ViewStyle,

  ItemSubContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
    marginEnd: 30
  } as ViewStyle,

  ConditionIcon: {
    height: Device.verticalScale(50),
    width: Device.verticalScale(50),
    borderRadius: Device.verticalScale(25),
    alignSelf: 'center',
    backgroundColor: COLORS.palette.azure
  } as ImageStyle,

  WeekDay: {
    fontSize: FONT_SIZE.SMALL_X,
    fontWeight: '700',
  } as TextStyle,

  Temp: {
    fontSize: FONT_SIZE.SMALL_X,
    fontWeight: '500',
    textAlign: 'right'
  } as TextStyle
})
