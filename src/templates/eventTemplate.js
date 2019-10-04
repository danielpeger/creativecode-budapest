import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

const Container = styled.div`
	background: green;
`

export const EventLayout = ({
	title,
	date,
	content,
}) => {
  return (
    <Container>
			<h1>{title}</h1>
			<h2>{date}</h2>
			<div>{content}</div>
    </Container>
  )
}

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
		<EventLayout
			title={frontmatter.title}
			date={frontmatter.date}
			content={html}
		/>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`