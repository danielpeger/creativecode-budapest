import React from "react";
import { Link, graphql } from "gatsby";

class FrontPage extends React.Component {
  render() {
		const { data } = this.props;
		const events = data.allMarkdownRemark.edges;
		return(
			<ul>
				{events.map(({ node }) => {
					return(
						<li>
							<Link to={node.parent.name}> {node.frontmatter.title} </Link>
						</li>
					)
				})}
			</ul>
		)
  }
};

export default FrontPage;

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
						}
					}
					frontmatter {
						title
					}
				}
			}
		}
	}
`