module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/events`,
        name: `events`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-svg`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        url: `http://feeds.soundcloud.com/users/soundcloud:users:734144125/sounds.rss`,
        name: `Podcast`,
        parserOption: {
          customFields: {
            item: ['itunes:duration', 'itunes:image']
          }
        }
      }
    }
  ],
}
