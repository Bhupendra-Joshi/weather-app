import dayjs from 'dayjs'
import 'dayjs/locale/en-ca'

dayjs.locale('en-ca')

export const WEEK_DAYS = [
  { long: 'Sunday', short: 'Sun' },
  { long: 'Monday', short: 'Mon' },
  { long: 'Tuesday', short: 'Tue' },
  { long: 'Wednesday', short: 'Wed' },
  { long: 'Thursday', short: 'Thu' },
  { long: 'Friday', short: 'Fri' },
  { long: 'Saturday', short: 'Sat' },
]

export const DATE_FORMAT = {
  'D_MMM_hh_mm_A': 'D.MMM | hh:mm A',
  'hh_mm': 'hh:mm A',
}

export const formatDate = (inputDate:string|number, format = DATE_FORMAT.D_MMM_hh_mm_A) => {
  return dayjs(inputDate).format(format)
}

export const formatDateRange = (startDateTime:string, endDateTime:string) => {
  const start = dayjs(startDateTime)
  const end = dayjs(endDateTime)

  const formattedStartDate = formatDate(startDateTime).toUpperCase()
  const formattedEndDate = start.day() === end.day()
    ? formatDate(endDateTime, DATE_FORMAT.hh_mm).toUpperCase()
    : formatDate(endDateTime).toUpperCase()

  return `${formattedStartDate} - ${formattedEndDate} PDT`
}

export const getDayFromTimestamp = (timestamp:number, isLong = false) => {
  const weekDay = new Date(timestamp).getDay()

  if (isLong) {
    return WEEK_DAYS[weekDay].long
  } else {
    return WEEK_DAYS[weekDay].short
  }
}

export const getCurrentTimeInFormat = (format = DATE_FORMAT.D_MMM_hh_mm_A) => {
  return formatDate(Date.now(), format)
}
