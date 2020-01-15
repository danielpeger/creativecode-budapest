import React from "react"
import styled from "styled-components"
import Image from "./Image"
import ClockIcon from "./icons/clock.svg"
import PinIcon from "./icons/pin.svg"
import { Link } from "gatsby"
import DateString from "./DateString"

export const LinkElement = styled(Link)`
  text-decoration: none;
  padding: var(--3xs);
  border: 2px solid var(--white);
  box-sizing: content-box;

  &:visited {
    background: var(--gray);
    border-color: var(--gray);
  }

  &:hover {
    background: var(--lightgray);
    border-color: var(--lightgray);
    color: var(--black);

    picture {
      filter: grayscale(50%);
    }
  }

  &:active {
    background: var(--gray);
    border-color: var(--gray);
    color: var(--black);
    picture {
      filter: grayscale();
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
    <Image src={poster} width={340} aspectRatio={1} customTransformations={`c_fill,g_${posterGravity}`} />
    <H4>{title}</H4>
    {/* {speakers && (
      <small>
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
      </small>
    )} */}
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
