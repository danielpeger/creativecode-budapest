import React from "react"
import { graphql } from "gatsby"
import EventCard from "../components/EventCard"
import { Link } from "gatsby"

class FrontPage extends React.Component {
  render() {
    const { data } = this.props
    const events = data.allMarkdownRemark.edges
    return (
      <ul>
        {events.map(({ node }) => {
          const { poster, title, date, location, speakers } = node.frontmatter
          return (
            // <li>
            //   <Link to={node.parent.name}> {node.frontmatter.title} </Link>
            // </li>
            <EventCard
              path={`/${node.parent.name}`}
              poster={poster}
              title={title}
              date={date}
              location={location}
              key={node.parent.id}
            />
          )
        })}
      </ul>
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
