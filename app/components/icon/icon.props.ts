import { ColorValue } from 'react-native'

export const Icons = [
  'droplet',
  'wind',
  'search',
  'umbrella',
  'menu',
] as const

export type IconType = typeof Icons[number]

export interface IconProps {
  name: IconType
  color?: ColorValue
  size?: number
  strokeWidth?: number
  offset?: number // some icon might have different padding, use this to offset it
}
