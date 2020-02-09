import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import a from "../../static/favicons/a.ico";
import b from "../../static/favicons/b.ico";
import c from "../../static/favicons/c.ico";
import d from "../../static/favicons/d.ico";
import e from "../../static/favicons/e.ico";
import i from "../../static/favicons/i.ico";
import j from "../../static/favicons/j.ico";

const favicons = [a, b, c, d, e, i, j];

const SEO = ({ title, description, image, pathname }) => (
  <StaticQuery
    query={query}
    render={({
      site: {
        siteMetadata: {
          defaultTitle,
          defaultDescription,
          siteUrl,
          defaultImage
        },
      },
    }) => {
      const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: image || `${siteUrl}${defaultImage}`,
        url: `${siteUrl}${`/${pathname}` || "/"}`,
      }

      return (
        <>
          <Helmet 
            title={seo.title}
            link={[{ 
              rel: 'shortcut icon',
              type: 'image/png',
              href: `${favicons[Math.floor(Math.random() * favicons.length)]}`
            }]}
          >
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
            {seo.url && <meta property="og:url" content={seo.url} />}
            {seo.title && <meta property="og:title" content={seo.title} />}
            {seo.description && (
              <meta property="og:description" content={seo.description} />
            )}
            {seo.image && <meta property="og:image" content={seo.image} />}
            <meta name="twitter:card" content="summary_large_image" />
            {seo.title && <meta name="twitter:title" content={seo.title} />}
            {seo.description && (
              <meta name="twitter:description" content={seo.description} />
            )}
            {seo.image && <meta name="twitter:image" content={seo.image} />}
          </Helmet>
        </>
      )
    }}
  />
)

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  pathname: PropTypes.string,
}

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  pathname: null,
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        siteUrl: url
        defaultImage: image
      }
    }
  }
`