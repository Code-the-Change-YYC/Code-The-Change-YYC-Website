import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import moment from 'moment'

import { ContentCenter } from '../components/Content'

export default function EventTemplate({ data }) {
  const event = data.contentfulEvent || null
  const title = event.name || 'DEFAULT'
  const date = event.date || '1000-01-01T00:00'
  const eventLocation = event.location || 'DEFAULT'
  const img = event.eventPoster || ''
  const signupLink = event.signupLink || ''
  const details = event.details.details || ''

  return (
    <>
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
              <img src={img.file.url} alt={img.title} className="img-fluid" />
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
    </>
  )
}

export const query = graphql`
  query Event {
    contentfulEvent {
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
    }
  }
`
