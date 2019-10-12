import React from "react"

const EventHeader = ({
  title,
  date,
  location,
  googleMapsLink,
  facebookEventLink,
  meetupEventLink,
  description,
}) => {
  return (
    <React.Fragment>
      <h3>{new Date(date) > new Date() ? "Upcoming event" : "Past Event"}</h3>
      <h1>{title}</h1>
      <ul>
        <li>{date}</li>
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
    </React.Fragment>
  )
}

export default EventHeader
