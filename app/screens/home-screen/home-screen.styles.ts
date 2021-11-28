import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { COLORS, FONT_SIZE } from '@theme'
import { Device } from '@utils'

export const circularImageSize = Device.verticalScale(100)

export const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: COLORS.palette.white,
  } as ViewStyle,

  HeaderImage: {
    height: Device.verticalScale(200),
    zIndex: 200,
  } as ImageStyle,

  HeaderCircularImageContainer: {
    height: Device.verticalScale(100),
    width: Device.verticalScale(100),
    borderRadius: Device.verticalScale(50),
    top: Device.verticalScale(150),
    alignSelf: 'center',
    overflow: 'hidden',
    zIndex: 201,
    position: 'absolute'
  } as ViewStyle,

  HeaderCircularImage: {
    height: circularImageSize,
    width: circularImageSize,
    borderRadius: Device.verticalScale(50),
  } as ImageStyle,

  BottomViewContainer: {
    width: '100%',
    height: '100%',
    paddingTop: 100,
    backgroundColor: COLORS.palette.white
  } as ViewStyle
})
