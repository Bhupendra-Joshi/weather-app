import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { useDispatch } from 'react-redux'

import { StoreRef } from '@store'
import { HomeScreen, WeatherListScreen } from '@screens'

import { styles } from './app-navigator.styles'

const Drawer = createDrawerNavigator()

export const RootNavigation = () => {

  StoreRef.dispatch = useDispatch()

  return (
    <>
      <SafeAreaView style={styles.Container}>
        <StatusBar barStyle={'light-content'}/>
        <Drawer.Navigator
          screenOptions={{
            drawerStyle: { width: '100%' },
            headerShown: false,
            drawerType: 'front'
          }}
          drawerContent={() => <WeatherListScreen/>}
        >
          <Drawer.Screen name={'HomeScreen'} component={HomeScreen} />
        </Drawer.Navigator>
      </SafeAreaView>
    </>
  )

}
