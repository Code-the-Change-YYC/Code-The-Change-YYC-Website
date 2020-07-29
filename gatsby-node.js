const path = require('path')

//Programmatically create new website pages
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  /* Events */
  //GraphQL function call
  const pages = await graphql(`
    query PrismicEventCreatePage {
      allPrismicEvent {
        edges {
          node {
            uid
          }
        }
      }
    }
  `)

  //Path to the template to be used for an Event page
  const eventTemplate = path.resolve('./src/templates/EventTemplate.js')

  //Create a page using the template for each node from
  pages.data.allPrismicEvent.edges.forEach((edge) => {
    createPage({
      path: `/events/${edge.node.uid}`,
      component: eventTemplate,
      context: {
        uid: edge.node.uid,
      },
    })
  })
}
