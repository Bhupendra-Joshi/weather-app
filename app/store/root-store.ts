import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { useSelector } from 'react-redux'
import thunk from 'redux-thunk'

import { weatherDataReducer } from './weather-data'
import { appConfigReducer } from './app-config'

const reducers = {
  WorkerProfile: weatherDataReducer,
  AppConfig: appConfigReducer,
}

const rootStore = combineReducers(reducers)
const middleware = applyMiddleware(thunk)

export const configureStore = () => createStore(rootStore, compose(middleware))

export const useRootStore = () => useSelector((state: ObjectType) => state)
export const useWeatherDataStore = () => useSelector((state: ObjectType) => state.WorkerProfile)
export const useAppConfigStore = () => useSelector((state: ObjectType) => state.AppConfig)

export * from 'react-redux'
