import React, { memo } from 'react'
import Animated, { SlideInLeft, SlideInRight } from 'react-native-reanimated'

import { CustomView, CustomText, CustomImage, } from '@components'
import { DEGREE } from '@constants'

import { styles } from './weather-list-item.styles'

interface WeatherListItemProps {
  index: number
  cityName: string
  temperature: string
  conditions: string
  conditionImageUrl: string
}

const WeatherListItemComponent = (props: WeatherListItemProps) => {
  const {
    index,
    cityName,
    temperature,
    conditions,
    conditionImageUrl
  } = props

  return (
    <Animated.View
      style={styles.Container}
      entering={SlideInLeft.delay(index * 100)}
    >
      <CustomText style={styles.Temp}>{parseInt(temperature)}{DEGREE}</CustomText>
      <CustomView style={styles.SubContainer}>
        <CustomText style={styles.CityName}>{cityName}</CustomText>
        <CustomText style={styles.Conditions}>{conditions}</CustomText>
      </CustomView>
      <CustomView style={styles.ConditionIconContainer}>
        <CustomImage source={{ uri: conditionImageUrl }} style={styles.ConditionIcon}/>
      </CustomView>
    </Animated.View>
  )
}

export const WeatherListItem = memo(WeatherListItemComponent)
