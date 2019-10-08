import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

const Container = styled.div`
	background: black;
  color: white;
`

export const PhotoGrid  = ({
  photos
}) => {
  return(
    photos.map(photo => {
      const transformedPhoto = photo.replace("upload/", "upload/w_800/");
      return(
        <a href={photo}>
          <img src={transformedPhoto} alt="event" />
        </a>
      )
    })
  )
};

export const EventLayout = ({
	title,
  date,
  location,
  googleMapsLink,
  facebookEventLink,
  meetupEventLink,
  description
}) => {
  return (
    <Container>
			<h1>{title}</h1>
			<h2>{date}</h2>
      <ul>
        <li><a href={googleMapsLink}>{location}</a></li>
        <li><a href={meetupEventLink}>Meetup event</a></li>
        <li><a href={facebookEventLink}>Facebook event</a></li>
      </ul>
      <div
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </Container>
  )
}

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <React.Fragment>
      <EventLayout
        title={frontmatter.title}
        date={frontmatter.date}
        location={frontmatter.location}
        googleMapsLink={frontmatter.googleMapsLink}
        facebookEventLink={frontmatter.facebookEventLink}
        meetupEventLink={frontmatter.meetupEventLink}
        description={html}
      />
      <PhotoGrid 
        photos={frontmatter.photos}
      />
    </React.Fragment>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        location
        googleMapsLink
        facebookEventLink
        meetupEventLink
        photos
      }
    }
  }
`