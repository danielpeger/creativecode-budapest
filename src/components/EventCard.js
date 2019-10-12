import React from "react"
import Image from "./Image"
import ClockIcon from "./icons/clock.svg"
import PinIcon from "./icons/pin.svg"
import { Link } from "gatsby"

const EventCard = ({ path, poster, title, speakers, date, location }) => {
  return (
    <Link to={path}>
      {poster && <Image src={poster} width={300} />}
      <p>{title}</p>
      {speakers && (
        <small>
          {speakers.map(({ speaker }) => {
            return <span>{speaker.name}, </span>
          })}
        </small>
      )}
      <ul>
        <li>
          <ClockIcon />
          {date}
        </li>
        <li>
          <PinIcon />
          {location}
        </li>
      </ul>
    </Link>
  )
}

export default EventCard
