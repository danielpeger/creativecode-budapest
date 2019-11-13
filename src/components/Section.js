import React from "react"
import styled, { css } from "styled-components"
import media, { breakpoints } from "../utils/media"

const SectionElement = styled.section`
  display: grid;
  place-items: start;

  ${media.xSmallOnly`
    grid-template-columns: repeat(4, 1fr);
  `}
  ${media.smallDown`
    grid-column-gap: var(--m);
    margin: 0 var(--l) var(--xxl) var(--l);
  `}
  ${media.smallOnly`
    grid-template-columns: repeat(6, 1fr);
  `}
  ${media.mediumOnly`
    grid-template-columns: repeat(8, 1fr);
    margin: 0 var(--l) var(--xxxl) var(--l);
  `}
  ${media.mediumUp`
    grid-column-gap: var(--l);
  `}
  ${media.largeUp`
    grid-template-columns: repeat(12, 1fr);
    margin: 0 auto var(--xxxl) auto;
  `}
  ${media.largeOnly`
    max-width: calc(${breakpoints.largeMin}px - (2 * var(--l)));
  `}
  ${media.xLargeOnly`
    max-width: calc(1400px - (2 * var(--l)));
  `}

  ${props =>
    !props.noseparator &&
    css`
      border-top: var(--xxs) solid var(--white);
      padding-top: var(--m);
    `}

    > h2, > p {
      grid-column: 1 / -1;
    }
`

const Section = ({ className, heading, subheading, noseparator, children }) => {
  return (
    <SectionElement noseparator={noseparator} className={className}>
      {heading && <h2>{heading}</h2>}
      {subheading && <p>{subheading}</p>}
      {children}
    </SectionElement>
  )
}

export default Section
