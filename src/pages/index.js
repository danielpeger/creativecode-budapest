import React from "react"
import { graphql } from "gatsby"
import SEO from '../components/SEO';
import GlobalStyle, { Root, TextColumn } from "../components/GlobalStyle"
import Section from "../components/Section"
import Hero from "../components/Hero"
import PastEvents from "../components/PastEvents"
import EventHeader from "../components/EventHeader"
import Podcast from "../components/Podcast"
import OpenCall from "../components/OpenCall"
import Footer from "../components/Footer"

export default function FrontPage({ data }) {
  const events = data.allMarkdownRemark.edges
  const podcast = data.feedPodcast
  const upcomingEvents = events.filter(
    ({ node }) => new Date(node.frontmatter.date) > new Date()
  )
  const pastEvents = events.filter(
    ({ node }) => new Date(node.frontmatter.date) < new Date()
  )
  console.log(events[0].node.frontmatter.poster);
  return (
    <Root>
      <SEO/>
      <GlobalStyle />
      <Hero backgroundImage={events[0].node.frontmatter.poster}/>
      <Section noseparator>
        <TextColumn>
          <p>Hey!</p>
          <p>
            Creative Code Budapest is a community meetup for new media artists,
            pixel tinkerers, arduino masters, nerds, habitants of virtual and
            augmented realities <em>and curious people</em>.
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
            safe environment. <em>Beginners and first-timers should feel especially
            welcome!</em>
          </p>
        </TextColumn>
      </Section>
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
      <PastEvents events={pastEvents}></PastEvents>
      <Podcast
        title={podcast.title}
        shownotes={podcast.content}
        date={podcast.isoDate}
        imgSrc={podcast.itunes.image.attrs.href}
        src={podcast.enclosure.url} 
      />
      <OpenCall></OpenCall>
      <Footer></Footer>
    </Root>
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
    feedPodcast {
      id
      isoDate
      title
      content
      itunes {
        duration
        image {
          attrs {
            href
          }
        }
      }
      enclosure {
        url
      }
    }
  }
`
