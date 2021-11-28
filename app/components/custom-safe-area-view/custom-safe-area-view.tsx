import React from 'react'
import { useSafeAreaInsets, SafeAreaView, initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context'
import { CustomSafeAreaViewProps } from './custom-safe-area-view.props'

export const CustomSafeAreaView = (props: CustomSafeAreaViewProps) => {
  return (
    <SafeAreaView {...props}>
      {props.children}
    </SafeAreaView>
  )
}

export const CustomSafeAreaAssets = {
  useSafeAreaInsets,
  initialWindowMetrics,
  SafeAreaProvider,
  fallbackWindowMetrics: { bottom: 100, left: 0, right: 0, top: 0 }
}
