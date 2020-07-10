//Lodash is not really required for the usage in this file as it is used as a "fallback" in case a value is null.
//Null values will not crash in build time due to Lodash.
const _ = require("lodash")
const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (_.get(node, "internal.type") === `MarkdownRemark`) {
    //Categorize MD to a collection (projects or updates)
    // Get the parent node
    const parent = getNode(_.get(node, "parent"))
    // Create a field on this node for the "collection" of the parent
    // NOTE: This is necessary so we can filter `allMarkdownRemark` by
    // `collection` otherwise there is no way to filter for only markdown
    // documents of type `projects` or `updates`.
    createNodeField({
      node,
      name: "collection",
      value: _.get(parent, "sourceInstanceName"),
    })

    //Programmatically create a slug (path on url: angeyyc.ca/slug) based on the MD filename
    const fileNode = getNode(node.parent)
    const basePath = parent.sourceInstanceName
    const slug = createFilePath({ node, getNode, basePath: basePath })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

//Programmatically create new website pages for each MD file
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  //GraphQL function call that returns a Promise
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/mdtemplate.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    })
  })
}
