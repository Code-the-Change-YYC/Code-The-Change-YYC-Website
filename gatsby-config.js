require('dotenv').config()

module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `${process.env.CONTENTFUL_SPACEID}`,
        accessToken: `${process.env.CONTENTFUL_ACCESS}`,
      },
    },
  ],
}
