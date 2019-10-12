import React from "react"
import { graphql } from "gatsby"
import EventCard from "../components/EventCard"

class FrontPage extends React.Component {
  render() {
    const events = this.props.data.allMarkdownRemark.edges
    return (
      <div>
        <h2>Past events</h2>
        {events.map(({ node }) => {
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
    )
  }
}

export default FrontPage

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
            speakers {
              name
            }
          }
        }
      }
    }
  }
`
