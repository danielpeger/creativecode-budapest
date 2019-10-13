import React from "react"
import { graphql } from "gatsby"
import EventHeader from "../components/EventHeader"
import PhotoGrid from "../components/PhotoGrid"
import GlobalStyle, { Root } from "../components/GlobalStyle"

export default function Template({ data }) {
  const { frontmatter, html } = data.markdownRemark
  const {
    title,
    date,
    location,
    googleMapsLink,
    meetupEventLink,
    facebookEventLink,
    speakers,
    photos,
  } = frontmatter
  return (
    <Root>
      <GlobalStyle />
      <EventHeader
        title={title}
        date={date}
        location={location}
        googleMapsLink={googleMapsLink}
        facebookEventLink={facebookEventLink}
        meetupEventLink={meetupEventLink}
        description={html}
        speakers={speakers}
      />
      {photos && <PhotoGrid photos={photos} />}
    </Root>
  )
}

export const pageQuery = graphql`
  query($id: String) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        date
        location
        googleMapsLink
        facebookEventLink
        meetupEventLink
        speakers {
          name
          bio
          image
        }
        photos
      }
    }
  }
`
