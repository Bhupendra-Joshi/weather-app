import { Dimensions, I18nManager, Platform } from 'react-native'

const orientations = {
  PORTRAIT: 'portrait',
  LANDSCAPE: 'landscape',
}

const isAndroid = Platform.OS === 'android'
const isIOS = Platform.OS === 'ios'

const screenHeight = Dimensions.get('screen').height
const screenWidth = Dimensions.get('screen').width

const baseWidth = 428
const baseHeight = 926

const verticalScreenRatio = screenHeight / baseHeight
const horizontalScreenRatio = screenWidth / baseWidth

const insetTop = 0
const insetBottom = 0

const getOrientation = (height: number, width: number) => {
  return width < height ? orientations.PORTRAIT : orientations.LANDSCAPE
}

const accessibility = { isScreenReaderEnabled: false }

export const Device = {
  orientations,
  isAndroid,
  isIOS,
  isRTL: I18nManager.isRTL,

  get insetTop() { return insetTop },
  get insetBottom() { return insetBottom },

  get accessibility() { return accessibility },
  get orientation() { return getOrientation(screenHeight, screenWidth) },
  get isLandscape() { return getOrientation(screenHeight, screenWidth) === orientations.LANDSCAPE },
  get screenWidth() { return screenWidth },
  get screenHeight() { return screenHeight },

  verticalScale: (value: number) => {
    return verticalScreenRatio * value
  },

  horizontalScale: (value: number) => {
    return horizontalScreenRatio * value
  },

}
