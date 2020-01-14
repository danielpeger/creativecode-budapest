import React, { useRef, useEffect } from "react"
import styled from "styled-components"
import media from "../utils/media"
import EventCard, {LinkElement} from "./EventCard"
import Section from "../components/Section"

const PastEventsSection = styled(Section)`
  ${media.mediumUp`
    grid-auto-flow: dense;
    grid-auto-rows: var(--5xs);
    grid-row-gap: var(--5xs);
  
    h2 {
      grid-row: span 5;
    }

    ${LinkElement} {
      grid-column: span 2;
    }
  `}



`;

const PastEvents = ({events}) => {
  const GridRef = useRef(null);
  useEffect(() => {
    const rowHeight = parseInt(window.getComputedStyle(GridRef.current).getPropertyValue('grid-auto-rows'));
    const rowGap = parseInt(window.getComputedStyle(GridRef.current).getPropertyValue('grid-row-gap'));
    for (let i = 1; i < GridRef.current.children.length; i++) {
      const element = GridRef.current.children[i];
      console.log(element.getBoundingClientRect().height)
      const rowSpan = Math.ceil((element.getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));
      element.style.gridRowEnd = "span "+rowSpan;
    }
  }, [GridRef]);
  return (
			<PastEventsSection ref={GridRef}>
        <h2>Past events</h2>
        {events.map(({ node }, index) => {
          const { poster, title, date, location, speakers } = node.frontmatter
          return (
            <EventCard
              key={node.parent.id}
              path={`/${node.parent.name}`}
              poster={poster}
              title={title}
              date={date}
              location={location}
              speakers={speakers}
            />
          )
        })}
      </PastEventsSection>
  )
}

export default PastEvents