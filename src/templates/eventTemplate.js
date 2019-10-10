import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Image from "../components/Image"

const Container = styled.div`
	background: black;
  color: white;
`

const Speaker = ({
  speaker
}) => {
  return(
    <React.Fragment>
      {speaker.image && <Image src={speaker.image} width={300} alt={speaker.name}/>}
      <h3>{speaker.name}</h3>
      <p>{speaker.bio}</p>
    </React.Fragment>
  )
}

export const PhotoGrid  = ({
  photos
}) => {
  return(
    photos.map((photo, index) => {
      return(
        //<a href={photo}> //don't link to original to save cloudinary bandwith
          <Image src={photo} width={800} mobileWidth={300} alt="Photo from the event" key={index}/>
        //</a>
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
      {frontmatter.speakers &&
        frontmatter.speakers.map((speaker, index) => <Speaker speaker={speaker} key={index}/>)
      }
      {frontmatter.photos &&
        <PhotoGrid 
          photos={frontmatter.photos}
        />
      }
    </React.Fragment>
  )
}

export const pageQuery = graphql`
  query($id: String) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
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