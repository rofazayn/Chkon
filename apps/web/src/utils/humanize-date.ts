import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

function humanizeDate(date: any) {
  const createdAt = dayjs(date)
  return createdAt.fromNow()
}

export default humanizeDate
