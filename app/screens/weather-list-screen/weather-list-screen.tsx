import React, { memo, useRef } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDrawerStatus } from '@react-navigation/drawer'

import { CustomScreenHeader, CustomView, CustomFlatList, CustomText, CustomTouchableOpacity } from '@components'
import { setTempUnit, useAppConfigStore, useWeatherDataStore } from '@store'
import { cities, DEGREE, TempType, tempUnits } from '@constants'
import { convertCelsiusToOthers } from '@utils'

import { WeatherListItem } from './components/weather-list-item'
import { styles } from './weather-list-screen.styles'

const CityWeatherListScreenComponent = () => {
  const navigation = useNavigation()
  const isDrawerOpen = useDrawerStatus() === 'open'

  const WeatherData: any = useWeatherDataStore()
  const AppConfig: any = useAppConfigStore()

  const onMenuPress = useRef(() => {
    navigation.goBack()
  }).current

  const switchTempUnit = useRef((tempKey: string) => {
    setTempUnit(tempKey as TempType)
  }).current

  const renderItem = ({ item, index }: any) => {
    const data = WeatherData.weatherData[item.key]?.[0]

    if (data) {
      return (
        <WeatherListItem
          index={index}
          temperature={`${convertCelsiusToOthers(data.tempCelsius, AppConfig.unit)}`}
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

      <CustomView style={styles.TempSwitchContainer}>
        {
          Object.keys(tempUnits).map((key:string) => {
            return (
              <CustomTouchableOpacity style={styles.TempSwitchButton} key={key} onPress={() => switchTempUnit(key)}>
                <CustomText style={key === AppConfig.unit ? styles.TempSwitchTextBold : styles.TempSwitchText}>
                  {DEGREE}{tempUnits[key as TempType].short}
                </CustomText>
              </CustomTouchableOpacity>
            )
          })
        }

      </CustomView>

    </CustomView>
  )
}

export const WeatherListScreen = memo(CityWeatherListScreenComponent)
