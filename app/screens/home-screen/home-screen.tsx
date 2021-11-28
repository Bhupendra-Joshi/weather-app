import React, { memo, useEffect, useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { PanGestureHandler } from 'react-native-gesture-handler'
import Animated, {
  runOnJS,
  useAnimatedGestureHandler, useAnimatedReaction,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'

import { CustomScreenHeader, CustomView, CustomImageBackground, } from '@components'
import { fetchWeatherData, useWeatherDataStore } from '@store'
import { cities, CityType, getCityInfo } from '@constants'

import { circularImageSize, styles } from './home-screen.styles'
import { BottomView } from './components/bottom-view'

const HomeScreenComponent = () => {
  const navigation:{ openDrawer:()=>void } = useNavigation()

  const WeatherData: any = useWeatherDataStore()

  const [currentCity, setCurrentCity] = useState<CityType>('tokyo')

  const animatedValue = useSharedValue(0)
  const animatedViewHeight = useSharedValue(0)
  const currentCityIndex = useSharedValue(0)
  const currentAnimatedOffset = useSharedValue(0)

  const onMenuPress = useRef(() => {
    navigation.openDrawer()
  }).current

  const gestureHandler = useAnimatedGestureHandler({

    onActive: (event, ctx:{ignore:boolean}) => {
      if (event.translationY > 0 && currentCityIndex.value === 0) {
        ctx.ignore = true
        return
      } else if (event.translationY < 0 && currentCityIndex.value === (cities.length - 1)) {
        ctx.ignore = true
        return
      }
      ctx.ignore = false
      animatedValue.value = currentAnimatedOffset.value + event.translationY / 2

    },

    onEnd: (event, ctx) => {
      if (!ctx.ignore) {
        if (event.translationY < -animatedViewHeight.value / 2) {
          currentCityIndex.value++
          currentAnimatedOffset.value -= animatedViewHeight.value
        } else if (event.translationY > animatedViewHeight.value / 2) {
          currentCityIndex.value--
          currentAnimatedOffset.value += animatedViewHeight.value
        }

        animatedValue.value = withTiming(currentAnimatedOffset.value)
      }
    },
  })

  useEffect(() => {
    cities.forEach(async (city: any) => {
      await fetchWeatherData(city)
    })
  }, [])

  useAnimatedReaction(() => {
    return currentCityIndex.value
  }, (result, previous) => {
    if (result !== previous) {
      runOnJS(setCurrentCity)(cities[result].key as CityType)
    }
  }, [currentCityIndex])

  const imageAnimatedStyle = useAnimatedStyle(() => {
    return { transform: [{ translateY: circularImageSize * (animatedValue.value / (animatedViewHeight.value || 1)) }], }
  })

  const containerAnimatedStyle = useAnimatedStyle(() => {
    return { transform: [{ translateY: animatedValue.value }] }
  })

  return (
    <PanGestureHandler onGestureEvent={gestureHandler}>
      <Animated.View style={styles.Container}>

        <CustomImageBackground
          source={getCityInfo(currentCity)?.image}
          style={styles.HeaderImage}
          blurRadius={25}
        >
          <CustomScreenHeader onMenuPress={onMenuPress} />
        </CustomImageBackground>

        <CustomView style={styles.HeaderCircularImageContainer}>
          {
            cities.map(city => {
              return (
                <Animated.Image
                  key={city.key}
                  source={city.image}
                  style={[
                    styles.HeaderCircularImage,
                    imageAnimatedStyle
                  ]}
                />
              )
            })
          }

        </CustomView>

        <CustomView
          style={styles.BottomViewContainer}
          onLayout={event => { animatedViewHeight.value = event.nativeEvent.layout.height }}
        >
          {
            cities.map((city: any) =>
              (
                <Animated.View
                  key={city.key}
                  style={[styles.BottomViewSubContainer, containerAnimatedStyle]}
                >
                  <BottomView
                    city={city}
                    weatherData={WeatherData.weatherData[city.key]?.[0]}
                  />
                </Animated.View>
              )
            )
          }
        </CustomView>

      </Animated.View>
    </PanGestureHandler>
  )
}

export const HomeScreen = memo(HomeScreenComponent)
