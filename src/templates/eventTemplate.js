import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import SEO from '../components/SEO';
import GlobalStyle, { Root } from "../components/GlobalStyle"
import Section from "../components/Section"
import Logo from "../../static/logo/logo-black.svg"
import EventHeader from "../components/EventHeader"
import PhotoGrid from "../components/PhotoGrid"

const Nav = styled.div`
  margin-bottom:var(--5xl);
  padding-top: var(--xxl);
  padding-bottom: var(--l);
  background-image: url(${props => props.poster});
  background-size: cover;
  filter: grayscale(1);
`;

const EventPageHeader = styled(EventHeader)`
  margin-bottom: var(--5xl);
  padding: 0;
  border: none;
`;

const StyledLogo = styled(Logo)`
  height: var(--7xl);
  width: calc(var(--7xl) * 2.66);
  &:hover{
    filter: invert(1);
  }
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
  const realPosterPath = poster.replace('upload/t_breakthumbnails/','upload/f_auto/')
  return (
    <Root>
      <SEO
        title={`${title} • Creative Code Budapest`}
        description={`Creative Code Budapest Event - ${title}`}
        image={realPosterPath}
        pathname={parent.name}
      />
      <GlobalStyle />
      <Nav poster={realPosterPath}>
        <Section css="margin-bottom: 0;" noseparator>
          <Link to="/" css="grid-column: 1 / -1;">
            <StyledLogo/>
          </Link>
        </Section>
      </Nav>
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
