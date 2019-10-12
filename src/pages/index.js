import React from "react"
import { graphql, Link } from "gatsby"
import EventCard from "../components/EventCard"
import EventHeader from "../components/EventHeader"

export default function FrontPage({ data }) {
  const events = data.allMarkdownRemark.edges
  const upcomingEvents = events.filter(
    ({ node }) => new Date(node.frontmatter.date) > new Date()
  )
  const pastEvents = events.filter(
    ({ node }) => new Date(node.frontmatter.date) < new Date()
  )
  return (
    <React.Fragment>
      <h1>Creative Code Budapest</h1>
      <div>
        <p>Hey!</p>
        <p>
          This is a community meetup for creative coders, new media artists,
          pixel tinkerers, arduino masters, nerds, habitants of virtual and
          augmented realities and curious people.
        </p>
        <p>
          Our mission is to spread knowledge about computational art, build
          bridges with other disciplines, support each other's projects and,
          maybe, inspire you to start your own... :)
        </p>
        <p>
          Our meetups are free and open to all, regardless of age, origin,
          gender or experience. They are an opportunity to meet likeminded
          people, share inspiration and get creative together in a relaxed and
          safe environment. Beginners and first-timers should feel especially
          welcome!
        </p>
      </div>
      <div>
        {upcomingEvents.map(({ node }) => {
          const {
            title,
            date,
            location,
            googleMapsLink,
            facebookEventLink,
            meetupEventLink,
            speakers,
          } = node.frontmatter
          return (
            <EventHeader
              key={node.parent.id}
              path={`/${node.parent.name}`}
              title={title}
              date={date}
              location={location}
              googleMapsLink={googleMapsLink}
              facebookEventLink={facebookEventLink}
              meetupEventLink={meetupEventLink}
              speakers={speakers}
              description={node.html}
            />
          )
        })}
      </div>
      <div>
        <h2>Past events</h2>
        {pastEvents.map(({ node }) => {
          const { poster, title, date, location, speakers } = node.frontmatter
          return (
            <EventCard
              key={node.parent.id}
              path={`/${node.parent.name}`}
              poster={poster}
              title={title}
              date={date}
              location={location}
              speakers={speakers}
            />
          )
        })}
      </div>
    </React.Fragment>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          parent {
            ... on File {
              name
              id
            }
          }
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
          }
          html
        }
      }
    }
  }
`
