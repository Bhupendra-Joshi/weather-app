module.exports = api => {
  api.cache(false)

  const aliases = {
    '@app': './app',
    '@components': './app/components',
    '@config': './app/config',
    '@store': './app/store',
    '@navigation': './app/navigation',
    '@services': './app/services',
    '@screens': './app/screens',
    '@theme': './app/theme',
    '@utils': './app/utils',
    '@translate': './app/i18n',
    '@constants': './app/constants',
    '@types': './app/types',
    '@assets': './app/assets',
  }

  const plugins = [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-optional-catch-binding'],
    ['module-resolver', { alias: aliases }],
    'react-native-reanimated/plugin'
  ]

  return {
    presets: ['module:metro-react-native-babel-preset'],
    env: {
      production: {
        plugins: ['transform-remove-console']
      }
    },
    plugins
  }
}
