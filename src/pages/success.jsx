import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function success() {
  return (
    <>
      <header id='header' className='ex-header'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <h1>Thank You!</h1>
            </div>
          </div>
        </div>
      </header>

      <Container>
        <Row>
          <Col>
            <h3>Our team will review your submission and get back to you as soon as possible.</h3>
          </Col>
        </Row>
      </Container>
    </>
  )
}
