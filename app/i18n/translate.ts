import i18n, { TranslateOptions } from 'i18n-js'

const en = require('./en')

i18n.fallbacks = true
i18n.translations = { en }

// const fallback = { locale: 'en', languageTag: 'en', isRTL: false }

// Currently making locale to 'en'. Add packages like 'expo-local-authentication' to translate to other locales.
i18n.locale = 'en'

/**
 * Translates text.
 *
 * @param key The i18n key.
 * @param options
 */
export const translate = (key: string, options?: TranslateOptions) : string => {
  return key ? i18n.t(key, options) : ''
}
