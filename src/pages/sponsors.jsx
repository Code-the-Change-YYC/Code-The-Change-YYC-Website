import React from 'react'
import { graphql, Link } from 'gatsby'
import { Col, Container, Row } from 'react-bootstrap'

import { CardGroup, Card, CardExecMember } from '../components/Card'

export default function SponsorsAndAdvisors({ data }) {
  const advisors =
    data.allContentfulAdminTeamMember.edges.filter(admin => admin.node.externalAdvisor) || []

  const sponsorshipProposal = data.allContentfulAsset.edges[0].node
  return (
    <>
      <header id='header' className='ex-header'>
        <Container>
          <Row>
            <Col>
              <h1>Team Sponsors</h1>
            </Col>
          </Row>
        </Container>
      </header>

      <Container>
        <Row>
          <Col>
            <p className='p-heading p-large mb-0'>
              We are continously pursuing endeavours that could help students achieve more social
              good for the community. These are the sponsors that help make our events and ideas
              possible.
            </p>
          </Col>
        </Row>
      </Container>

      <Container className='mb-0 cards-1'>
        <Row>
          <Col>
            <CardGroup>
              {data.allContentfulSponsor.edges.map(edge => {
                return (
                  <Card
                    img={
                      <img
                        className='card-image'
                        src={edge.node.logoAsset.file.url}
                        alt={edge.node.logoAsset.title}
                      />
                    }
                    key={edge.node.name}
                    href={edge.node.sponsorWebsite}>
                    <h4>{edge.node.name}</h4>
                  </Card>
                )
              })}
            </CardGroup>
          </Col>
        </Row>
      </Container>

      <Container className='basic-4 pb-0'>
        <Row>
          <Col>
            <h2 className='mb-5'>External Advisors</h2>
            {advisors.map(admin => {
              return <CardExecMember admin={admin.node} key={admin.node.fullName} />
            })}
          </Col>
        </Row>
      </Container>

      <Container className='cards-1 mb-5 pb-5'>
        <Row>
          <Col>
            <p className='p-heading p-large mb-4'>
              Want to help shape the future of Code the Change YYC? Feel free to reach out to us and
              we&apos;d love to discuss your involvement.
            </p>
            <Link className='btn-solid-lg page-scroll mx-1' to='/#contact'>
              Contact us
            </Link>
            <a className='btn-solid-lg page-scroll mx-1' href={sponsorshipProposal.file.url}>
              Sponsorship Proposal
            </a>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export const query = graphql`
  query Sponsors {
    allContentfulSponsor(sort: { fields: logoAsset___createdAt, order: ASC }) {
      edges {
        node {
          name
          logoAsset {
            file {
              url
            }
            title
          }
        }
      }
    }
    allContentfulAdminTeamMember(sort: { fields: order, order: ASC }) {
      edges {
        node {
          linkedIn
          fullName
          position
          profilePicture {
            fluid(quality: 100, maxWidth: 250) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          externalAdvisor
        }
      }
    }
    allContentfulAsset(filter: { title: { regex: "/SponsorshipProposal/" } }) {
      edges {
        node {
          title
          file {
            url
          }
        }
      }
    }
  }
`
