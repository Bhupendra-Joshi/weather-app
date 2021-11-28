import { GestureResponderEvent, TextStyle, ViewStyle } from 'react-native'

export interface CustomButtonProps {
  label: string
  labelStyle?: TextStyle
  buttonStyle?: ViewStyle
  disabled?: boolean
  activeOpacity?: number
  onPress?: (event: GestureResponderEvent) => void
}
