import React from "react"
import styled, { css } from "styled-components"
import media, { breakpoints } from "../utils/media"

const SectionElement = styled.section`
  display: grid;
  place-items: start;
  grid-gap: var(--m);

  ${media.xSmallOnly`
    grid-template-columns: repeat(4, 1fr);
  `}
  ${media.smallDown`
    margin: 0 var(--l) var(--7xl) var(--l);
  `}
  ${media.mediumDown`
    margin: 0 var(--l) var(--8xl) var(--l);
  `}
  ${media.smallOnly`
    grid-template-columns: repeat(6, 1fr);
  `}
  ${media.mediumOnly`
    grid-template-columns: repeat(8, 1fr);
  `}
  ${media.largeUp`
    grid-template-columns: repeat(12, 1fr);
    margin: 0 auto var(--8xl) auto;
  `}
  ${media.largeOnly`
    max-width: calc(${breakpoints.largeMin}px - (2 * var(--l)));
  `}
  ${media.xLargeOnly`
    max-width: calc(1400px - (2 * var(--l)));
  `}

  ${props => !props.noseparator && css`
    border-top: 4px solid var(--white);
    padding-top: var(--xl);
  `}

  > h2, > p {
    grid-column: 1 / -1;
    margin-bottom: 0;
  }
`
const Section = React.forwardRef(({ className, heading, subheading, noseparator, children }, ref) => (
  <SectionElement noseparator={noseparator} className={className} ref={ref}>
    {heading && <h2>{heading}</h2>}
    {subheading && <p>{subheading}</p>}
    {children}
  </SectionElement>
));

export default Section
