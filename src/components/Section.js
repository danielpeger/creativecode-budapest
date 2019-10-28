import React from "react"
import styled, { css } from "styled-components"
import media from "../utils/media"

const SectionElement = styled.section`
  display: grid;
  ${media.smallDown`
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: var(--size-m);
  `}
  ${media.mediumDown`
    margin: 0 var(--size-xl);
  `}
  ${media.mediumOnly`grid-template-columns: repeat(6, 1fr);`}
  ${media.mediumUp`grid-column-gap: var(--size-l);`}
  ${media.largeUp`
    grid-template-columns: repeat(12, 1fr);
    max-width: calc(var(--size-xxxl) * 14);
    margin: 0 auto var(--size-xxxl) auto;
  `}

  ${props =>
    !props.noseparator &&
    css`
      border-top: 4px solid var(--white);
    `}
`

const Section = ({ heading, subheading, noseparator, children }) => {
  return (
    <SectionElement noseparator={noseparator}>
      {heading && <h2>{heading}</h2>}
      {subheading && <p>{subheading}</p>}
      {children}
    </SectionElement>
  )
}

export default Section
