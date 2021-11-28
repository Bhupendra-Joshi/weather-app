import React from 'react'

import { COLORS } from '@theme'
import { translate } from '@translate'

import { CustomView, CustomText, CustomTouchableOpacity } from '../custom-native-components'
import { Icon } from '../icon'

import { CustomScreenHeaderProps } from './custom-screen-header.props'
import { styles } from './custom-screen-header.style'

export const CustomScreenHeader = (props:CustomScreenHeaderProps) => {
  const {
    LeftComponent,
    RightComponent,
    CenterComponent,
    darkTheme,
    onSearchPress,
    onMenuPress,
  } = props

  const iconColor = darkTheme ? COLORS.palette.black : COLORS.palette.white

  const getLeftComponent = () => {
    if (LeftComponent) {
      return (<LeftComponent/>)
    } else {
      return (
        <CustomTouchableOpacity onPress={onMenuPress} style={styles.Button}>
          <Icon name={'menu'} color={iconColor} size={25}/>
        </CustomTouchableOpacity>
      )
    }
  }

  const getCenterComponent = () => {
    if (CenterComponent) {
      return (<CenterComponent/>)
    } else {
      return (
        <CustomText style={darkTheme ? styles.TitleDark : styles.TitleLight}>
          {translate('common.appName')}
        </CustomText>
      )
    }
  }

  const getRightComponent = () => {
    if (RightComponent) {
      return (<RightComponent/>)
    } else {
      return (
        <CustomTouchableOpacity onPress={onSearchPress} style={styles.Button}>
          <Icon name={'search'} color={iconColor} size={30}/>
        </CustomTouchableOpacity>
      )
    }
  }

  return (
    <>
      <CustomView style={styles.Container}>
         {getLeftComponent()}
         {getCenterComponent()}
         {getRightComponent()}
      </CustomView>
    </>
  )
}
