import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import SEO from '../components/SEO';
import GlobalStyle, { Root } from "../components/GlobalStyle"
import media from "../utils/media"
import EventHeader from "../components/EventHeader"
import PhotoGrid from "../components/PhotoGrid"

const EventPageHeader = styled(EventHeader)`
  border: none;
  padding-top: 0;
  margin-top: var(--8xl);
  ${media.mediumDown`
    margin-top: var(--5xl);
    margin-bottom: var(--5xl);
  `}
`;

export default function Template({ data }) {
  const { frontmatter, html, parent } = data.markdownRemark
  const {
    poster,
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
  const realPosterPath = poster.replace('upload/t_breakthumbnails/','upload/f_auto,w_1600/')
  return (
    <Root>
      <SEO
        title={`${title} • Creative Code Budapest`}
        description={`Creative Code Budapest Event - ${title}`}
        image={realPosterPath}
        pathname={parent.name}
      />
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
      {photos ? 
        <PhotoGrid 
          photos={photos}
          widePhotos={widePhotos}
          fullWidthPhotos={fullWidthPhotos} 
        />
        : 
        <PhotoGrid nophotos />
      }
    </Root>
  )
}

export const pageQuery = graphql`
  query($id: String) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        poster
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
      parent {
        ... on File {
          name
        }
      }
    }
  }
`
