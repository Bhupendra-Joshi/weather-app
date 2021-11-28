import { ReactNode } from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import { NativeSafeAreaViewProps } from 'react-native-safe-area-context'

export interface CustomSafeAreaViewProps extends NativeSafeAreaViewProps {
  children?: ReactNode,
  style?: StyleProp<ViewStyle>
}
