/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/events`,
        name: `events`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-netlify-cms`
  ]
}