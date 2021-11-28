import { config } from '@config'

export const formatPhone = (phone:string, separator = ' ') => {
  if (phone) {
    const formattedNumber = phone.match(/.{1,3}/g)?.join(separator).split(separator)
    if (formattedNumber?.length) {
      formattedNumber[0] = `(${formattedNumber[0]})`
      return formattedNumber.join(separator)
    }
  }

  return phone
}

/**
 *
 * @param params
 */
export const getQueryString = (params: ObjectType) => {
  let queryString = ''

  Object.keys(params).forEach((key:string) => queryString += key + '=' + params[key] + '&')

  return queryString.slice(0, -1)
}

/**
 *
 * @param icon
 */
export const getIconUrl = (icon: string) => {
  return icon ? `${config.ICON_BASE_URL}${icon}@2x.png` : ''
}
