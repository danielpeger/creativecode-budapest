import React from "react"
import styled from "styled-components"
import media from "../utils/media"
import Section from "./Section"
import DateString from "./DateString"
import Speaker from "./Speaker"
import FacebookIcon from "../components/icons/facebook.svg"
import MeetupIcon from "../components/icons/meetup.svg"
import PinIcon from "../components/icons/pin.svg"
import ClockIcon from "../components/icons/clock.svg"

const EventHeaderElement = styled(Section)`
  padding-top: var(--size-xl);
`

const Label = styled.h3`
  font-weight: 400;
  text-transform: uppercase;
`

const EventInfo = styled.aside`
  ${media.xSmallOnly`grid-column: span 4;`}
  ${media.smallDown`margin-bottom: var(--size-xl);`}
  ${media.smallOnly`grid-column: span 5;`}
  ${media.mediumOnly`grid-column: span 3;`}
  ${media.largeUp`grid-column: span 5;`}
`

const InfoList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-bottom: var(--size-l);

  li {
    display: flex;

    &:not(:last-child) {
      margin-bottom: var(--size-xxs);
    }

    &::selection {
      background: var(--highlight);
    }

    svg {
      margin-right: var(--size-xxs);
    }
  }
`

const SpeakerList = styled.aside`
  display: grid;
  place-items: start;

  ${media.xSmallOnly`grid-column: span 4;`}
  ${media.smallOnly`grid-column: span 5;`}
  ${media.mediumOnly`grid-column: 5 / -1;`}
  ${media.largeUp`grid-column: 7 / -1;`}

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
      <EventInfo>
        <Label>
          {new Date(date) > new Date() ? "Upcoming event" : "Past Event"}
        </Label>
        <h2>{title}</h2>
        <InfoList>
          <li>
            <ClockIcon />
            <DateString date={date} />
          </li>
          <li>
            <PinIcon />
            <a href={googleMapsLink}>{location}</a>
          </li>
          <li>
            <MeetupIcon />
            <a href={meetupEventLink}>Meetup</a>
          </li>
          <li>
            <FacebookIcon />
            <a href={facebookEventLink}>Facebook</a>
          </li>
        </InfoList>
        <div dangerouslySetInnerHTML={{ __html: description }}></div>
      </EventInfo>
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
