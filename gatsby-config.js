module.exports = {
  siteMetadata: {
    title: "Creative Code Budapest",
    description:
      "A community meetup for new media artists, pixel tinkerers, arduino masters, nerds, habitants of virtual and augmented realities and curious people.",
    url: "https://www.creativecodebudapest.com",
    image: "/logo/logo-white.png"
  },
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
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-preload-fonts`,
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
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Creative Code Budapest",
        short_name: "CCBP",
        start_url: "/",
        background_color: "#000",
        theme_color: "#1e00c2",
        display: "browser",
        icon: "static/favicons/e.png",
        crossOrigin: `use-credentials`,
      },
    }
  ],
}
