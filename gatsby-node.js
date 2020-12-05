const path = require('path')

//Programmatically create new website pages
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  /* Events */
  //GraphQL function call
  const pages = await graphql(`
    query ContentfulEventCreatePage {
      allContentfulEvent {
        edges {
          node {
            date
            details {
              details
            }
            slug
            name
            signupLink
            eventPoster {
              file {
                url
              }
              title
            }
            location
            embedSocialRef
          }
        }
      }
    }
  `)

  //Path to the template to be used for an Event page
  const eventTemplate = path.resolve('./src/templates/EventTemplate.js')

  //Create a page using the template for each node from
  pages.data.allContentfulEvent.edges.forEach((edge) => {
    createPage({
      path: `/events/${edge.node.slug}`,
      component: eventTemplate,
      context: {
        data: edge.node,
      },
    })
  })
}
