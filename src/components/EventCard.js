import React from "react"
import styled from "styled-components"
import media from "../utils/media"
import Image from "./Image"
import ClockIcon from "./icons/clock.svg"
import PinIcon from "./icons/pin.svg"
import { Link } from "gatsby"
import DateString from "./DateString"

const LinkElement = styled(Link)`
  
  ${media.largeUp`
    grid-column: span 3;
  `}
  ${media.mediumDown`
    grid-column: span 2;
  `}
  text-decoration: none;
`;

const Ul = styled.ul`
  list-style-type: none;
  display: flex;
  padding: 0;

  li {
    line-height: 24px;
    display: flex;
    align-items: flex-start;
  }

  svg {
    margin-right: var(--xxs);
    margin-top: -2px;
  }
`;

const H3 = styled.h3`
  margin-top: var(--m);
  margin-bottom: var(--xs);
`;

const EventCard = ({ path, poster, title, speakers, date, location }) => {
  return (
    <LinkElement to={path}>
      <Image src={poster} width={600} aspectRatio={2/3} customTransformations={`c_fill,g_west`} />
      <H3>{title}</H3>
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
      <Ul>
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
      </Ul>
    </LinkElement>
  )
}

export default EventCard
