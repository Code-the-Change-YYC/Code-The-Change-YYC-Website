import React from "react"
import Layout from "../components/layout"
import { ContentLeft, ContentRight } from "../components/Content"

export default function Projects({ location }) {
  return (
    <Layout location={location}>
      <header id="header" className="ex-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>Projects Updates</h1>
            </div>
          </div>
        </div>
      </header>

      <ContentLeft
        id="yw"
        img={
          <img
            className="card-img"
            src="/images/_projects/_yw-alt.png"
            alt=""
          />
        }
      >
        <h3 className="text-left">YW Calgary</h3>
        <ul className="list-unstyled li-space-lg text-left">
          <li>
            <h4 className="m-1">Natural Language Processing</h4>
            <ul className="pl-3 text-left">
              <li>
                Use machine learning to classify critical incident reports
              </li>
              <li>
                Great opportunity for those interested in Machine Learning to
                test their skills
              </li>
              <li>
                Work with industry mentors with machine learning expertise
              </li>
            </ul>
          </li>
          <hr />
          <li>
            <h4 className="m-1">E-learning Storefront Project</h4>
            <ul className="pl-3 text-left">
              <li>
                Creation and design of a storefront website with e-commerce
                integrated
              </li>
              <li>
                Build APIs to interface with companies' different E-Learning
                platforms
              </li>
              <li>
                Work with secure registration and authentication technologies
              </li>
            </ul>
          </li>
        </ul>
      </ContentLeft>

      <ContentRight
        id="amhac"
        img={
          <img
            className="card-img"
            src="/images/_projects/_amhac-placeholder-alt.png"
            alt=""
          />
        }
      >
        <h3 className="text-left">Alberta Mental Health Advocacy Coalition</h3>
        <ul className="list-unstyled li-space-lg text-left">
          <li>
            <h4 className="m-1">Website and Marketing design</h4>
            <ul className="pl-3 text-left">
              <li>Create and design the organization website and logo</li>
              <li>Expand their online presence to reach more individuals</li>
              <li>
                Good project for members who are at the beginning of their
                programming journey
              </li>
            </ul>
          </li>
        </ul>
      </ContentRight>

      <ContentLeft
        id="mindfuel"
        img={
          <img
            className="card-img"
            src="/images/_projects/_mindfuel-alt.png"
            alt=""
          />
        }
      >
        <h3 className="text-left">Mindfuel</h3>
        <ul className="list-unstyled li-space-lg text-left">
          <li>
            <h4 className="m-1">System Re-Design</h4>
            <ul className="pl-3 text-left">
              <li>
                Build an activity board that contains new aggregated data
                everyday
              </li>
              <li>Start from scratch or build on top of current system</li>
              <li>Work with skilled developers from the Mindfuel team</li>
            </ul>
          </li>
        </ul>
      </ContentLeft>
    </Layout>
  )
}
