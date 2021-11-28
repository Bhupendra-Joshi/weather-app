import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'

import { configureStore } from '@store'
import { RootNavigation } from '@navigation'
import { CustomSafeAreaAssets } from '@components'

const store = configureStore()

export const App = () => {

  return (
      <Provider store={store}>
        <CustomSafeAreaAssets.SafeAreaProvider
            initialSafeAreaInsets={
              CustomSafeAreaAssets.initialWindowMetrics?.insets ||
              CustomSafeAreaAssets.fallbackWindowMetrics
            }>
          <NavigationContainer>
            <RootNavigation/>
          </NavigationContainer>
        </CustomSafeAreaAssets.SafeAreaProvider>
      </Provider>
  )
}
