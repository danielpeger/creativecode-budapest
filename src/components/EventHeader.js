import React from "react"
import styled from "styled-components"
import media from "../utils/media"
import { Label } from "./GlobalStyle"
import Section from "./Section"
import DateString from "./DateString"
import Speaker from "./Speaker"
import FacebookIcon from "../components/icons/facebook.svg"
import MeetupIcon from "../components/icons/meetup.svg"
import PinIcon from "../components/icons/pin.svg"
import ClockIcon from "../components/icons/clock.svg"

const EventHeaderSection = styled(Section)`
  padding-top: var(--xxl);
  ${media.smallDown`grid-row-gap: var(--3xl);`}

  h2, ${Label} {
    margin-bottom: var(--m);
  }
`;

const EventInfo = styled.aside`
  width: 100%;
  ${media.xSmallOnly`grid-column: span 4;`}
  ${media.smallOnly`grid-column: span 6;`}
  ${media.mediumOnly`grid-column: span 4;`}
  ${media.largeUp`grid-column: span 5;`}
`

const InfoList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-bottom: var(--l);

  li {
    display: flex;
    line-height: 24px;
    align-items: flex-start;

    &:not(:last-child) {
      margin-bottom: var(--3xs);
    }
  }

  svg {
      margin-right: var(--5xs);
      flex-shrink: 0;
      flex-grow: 0;
      margin-top: -1px;
    }
`

const StyledClockIcon = styled(ClockIcon)`
  && { margin-top: -2px; }
`;

const StyledMeetupIcon = styled(MeetupIcon)`
  && { margin-top: 1px; }
`;

const Description = styled.div`
  /* p, a, li {
    line-height: var(--l);
    font-size: var(--s);
  } */
`;

const SpeakerList = styled.aside`
  display: grid;
  place-items: start;
  width: 100%;
  grid-gap: var(--l);

  ${media.xSmallOnly`grid-column: span 4;`}
  ${media.smallOnly`grid-column: span 6;`}
  ${media.mediumOnly`grid-column: 5 / -1;`}
  ${media.largeUp`grid-column: 7 / -1;`}

  ${media.xSmallOnly`
    grid-template-columns: repeat(4, 1fr);
  `}
  ${media.smallOnly`
    grid-template-columns: repeat(5, 1fr);
  `}
  ${media.mediumOnly`
    grid-template-columns: repeat(4, 1fr);
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
  className
}) => {
  return (
    <EventHeaderSection className={className} >
      <EventInfo>
        <Label>
          {new Date(date) > new Date() ? "Upcoming event" : "Past Event"}
        </Label>
        <h2>{title}</h2>
        <InfoList>
          <li>
            <StyledClockIcon />
            <span><DateString date={date} /></span>
          </li>
          <li>
            <PinIcon />
            <a href={googleMapsLink}>{location}</a>
          </li>
          <li>
            <StyledMeetupIcon />
            <a href={meetupEventLink}>Meetup</a>
          </li>
          <li>
            <FacebookIcon />
            <a href={facebookEventLink}>Facebook</a>
          </li>
        </InfoList>
        <Description dangerouslySetInnerHTML={{ __html: description }}></Description>
      </EventInfo>
      <SpeakerList>
        {speakers &&
          speakers.map((speaker, index) => (
            <Speaker speaker={speaker} key={index} />
          ))}
      </SpeakerList>
    </EventHeaderSection>
  )
}

export default EventHeader
