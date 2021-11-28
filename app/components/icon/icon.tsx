import React from 'react'
import IcoMoon from 'react-native-icomoon'
import iconSet from '../../assets/icons/IcoMoon-Config.json'
import { IconProps } from './icon.props'

export const Icon = (props: IconProps) => {
  const { name, color, ...rest } = props
  return (
    <IcoMoon
      iconSet={iconSet}
      name={name as string}
      color={color as string}
      {...rest}
    />
  )
}
