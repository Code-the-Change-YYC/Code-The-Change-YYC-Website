import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import { ContentProject } from '../components/Content'

export default function Projects({ data }) {
  return (
    <Layout>
      <header id="header" className="ex-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>Projects Updates</h1>
            </div>
          </div>
        </div>
      </header>

      {data.allContentfulProject.edges.map((node) => {
        return <ContentProject key={node.node.slug}>{node}</ContentProject>
      })}
    </Layout>
  )
}

export const query = graphql`
  query PrismicProject {
    allContentfulProject {
      edges {
        node {
          developers
          name
          description {
            description
          }
          leads
          final
          slug
          summary
          nonprofit
          nonprofit_logo {
            file {
              url
            }
            description
          }
        }
      }
    }
  }
`
