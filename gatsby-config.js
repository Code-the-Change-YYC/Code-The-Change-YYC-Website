require('dotenv').config()

module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `codethechangeyyc`,
        accessToken: `${process.env.PRISMIC_API}`,
        linkResolver: ({ node, key, value }) => (post) => `/${post.uid}`,
        schemas: {
          event: require('./src/schemas/event.json'),
        },
      },
    },
  ],
}
