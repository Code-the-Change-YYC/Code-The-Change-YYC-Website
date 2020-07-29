import React from 'react'
import { graphql } from 'gatsby'
import moment from 'moment'
import { Helmet } from 'react-helmet'

import Layout from '../components/layout'
import { ContentCenter } from '../components/Content'

export default function EventTemplate({ location, data }) {
  const event = data.prismicEvent.data
  const title = event.title.text
  const date = event.date
  const eventLocation = event.location.text
  const img = event.poster
  const signupLink = event.signup_link.url
  const details = event.details.text

  return (
    <Layout location={location}>
      <Helmet>
        <script
          id="EmbedSocialScript"
          src="https://embedsocial.com/embedscript/ei.js"
        />
        <link
          id="EmbedSocialLightboxCSS"
          rel="stylesheet"
          href="https://embedsocial.com/cdn/embedsocial_lightbox_style.min.css"
        />
      </Helmet>

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
              <img src={img.url} alt={img.alt} className="img-fluid" />
            </div>
          </div>
          <div className="col-sm-4"></div>
        </div>

        <div className="row my-5">
          <div className="col-6 border-right">
            <h3>{moment(date).format('dddd, MMMM Do YYYY h:mma')}</h3>
          </div>
          <div className="col-6 border-left">
            <h3>{eventLocation}</h3>
          </div>
        </div>

        <h2>{title}</h2>
        <div>
          <p>{details}</p>
          {signupLink ? <a href={signupLink}>Click here to sign up</a> : null}
        </div>
      </ContentCenter>
    </Layout>
  )
}

export const query = graphql`
  query PrismicEvent {
    prismicEvent {
      uid
      data {
        title {
          text
        }
        date
        location {
          text
        }
        poster {
          alt
          url
        }
        signup_link {
          url
        }
        details {
          text
        }
      }
    }
  }
`
