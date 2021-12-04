import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { COLORS, FONT_SIZE } from '@theme'
import { Device } from '@utils'

export const circularImageSize = Device.verticalScale(100)

export const tabIndicatorSize = 6
export const tabIndicatorMargin = 8

export const tabSliderWidth = 2 * tabIndicatorMargin
export const tabSliderOffset = tabIndicatorSize * 2

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

  TabIndicatorContainer: {
    zIndex: 1,
    flexDirection: 'row',
    alignSelf: 'center',
  } as ViewStyle,

  TabIndicator: {
    backgroundColor: COLORS.palette.black,
    width: tabIndicatorSize,
    height: tabIndicatorSize,
    marginHorizontal: tabIndicatorMargin,
    borderRadius: tabIndicatorSize / 2
  } as ViewStyle,

  TabSlider: {
    position: 'absolute',
    backgroundColor: COLORS.palette.black,
    marginStart: tabIndicatorMargin,
    height: tabIndicatorSize,
    width: tabSliderWidth,
    borderRadius: tabIndicatorSize / 2
  } as ViewStyle,

  BottomViewContainer: {
    flex: 1
  } as ViewStyle,

  BottomViewVerticalContainer: {
    width: '100%',
    height: '100%',
    paddingTop: 50,
    backgroundColor: COLORS.palette.white,
  } as ViewStyle,

  BottomViewHorizontalContainer: {
    width: '100%',
    flex: 1,
    backgroundColor: COLORS.palette.white,
    flexDirection: 'row',
  } as ViewStyle,

  Title: {
    color: COLORS.palette.black,
    fontWeight: 'bold',
    fontSize: FONT_SIZE.LARGE_3X,
    textAlign: 'center',
    marginVertical: Device.verticalScale(10)
  } as TextStyle,

})
