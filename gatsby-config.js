require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Timothy.de`,
    description: `Hi there! I am Timothy, currently working as a technology consultant at tarent.`,
    author: `timothyde`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `${process.env.PRISMIC_REPOSITORY_NAME}`,
        accessToken: `${process.env.PRISMIC_ACCESS_TOKEN}`,
        schemas: {
          blog_post: require('./src/schemas/blog_post.json'),
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Timothy.de`,
        short_name: `Timothy`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ff6021`,
        display: `browser`,
        icon: `src/images/icon.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
