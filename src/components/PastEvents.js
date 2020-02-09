import React from "react"
import styled from "styled-components"
import media from "../utils/media"
import EventCard, { LinkElement } from "./EventCard"
import Section from "../components/Section"

const PastEventsSection = styled(Section)`
  ${LinkElement} {
    grid-column: span 2;
  }

  ${media.mediumDown`
    ${LinkElement} {
      h4 {
        font-size: var(--m);
        line-height: var(--l);
      }
    }
  `}

  ${media.smallDown`
    place-items: stretch;
    overflow-x: scroll;
    margin-left: - var(--l);
    margin-right: - var(--l);
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  
    &::before,
    &::after {
      content: '';
    }
  `}

  ${media.smallOnly`
    margin-bottom: var(--7xl);
    grid-template-columns: calc(var(--l) - var(--m)) repeat(${props => props.cards * 2}, calc((100vw - ((var(--l) * 2) + (var(--m) * 5))) / 6)) calc(var(--l) - var(--m));
  `}

  ${media.xSmallOnly`
    margin-bottom: var(--xxl);
    grid-template-columns: calc(var(--l) - var(--m)) repeat(${props => props.cards * 2}, calc((100vw - ((var(--l) * 2) + (var(--m) * 5))) / 4)) calc(var(--l) - var(--m));
  `}
`;

const PastEvents = ({events}) => {
  return (
			<>
        <Section heading="Past events" css="margin-bottom: var(--l);"></Section>
        <PastEventsSection noseparator cards={events.length}>
          {events.map(({ node }, index) => {
            const { poster, title, date, location, speakers, posterGravity } = node.frontmatter
            return (
              <EventCard
                key={node.parent.id}
                path={`/${node.parent.name}`}
                poster={poster}
                title={title}
                date={date}
                location={location}
                speakers={speakers}
                posterGravity={posterGravity ? posterGravity : "west"}
              />
            )
          })}
        </PastEventsSection>
      </>
  )
}

export default PastEvents