import React from "react"
import styled from "styled-components"

const SectionElement = styled.section`
  border-top: 4px solid var(--white);
`

const Section = ({ heading, subheading, children }) => {
  return (
    <SectionElement>
      {heading && <h2>{heading}</h2>}
      {subheading && <p>{subheading}</p>}
      {children}
    </SectionElement>
  )
}

export default Section
