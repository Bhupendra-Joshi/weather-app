import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { COLORS, FONT_SIZE } from '@theme'
import { Device } from '@utils'

export const styles = StyleSheet.create({
  Container: {
    width: Device.screenWidth,
    height: '100%',
  } as ViewStyle,

  SubContainer: {
    flex: 1,
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
    height: Device.verticalScale(70),
    width: Device.verticalScale(70),
    borderRadius: Device.verticalScale(35),
    alignSelf: 'center',
    backgroundColor: COLORS.palette.azure,
    marginTop: Device.verticalScale(40)
  } as ImageStyle,

  TempContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  } as ViewStyle,

  Temp: {
    color: COLORS.palette.black,
    fontSize: FONT_SIZE.LARGEST,
    textAlign: 'center',
    fontWeight: '200',
  } as TextStyle,

  TempUnit: {
    color: COLORS.palette.black,
    fontSize: FONT_SIZE.MEDIUM,
    textAlign: 'center',
    fontWeight: '200',
    marginTop: Device.verticalScale(10)
  } as TextStyle,

  WeatherCondition: {
    color: COLORS.palette.black,
    fontSize: FONT_SIZE.LARGE_X,
    textAlign: 'center',
    fontWeight: '300',
  } as TextStyle,

  TempSmall: {
    color: COLORS.palette.black,
    fontSize: FONT_SIZE.LARGE,
    textAlign: 'center',
    fontWeight: '300',
  } as TextStyle,

  WeatherItemsContainer: {
    borderRadius: 5,
    backgroundColor: COLORS.palette.white,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: Device.verticalScale(50),
  } as ViewStyle,

  WeatherItem: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: Device.horizontalScale(10)
  } as ViewStyle,

  WeatherItemText: {
    color: COLORS.palette.black,
    fontWeight: '600',
    fontSize: FONT_SIZE.LARGE,
    marginTop: Device.verticalScale(10)
  } as TextStyle,

})
