import React, { memo } from 'react'

import { convertCelsiusToOthers, DATE_FORMAT, formatDate, getDayFromTimestamp } from '@utils'
import { CustomFlatList, CustomImage, CustomText, CustomView } from '@components'
import { DEGREE } from '@constants'
import { useAppConfigStore, useWeatherDataStore } from '@store'

import { styles } from './forecast-view.styles'

const ForecastViewComponent = ({ city }:any) => {

  const AppConfig: any = useAppConfigStore()
  const WeatherData: any = useWeatherDataStore()

  const cityData = WeatherData.weatherData[city.key]

  const renderItem = ({ item }: any) => {
    return (
      <CustomView style={styles.ItemContainer}>
        <CustomView style={styles.ItemSubContainer}>
          <CustomView style={styles.ConditionIconContainer}>
            <CustomImage
              source={{ uri: item?.conditionsIcon }}
              style={styles.ConditionIcon}
            />
          </CustomView>
          <CustomView>
            <CustomText style={styles.WeekDay}>{getDayFromTimestamp(item.date)}</CustomText>
            <CustomText>{formatDate(item.date, DATE_FORMAT.D_MMM).toUpperCase()}</CustomText>
          </CustomView>
        </CustomView>
        <CustomView>
          <CustomText style={styles.Temp}>{convertCelsiusToOthers(item.tempCelsiusMin, AppConfig.unit)}{DEGREE}</CustomText>
          <CustomText style={styles.Temp}>{convertCelsiusToOthers(item.tempCelsiusMax, AppConfig.unit)}{DEGREE}</CustomText>
        </CustomView>
      </CustomView>
    )
  }

  return (
    <CustomView style={styles.Container}>
      <CustomFlatList
        data={cityData?.slice(0, 5) || []}
        renderItem={renderItem}
      />
    </CustomView>
  )
}

export const ForecastView = memo(ForecastViewComponent)
