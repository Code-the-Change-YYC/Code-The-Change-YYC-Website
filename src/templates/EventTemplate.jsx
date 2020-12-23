import React from 'react'
import { Helmet } from 'react-helmet'
import { Col, Container, Row } from 'react-bootstrap'

import moment from 'moment'

export default function EventTemplate({ pageContext }) {
  const event = pageContext.data || null
  const title = event.name || 'DEFAULT'
  const date = event.date || '1000-01-01T00:00'
  const eventLocation = event.location || 'DEFAULT'
  const img = event.eventPoster || ''
  const signupLink = event.signupLink || ''
  const details = event.details.details || ''
  const embedSocial = event.embedSocialRef || null

  return (
    <>
      <Helmet>
        <script id='EmbedSocialScript' src='https://embedsocial.com/embedscript/ei.js' />
        <link
          id='EmbedSocialLightboxCSS'
          rel='stylesheet'
          href='https://embedsocial.com/cdn/embedsocial_lightbox_style.min.css'
        />
      </Helmet>

      <header id='header' className='ex-header'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <h1>Whats Happening YYC?</h1>
            </div>
          </div>
        </div>
      </header>

      <Container>
        <Row>
          <Col />

          <Col>
            <div className='image-container mb-4'>
              <img src={img.file.url} alt={img.title} className='img-fluid' />
            </div>
          </Col>
          <Col />
        </Row>
        <Row className='my-5'>
          <Col className='border-right'>
            <h3>{moment(date).format('dddd, MMMM Do YYYY h:mma')}</h3>
          </Col>
          <Col className='border-left'>
            <h3>{eventLocation}</h3>
          </Col>
        </Row>

        <h2>{title}</h2>
        <div>
          <p>{details}</p>
          {signupLink ? <a href={signupLink}>Click here to sign up</a> : null}
        </div>

        {embedSocial != null ? <div className='embedsocial-album' data-ref={embedSocial} /> : null}
      </Container>
    </>
  )
}
