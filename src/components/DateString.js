import TimeAgo from "javascript-time-ago"
import en from "javascript-time-ago/locale/en"

const DateString = ({ date, format }) => {
  if (format === "short") {
    if(new Date(date).getYear() === new Date().getYear()) {
      return new Date(date).toLocaleDateString([], {
        month: "short",
        day: "numeric",
      })
    } else {
      return new Date(date).toLocaleDateString([], {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    }
  } else {
    TimeAgo.addLocale(en)
    const timeAgo = new TimeAgo("en-US")
    const absoluteDateString = new Date(date).toLocaleTimeString([], {
      weekday: "long",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
    return `${absoluteDateString} (${timeAgo.format(new Date(date))})`
  }
}

export default DateString
