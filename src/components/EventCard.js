import React from "react"
import Image from "./Image"
import FacebookIcon from "./icons/facebook.svg"
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
          <FacebookIcon />
          {date}
        </li>
        <li>
          <FacebookIcon />
          {location}
        </li>
      </ul>
    </Link>
  )
}

export default EventCard
