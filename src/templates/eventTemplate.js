import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import media from "../utils/media"
import EventHeader from "../components/EventHeader"
import PhotoGrid from "../components/PhotoGrid"
import GlobalStyle, { Root } from "../components/GlobalStyle"

const EventPageHeader = styled(EventHeader)`
  border: none;
  margin-top: var(--xxxl);
  ${media.mediumDown`margin-top: var(--l);`}
`;

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
    widePhotos,
    fullWidthPhotos
  } = frontmatter
  return (
    <Root>
      <GlobalStyle />
      <EventPageHeader
        title={title}
        date={date}
        location={location}
        googleMapsLink={googleMapsLink}
        facebookEventLink={facebookEventLink}
        meetupEventLink={meetupEventLink}
        description={html}
        speakers={speakers}
      />
      {photos && <PhotoGrid photos={photos} widePhotos={widePhotos} fullWidthPhotos={fullWidthPhotos} />}
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
        photos,
        widePhotos,
        fullWidthPhotos
      }
    }
  }
`
