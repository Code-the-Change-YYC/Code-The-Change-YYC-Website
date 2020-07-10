import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function MDTemplate({ data }) {
  const post = data.markdownRemark
  return (
    <>
      <header id="header" className="ex-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>Whats Happening YYC?</h1>
            </div>
          </div>
        </div>
      </header>

      <div>
        <h4>{post.frontmatter.title}</h4>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
