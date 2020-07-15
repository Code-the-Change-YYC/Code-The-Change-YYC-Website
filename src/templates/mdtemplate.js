import React from "react"
import { graphql } from "gatsby"
import moment from "moment"

import Layout from "../components/layout"
import { ContentCenter } from "../components/Content"

export default function MDTemplate({ location, data }) {
  const post = data.markdownRemark
  const date = new Date(post.frontmatter.date)
  return (
    <Layout location={location}>
      <header id="header" className="ex-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>Whats Happening YYC?</h1>
            </div>
          </div>
        </div>
      </header>

      <ContentCenter>
        <div className="row">
          <div className="col-sm-4"></div>
          <div className="col-sm-4">
            <div className="image-container mb-4">
              <img src={post.frontmatter.img} alt="" className="img-fluid" />
            </div>
          </div>
          <div className="col-sm-4"></div>
        </div>

        <div className="row my-5">
          <div className="col-6 border-right">
            <h3>{moment(date).format("dddd, MMMM Do YYYY h:mma")}</h3>
          </div>
          <div className="col-6 border-left">
            <h3>{post.frontmatter.location}</h3>
          </div>
        </div>

        <h2>{post.frontmatter.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </ContentCenter>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      htmlAst
      frontmatter {
        title
        date
        location
        img
      }
    }
  }
`
