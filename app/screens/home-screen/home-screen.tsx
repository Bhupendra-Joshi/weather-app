import React, { memo, useEffect, useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { PanGestureHandler } from 'react-native-gesture-handler'
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedReaction,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'

import { CustomScreenHeader, CustomView, CustomImageBackground, CustomText } from '@components'
import { fetchWeatherData } from '@store'
import { cities, CityType, getCityInfo } from '@constants'
import { Device } from '@utils'

import { CurrentWeatherView } from './components/current-weather-view'
import { ForecastView } from './components/forecast-view'

import { circularImageSize, styles, tabSliderOffset } from './home-screen.styles'

const Tabs = [
  {
    key: 'CurrentWeatherView',
    Component: CurrentWeatherView
  },
  {
    key: 'ForecastView',
    Component: ForecastView
  }
]

const HomeScreenComponent = () => {
  const navigation:{ openDrawer:()=>void } = useNavigation()

  const [currentCity, setCurrentCity] = useState<CityType>('tokyo')

  const verticalAnimateValue = useSharedValue(0)
  const horizontalAnimateValue = useSharedValue(0)
  const animatedViewHeight = useSharedValue(0)
  const currentCityIndex = useSharedValue(0)
  const currentTabIndex = useSharedValue(0)
  const currentVerticalAnimatedOffset = useSharedValue(0)
  const currentHorizontalAnimatedOffset = useSharedValue(0)

  const onMenuPress = useRef(() => {
    navigation.openDrawer()
  }).current

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (event, context: any) => {
      context.isHorizontal = Math.abs(event.translationY) < Math.abs(event.translationX)
    },
    onActive: (event, context: any) => {
      if (context.isHorizontal) {
        if (event.translationX > 0 && currentTabIndex.value === 0) {
          context.ignore = true
          return
        } else if (event.translationX < 0 && currentTabIndex.value === (Tabs.length - 1)) {
          context.ignore = true
          return
        }
        context.ignore = false
        horizontalAnimateValue.value = currentHorizontalAnimatedOffset.value + event.translationX

      } else {

        if (event.translationY > 0 && currentCityIndex.value === 0) {
          context.ignore = true
          return
        } else if (event.translationY < 0 && currentCityIndex.value === (cities.length - 1)) {
          context.ignore = true
          return
        }
        context.ignore = false
        verticalAnimateValue.value = currentVerticalAnimatedOffset.value + event.translationY / 2

      }
    },

    onEnd: (event, context: any) => {
      if (!context.ignore) {
        if (context.isHorizontal) {

          if (event.translationX < -Device.screenWidth / 2) {
            currentHorizontalAnimatedOffset.value -= Device.screenWidth
            currentTabIndex.value++
          } else if (event.translationX > Device.screenWidth / 2) {
            currentHorizontalAnimatedOffset.value += Device.screenWidth
            currentTabIndex.value--
          }

          horizontalAnimateValue.value = withTiming(currentHorizontalAnimatedOffset.value)

        } else {

          if (event.translationY < -animatedViewHeight.value / 2) {
            currentCityIndex.value++
            currentVerticalAnimatedOffset.value -= animatedViewHeight.value
          } else if (event.translationY > animatedViewHeight.value / 2) {
            currentCityIndex.value--
            currentVerticalAnimatedOffset.value += animatedViewHeight.value
          }

          verticalAnimateValue.value = withTiming(currentVerticalAnimatedOffset.value)

        }
      }

      context.isHorizontal = false

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
    return { transform: [{ translateY: circularImageSize * (verticalAnimateValue.value / (animatedViewHeight.value || 1)) }], }
  })

  const verticalAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateY: verticalAnimateValue.value },
      ]
    }
  })

  const horizontalAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: horizontalAnimateValue.value }
      ]
    }
  })

  const tabIndicatorAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: -tabSliderOffset * (horizontalAnimateValue.value / Device.screenWidth) }
      ]
    }
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
                  style={[styles.HeaderCircularImage, imageAnimatedStyle]}
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
                <Animated.View key={city.key} style={[styles.BottomViewVerticalContainer, verticalAnimatedStyle]}>
                  <CustomText style={styles.Title}>{city.title}</CustomText>
                    <CustomView style={styles.TabIndicatorContainer}>
                      {
                        Tabs.map(item => <CustomView key={item.key} style={styles.TabIndicator} />)
                      }
                      <Animated.View style={[styles.TabSlider, tabIndicatorAnimatedStyle]}/>

                    </CustomView>
                    <Animated.View style={[styles.BottomViewHorizontalContainer, horizontalAnimatedStyle]}>
                    {
                      Tabs.map(({ Component, key }) => <Component key={key} city={city}/>)
                    }
                  </Animated.View>
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
