import React, { memo, useRef } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDrawerStatus } from '@react-navigation/drawer'

import { CustomScreenHeader, CustomView, CustomFlatList } from '@components'
import { useAppConfigStore, useWeatherDataStore } from '@store'

import { styles } from './weather-list-screen.styles'
import { cities } from '@constants'
import { convertCelsiusToFahrenheit } from '@utils'
import { WeatherListItem } from './components/weather-list-item'

const CityWeatherListScreenComponent = () => {
  const navigation = useNavigation()
  const isDrawerOpen = useDrawerStatus() === 'open'

  const WeatherData: any = useWeatherDataStore()
  const AppConfig: any = useAppConfigStore()

  const onMenuPress = useRef(() => {
    navigation.goBack()
  }).current

  const renderItem = ({ item, index }: any) => {
    const data = WeatherData.weatherData[item.key]?.[0]

    if (data) {
      const temp = AppConfig.unit === 'celsius' ? data.tempCelsius : convertCelsiusToFahrenheit(data.tempCelsius)
      return (
        <WeatherListItem
          index={index}
          temperature={temp}
          cityName={item.title}
          conditions={data.conditions}
          conditionImageUrl={data.conditionsIcon}
        />
      )
    } else {
      return null
    }
  }

  return (
    <CustomView style={styles.Container}>

      <CustomScreenHeader darkTheme={true} onMenuPress={onMenuPress}/>

      {
        isDrawerOpen
          ? (<CustomFlatList data={cities} renderItem={renderItem} />)
          : null
      }
    </CustomView>
  )
}

export const WeatherListScreen = memo(CityWeatherListScreenComponent)
