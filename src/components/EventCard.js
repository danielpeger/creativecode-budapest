import React from "react"
import styled from "styled-components"
import Image from "./Image"
import ClockIcon from "./icons/clock.svg"
import PinIcon from "./icons/pin.svg"
import { Link } from "gatsby"
import DateString from "./DateString"

export const LinkElement = styled(Link)`
  text-decoration: none;
  box-sizing: content-box;

  &:hover {
    picture {
      filter: grayscale();
    }
  }

  &:active {
    picture {
      filter: brightness(70%) grayscale();
    }
  }
`;

const Ul = styled.ul`
  list-style-type: none;
  display: flex;
  padding: 0;
  margin: 0;
  flex-wrap: wrap;
  overflow: hidden;


  li {
    font-size: var(--s);
    line-height: var(--l);
    display: flex;
    align-items: flex-start;
    margin-right: var(--xs);
    margin-bottom: 0;
    flex-shrink: 0;

    span {
      text-overflow: ellipsis;
      overflow: hidden;
    }

    svg{
      flex-shrink: 0;
      flex-grow: 0;
      width: var(--m);
      height: var(--m);
    }
  }

  svg {
    margin-right: 4px;
  }
`;

const H4 = styled.h4`
  margin-top: var(--xxs);
  margin-bottom: var(--5xs);
  line-height: var(--m);
  font-size: var(--s);
`;

const EventCard = React.forwardRef(({ path, poster, posterGravity = "west", title, speakers, date, location, className }, ref) => (
  <LinkElement to={path} className={className} ref={ref}>
    <Image 
      src={poster}
      width={340}
      aspectRatio={1}
      customTransformations={`c_fill,g_${posterGravity}`}
      disableLazyLoading
    />
    <H4>{title}</H4>
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
));

export default EventCard
