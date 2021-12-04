import Tron from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'

interface ReactotronConfig {
  /** The name of the app. */
  name?: string
  /** The host to connect to: default 'localhost'. */
  host?: string
}

/**
 * The default Reactotron configuration.
 */
export const DEFAULT_REACTOTRON_CONFIG: ReactotronConfig = {
  name: require('../../../package.json').name,
  host: 'localhost'
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
Tron
  .configure(DEFAULT_REACTOTRON_CONFIG)
  .setAsyncStorageHandler(AsyncStorage)
  .useReactNative()
  .use(reactotronRedux())
  .connect()
// in dev, we attach Reactotron, in prod we attach a interface-compatible mock.
