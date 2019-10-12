import React from "react"
import Image from "./Image"
import ClockIcon from "./icons/clock.svg"
import PinIcon from "./icons/pin.svg"
import { Link } from "gatsby"
import DateString from "./DateString"

const EventCard = ({ path, poster, title, speakers, date, location }) => {
  return (
    <Link to={path}>
      {poster && <Image src={poster} width={300} />}
      <h3>{title}</h3>
      {speakers && (
        <small>
          with&nbsp;
          {speakers.map((speaker, index) => {
            if (index === 0) {
              return speaker.name
            } else if (index === speakers.length - 1) {
              return ` and ${speaker.name}`
            } else {
              return `, ${speaker.name}`
            }
          })}
        </small>
      )}
      <ul>
        {date && (
          <li>
            <ClockIcon />
            <DateString date={date} format={"short"} />
          </li>
        )}
        {location && (
          <li>
            <PinIcon />
            {location}
          </li>
        )}
      </ul>
    </Link>
  )
}

export default EventCard
