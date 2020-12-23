import React from 'react'

import { Col, Container, Row } from 'react-bootstrap'

export default function oops() {
  return (
    <>
      <header id='header' className='ex-header'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <h1>Page Not Found</h1>
            </div>
          </div>
        </div>
      </header>

      <Container className='cards-1'>
        <Row>
          <Col>
            <h3>The page you were looking for was removed or relocated.</h3>
          </Col>
        </Row>
      </Container>
      <h3>The page you were looking for was removed or relocated.</h3>
    </>
  )
}
