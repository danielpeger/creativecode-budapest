import React from "react"
import styled from "styled-components"
import media from "../utils/media"
import EventCard, {LinkElement} from "./EventCard"
import Section from "../components/Section"

const PastEventsSection = styled(Section)`
  grid-auto-rows: 1fr;
  place-items: stretch;

  ${media.mediumUp`
    ${LinkElement} {
      grid-column: span 2;
    }
  `}
`;

const PastEvents = ({events}) => {
  return (
			<>
        <Section heading="Past events" css="margin-bottom: var(--m);"></Section>
        <PastEventsSection noseparator>
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
      </>
  )
}

export default PastEvents