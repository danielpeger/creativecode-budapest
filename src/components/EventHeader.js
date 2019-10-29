import React from "react"
import styled from "styled-components"
import media from "../utils/media"
import Section from "./Section"
import DateString from "./DateString"
import { Link } from "gatsby"
import Speaker from "./Speaker"

const EventHeaderElement = styled(Section)`
  padding-top: var(--size-l);
  aside {
    ${media.xSmallOnly`grid-column: span 4;`}
    ${media.smallOnly`grid-column: span 5;`}
    ${media.mediumOnly`grid-column: span 4;`}
    ${media.largeUp`grid-column: span 6;`}
  }
`

const SpeakerList = styled.aside`
  display: grid;
  place-items: start;

  ${media.xSmallOnly`
    grid-template-columns: repeat(4, 1fr);
  `}
  ${media.smallDown`
    grid-column-gap: var(--size-m);
  `}
  ${media.smallOnly`
    grid-template-columns: repeat(5, 1fr);
  `}
  ${media.mediumOnly`
    grid-template-columns: repeat(4, 1fr);
  `}
  ${media.mediumUp`
    grid-column-gap: var(--size-l);
  `}
  ${media.largeUp`
    grid-template-columns: repeat(6, 1fr);
  `}
`

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
    <EventHeaderElement>
      <aside>
        <h3>{new Date(date) > new Date() ? "Upcoming event" : "Past Event"}</h3>
        <h2>{title}</h2>
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
      </aside>
      <SpeakerList>
        {speakers &&
          speakers.map((speaker, index) => (
            <Speaker speaker={speaker} key={index} />
          ))}
      </SpeakerList>
    </EventHeaderElement>
  )
}

export default EventHeader
