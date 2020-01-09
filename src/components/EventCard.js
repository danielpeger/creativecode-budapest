import React from "react"
import styled from "styled-components"
import media from "../utils/media"
import Image from "./Image"
import ClockIcon from "./icons/clock.svg"
import PinIcon from "./icons/pin.svg"
import { Link } from "gatsby"
import DateString from "./DateString"
// import truncateString from "../utils/truncateString"

const LinkElement = styled(Link)`
  text-decoration: none;
  grid-column: span 2;
`;

const Ul = styled.ul`
  list-style-type: none;
  display: flex;
  padding: 0;
  margin: 0;
  flex-wrap: wrap;
  overflow: hidden;
  font-size: var(--s);
  line-height: var(--m);

  li {
    line-height: 16px;
    display: flex;
    align-items: flex-start;
    margin-right: var(--s);
    flex-shrink: 0;

    span {
      text-overflow: ellipsis;
      overflow: hidden;
    }

    svg{
      flex-shrink: 0;
      flex-grow: 0;
      width: 16px;
      height: 16px;
    }
  }

  svg {
    margin-right: var(--xxs);
    margin-top: -2px;
  }
`;

const H3 = styled.h3`
  margin-top: var(--m);
  margin-bottom: var(--xxs);
`;

const SpeakerLine = styled.p`
  margin-bottom: var(--xs);
  font-size: var(--s);
  line-height: var(--m);
`;

const EventCard = ({ path, poster, title, speakers, date, location }) => {
  return (
    <LinkElement to={path}>
      <Image src={poster} width={340} aspectRatio={2/3} customTransformations={`c_fill`} />
      <H3>{title}</H3>
      {speakers && (
        <SpeakerLine>
          with&nbsp;
          {speakers.map((speaker, index) => {
            if (index === 0) {
              return <em key={index}>{speaker.name}</em>
            } else if (index === speakers.length - 1) {
              return <React.Fragment key={index}> and <em>{speaker.name}</em></React.Fragment>
            } else {
              return <em key={index}>, {speaker.name}</em>
            }
          })}
        </SpeakerLine>
      )}
      <Ul>
        {date && (
          <li key="date">
            <ClockIcon />
            <DateString date={date} format={"short"} />
          </li>
        )}
        {location && (
          <li key="location">
            <PinIcon />
            <span>{location}</span>
          </li>
        )}
      </Ul>
    </LinkElement>
  )
}

export default EventCard
