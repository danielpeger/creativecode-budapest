import React from "react"

const Section = ({ heading, subheading, children }) => {
  return (
    <section>
      {heading && <h2>{heading}</h2>}
      {subheading && <p>{subheading}</p>}
      {children}
    </section>
  )
}

export default Section
