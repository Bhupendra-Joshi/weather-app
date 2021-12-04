import React, { memo } from 'react'

import { convertCelsiusToOthers } from '@utils'
import { CustomImage, CustomText, CustomView, Icon } from '@components'
import { DEGREE, TempType, tempUnits } from '@constants'
import { useAppConfigStore, useWeatherDataStore } from '@store'

import { styles } from './current-weather-view.styles'

const CurrentWeatherViewComponent = ({ city }:any) => {

  const AppConfig: any = useAppConfigStore()
  const WeatherData: any = useWeatherDataStore()

  const weatherData = WeatherData.weatherData[city.key]?.[0]

  return (
    <CustomView style={styles.Container}>

      <CustomView style={styles.SubContainer}>

        <CustomView style={styles.ConditionIconContainer}>
          <CustomImage
            source={{ uri: weatherData?.conditionsIcon }}
            style={styles.ConditionIcon}
          />
        </CustomView>

        <CustomView style={styles.TempContainer}>
          <CustomText style={styles.Temp}>{convertCelsiusToOthers(weatherData?.tempCelsius, AppConfig.unit, 0)}</CustomText>
          <CustomText style={styles.TempUnit}>{DEGREE}{tempUnits[AppConfig.unit as TempType].short}</CustomText>
        </CustomView>
        <CustomText style={styles.WeatherCondition}>{weatherData?.conditions}</CustomText>

        <CustomText style={styles.TempSmall}>
          {isNaN(parseInt(weatherData?.tempCelsiusMin)) ? '-' : parseInt(weatherData?.tempCelsiusMin) }{DEGREE}
          {` ${isNaN(parseInt(weatherData?.tempCelsiusMax)) ? '-' : parseInt(weatherData?.tempCelsiusMax)}${DEGREE}`}
        </CustomText>
      </CustomView>

      <CustomView style={styles.WeatherItemsContainer}>

        <CustomView style={styles.WeatherItem}>
          <Icon name={'umbrella'}/>
          <CustomText style={styles.WeatherItemText}>100%</CustomText>
        </CustomView>

        <CustomView style={styles.WeatherItem}>
          <Icon name={'droplet'}/>
          <CustomText style={styles.WeatherItemText}>{weatherData?.humidity ?? '-'}</CustomText>
        </CustomView>

        <CustomView style={styles.WeatherItem}>
          <Icon name={'wind'}/>
          <CustomText style={styles.WeatherItemText}>{weatherData?.windSpeed ?? '-'} mph</CustomText>
        </CustomView>

      </CustomView>

    </CustomView>
  )
}

export const CurrentWeatherView = memo(CurrentWeatherViewComponent)
