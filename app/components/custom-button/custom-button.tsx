import React from 'react'

import { CustomTouchableOpacity, CustomText } from '../custom-native-components'

import { CustomButtonProps } from './custom-button.props'
import { styles } from './custom-button.style'

export const CustomButton = (props:CustomButtonProps) => {
  const {
    label,
    labelStyle,
    buttonStyle,
    disabled,
    activeOpacity = 0.6,
    onPress
  } = props

  return (
    <CustomTouchableOpacity
      style={[styles.Container, buttonStyle]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={activeOpacity}
    >
      <CustomText style={[styles.Label, labelStyle]}>{label}</CustomText>
    </CustomTouchableOpacity>
  )
}
