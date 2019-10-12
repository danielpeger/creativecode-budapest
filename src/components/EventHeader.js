import React from "react"
import DateString from "./DateString"
import { Link } from "gatsby"
import Speaker from "./Speaker"

const EventHeader = ({
  title,
  path,
  date,
  location,
  googleMapsLink,
  facebookEventLink,
  meetupEventLink,
  description,
  speakers,
}) => {
  return (
    <React.Fragment>
      <h3>{new Date(date) > new Date() ? "Upcoming event" : "Past Event"}</h3>
      <h1>
        <Link to={path}>{title}</Link>
      </h1>
      <ul>
        <li>
          <DateString date={date} />
        </li>
        <li>
          <a href={googleMapsLink}>{location}</a>
        </li>
        <li>
          <a href={meetupEventLink}>Meetup event</a>
        </li>
        <li>
          <a href={facebookEventLink}>Facebook event</a>
        </li>
      </ul>
      <div dangerouslySetInnerHTML={{ __html: description }}></div>
      {speakers &&
        speakers.map((speaker, index) => (
          <Speaker speaker={speaker} key={index} />
        ))}
    </React.Fragment>
  )
}

export default EventHeader
