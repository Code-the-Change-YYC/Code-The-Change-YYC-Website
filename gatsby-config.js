module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `updates`,
        path: `${__dirname}/src/markdown/updates`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/markdown/projects`,
      },
    },
    `gatsby-transformer-remark`,
  ],
}
