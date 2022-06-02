import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Col, Container, Row } from 'react-bootstrap'
import { graphql, Link } from 'gatsby'
import { AnchorLink } from 'gatsby-plugin-anchor-links'

import { CardGroup, Card, CardExecMember } from '../components/Card'

import StudentsModal from '../components/Modals/ForStudents.modal'
import CausesModal from '../components/Modals/ForCauses.modal'
import MentorsModal from '../components/Modals/ForMentors.modal'

export default function Home({ data }) {
  const [studModalOpen, setStudModalOpen] = useState(false)
  const [causeModalOpen, setCauseModalOpen] = useState(false)
  const [mentorModalOpen, setMentorModalOpen] = useState(false)

  const sponsors = data.allContentfulSponsor.edges || []
  const sponsorCount = data.allContentfulSponsor.totalCount || 0
  const executives =
    data.allContentfulAdminTeamMember.edges.filter(admin => !admin.node.externalAdvisor) || []

  // Modal.setAppElement('#___gatsby')
  return (
    <>
      <header id='header' className='header'>
        <div className='header-content'>
          <Container>
            <Row>
              <Col lg>
                <div className='text-container'>
                  <h1>
                    <span className='turquoise'>Code The Change </span>
                    <span className='red'>YYC</span>
                  </h1>
                  <p className='p-large'>Welcome to the Calgary chapter of Code The Change.</p>
                  <div className='row btn-group'>
                    <div className='col-sm-auto p-0'>
                      <div className='col p-0'>
                        <AnchorLink className='btn-solid-lg page-scroll m-1' to='/#students'>
                          Students
                        </AnchorLink>
                        <AnchorLink className='btn-solid-lg page-scroll m-1' to='/#causes'>
                          Causes
                        </AnchorLink>
                      </div>
                      <div className='w-100' />
                      <div className='col p-0'>
                        <AnchorLink className='btn-solid-lg page-scroll m-1' to='/#mentors'>
                          Mentors
                        </AnchorLink>
                        <AnchorLink className='btn-solid-lg page-scroll m-1' to='/#sponsors'>
                          Sponsors
                        </AnchorLink>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg>
                <div className='image-container'>
                  <img className='img-fluid' src='images/_header.png' alt='alternative' />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </header>

      {/* <Container className='cards-1'>
        <Row>
          <Col>
            <h2>Latest Updates</h2>
            <div className='mx-auto'>
              <h4>{latestUpdate.name}</h4>
              <p className='p-heading p-large'>{latestUpdate.details.details}</p>
            </div>
            <Link className='btn-solid-reg popup-with-move-anim m-4' to='/events'>
              Details
            </Link>
          </Col>
        </Row>
      </Container> */}

      <Container className='cards-1'>
        <Row>
          <Col>
            <h2>Post-Secondary Representation</h2>
            <p className='p-large'>
              We have student members, typically in Computer Science and Engineering programs, from
              the following post-secondary institutions in Calgary.
            </p>
            <CardGroup>
              <Card
                href='/#about'
                img={
                  <img className='card-image' src='images/_uofc.png' alt='University of Calgary' />
                }
              />
              <Card
                href='/#about'
                img={
                  <img className='card-image' src='images/_mru.png' alt='Mount Royal University' />
                }
              />
              <Card
                href='/#about'
                img={
                  <img
                    className='card-image'
                    src='images/_sait.png'
                    alt='Southern Alberta Institute of Technology'
                  />
                }
              />
            </CardGroup>
          </Col>
        </Row>
      </Container>

      <Container className='cards-1' id='students'>
        <div className='basic-1'>
          <Row>
            <Col lg>
              <div className='text-container'>
                <h2>For Students</h2>
                <p>
                  Calling all programmers, engineers and tinkerers!
                  <br />
                  Do you want to excel your programming knowledge, learn new software skills, and
                  gain amazing experiences to put on your resume while helping your community and
                  contributing to social change?
                </p>
                <p>
                  Code The Change is a student driven community initiative where computer science
                  and engineering students use their skills for social change. We have worked
                  alongside non-profit organizations for the last five years. Founded at Stanford
                  University, Code The Change has spread to campuses across the US and Canada.
                </p>
                <a
                  className='btn-solid-reg popup-with-move-anim page-scroll'
                  onClick={() => {
                    setStudModalOpen(!studModalOpen)
                  }}
                  href='#students'>
                  Details
                </a>
              </div>
            </Col>
            <Col lg>
              <div className='image-container'>
                <img className='img-fluid' src='images/_students.svg' alt='alternative' />
              </div>
            </Col>
          </Row>
        </div>
      </Container>

      {/* Students Modal */}
      <StudentsModal
        show={studModalOpen}
        onHide={() => {
          setStudModalOpen(!studModalOpen)
        }}
      />

      <Container className='cards-1' id='causes'>
        <div className='basic-1'>
          <Row>
            <Col lg>
              <div className='image-container'>
                <img className='img-fluid' src='images/_causes.svg' alt='alternative' />
              </div>
            </Col>
            <Col lg>
              <div className='text-container'>
                <h2>For Causes</h2>
                <p>
                  Code The Change is a student-led initiative where students in technology-focused
                  programs volunteer their time to work on projects for causes as a way to grow
                  their skills, gain experience, attain mentorship, and give back to the community.
                </p>
                <p>
                  We seek to partner with causes that have projects on the go that need additional
                  programming and software development support. We work on a wide range of projects,
                  from developing web/phone apps, to RESTful web services to data collection or
                  aggregation tools. We will work with you to find the right tool for the job. We
                  prefer projects that are already underway with a good vision, but require a lot
                  more technical work to move it along.
                </p>
                <p>
                  If you have a potential project, please complete a &nbsp;
                  <a href='https://docs.google.com/forms/d/e/1FAIpQLSfOSVxP6L0dCUVeyWX1yI-jp1pYesaSpqz2-7i8z_JaiRu4YA/viewform?usp=sf_link'>
                    cause project submission
                  </a>
                </p>
                <a
                  className='btn-solid-reg popup-with-move-anim page-scroll'
                  onClick={() => {
                    setCauseModalOpen(!causeModalOpen)
                  }}
                  href='#causes'>
                  Details
                </a>
              </div>
            </Col>
          </Row>
        </div>
      </Container>

      {/* CAUSES Modal */}
      <CausesModal
        show={causeModalOpen}
        onHide={() => {
          setCauseModalOpen(!causeModalOpen)
        }}
      />

      <Container className='cards-1' id='mentors'>
        <div className='basic-1'>
          <Row>
            <Col lg>
              <div className='text-container'>
                <h2>For Industry Mentors</h2>
                <p>
                  Have you spent a considerable amount of time in the industry and would like to
                  give back to the community?
                </p>
                <p>
                  Code The Change will engage students in post secondary schools throughout Calgary
                  to assist causes in unlocking them to their full potential, while ensuring the
                  students&apos; skillsets are getting developed and made more robust.
                </p>
                <a
                  className='btn-solid-reg popup-with-move-anim page-scroll'
                  onClick={() => {
                    setMentorModalOpen(!mentorModalOpen)
                  }}
                  href='#mentors'>
                  Details
                </a>
              </div>
            </Col>
            <Col lg>
              <div className='image-container'>
                <img className='img-fluid' src='images/_mentors.svg' alt='alternative' />
              </div>
            </Col>
          </Row>
        </div>
      </Container>

      <Container className='cards-1'>
        <Row>
          <Col>
            <h2>More Information</h2>
            <p className='p-heading p-large'>
              Want to know more about upcoming events, projects, or cause registrations?
              <br />
              Please select your option below!
            </p>
            <CardGroup>
              <div className='card'>
                <Link to='/events'>
                  <img className='card-image' src='images/_calendar2.svg' alt='alternative' />
                  <div className='card-body'>
                    <h4 className='card-title'>Upcoming Events</h4>
                  </div>
                </Link>
              </div>

              <div className='card'>
                <Link to='/projects'>
                  <img className='card-image' src='images/_projects3.svg' alt='alternative' />
                  <div className='card-body'>
                    <h4 className='card-title'>Our Projects</h4>
                  </div>
                </Link>
              </div>

              <div className='card'>
                <a href='https://docs.google.com/forms/d/e/1FAIpQLSfOSVxP6L0dCUVeyWX1yI-jp1pYesaSpqz2-7i8z_JaiRu4YA/viewform?usp=sf_link'>
                  <img className='card-image' src='images/_signup2.svg' alt='alternative' />
                  <div className='card-body'>
                    <h4 className='card-title'>Cause Project Submission</h4>
                  </div>
                </a>
              </div>
            </CardGroup>
          </Col>
        </Row>
      </Container>

      <MentorsModal
        show={mentorModalOpen}
        onHide={() => {
          setMentorModalOpen(!mentorModalOpen)
        }}
      />

      <Container className='basic-4'>
        <Row>
          <Col>
            <h2>Team YYC</h2>
            <p className='p-heading p-large'>
              This is the team responsible for bringing Code The Change to life in Calgary.
              <br />
              To contact them directly, please reach out via LinkedIn.
            </p>
            <h4>Student Executives</h4>
            <br />
            {executives.map(admin => {
              return <CardExecMember admin={admin.node} key={admin.node.fullName} />
            })}
          </Col>
        </Row>
      </Container>

      <Container className='cards-1'>
        <Row>
          <Col>
            <h2 className='mb-5'>Sponsors</h2>
            {sponsors.map(sponsor => {
              return (
                <Card
                  img={
                    <img
                      className='card-image'
                      src={sponsor.node.logoAsset.file.url}
                      alt={sponsor.node.logoAsset.title}
                    />
                  }
                  key={sponsor.node.name}
                />
              )
            })}
            <div>
              {sponsorCount > 2 ? <p className='p-large'>+ {sponsorCount - 2} more!</p> : null}
              <Link className='btn-solid-lg m-4' to='/sponsors'>
                Go to Sponsors page
              </Link>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className='cards-1 form-2'>
        <Row>
          <Col>
            <h2>Contact Information</h2>
            <ul className='list-unstyled li-space-lg'>
              <li className='address'>
                Since Code the Change YYC is composed of many students from multiple post-seconary
                institutions, the club needed a central place to hold events and gatherings.
                Benevity as a corporate partner graciously provides their office space for club
                events and meetups.
                <br /> Reach out to us on our
                <a className='turquoise mx-1' href='https://www.facebook.com/CodeTheChangeYYC/'>
                  Facebook page
                </a>
                or via email at
                <a className='turquoise ml-1' href='mailto:codethechangeyyc@gmail.com'>
                  codethechangeyyc@gmail.com
                </a>
                .
              </li>

              <li>
                <i className='fas fa-map-marker-alt' />
                611 Meredith Rd NE #700, Calgary, AB T2E 2W5, Canada
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export const query = graphql`
  query EventsSponsorsTeam {
    allContentfulEvent(limit: 1) {
      edges {
        node {
          date
          name
          details {
            details
          }
        }
      }
    }
    allContentfulSponsor(sort: { fields: logoAsset___createdAt, order: ASC }, limit: 2) {
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
      totalCount
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
  }
`

Home.propTypes = {
  data: PropTypes.shape({
    allContentfulEvent: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.object),
    }),
    allContentfulSponsor: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(PropTypes.object),
    }),
    allContentfulAdminTeamMember: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.object),
    }),
  }).isRequired,
}
