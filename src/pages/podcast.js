import React from "react"
import { graphql } from "gatsby"
import GlobalStyle, { Root } from "../components/GlobalStyle"
import PodcastEpisode from "../components/PodcastEpisode"

export default function FrontPage({ data }) {
  const podcasts = data.allFeedPodcast.edges
  return (
    <Root>
      <GlobalStyle />
      <h1>Podcast</h1>
      {podcasts.map(({ node }) => {
        const {
          id,
          title,
          isoDate,
          content,
          itunes,
          enclosure,
        } = node
        return (
          <PodcastEpisode
            key={id}
            title={title}
            shownotes={content}
            date={isoDate}
            imgSrc={itunes.image.attrs.href}
            src={enclosure.url} 
          />
        )
      })}
    </Root>
  )
}

export const pageQuery = graphql`
  query {
    allFeedPodcast {
      edges {
        node {
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
    }
  }
`
