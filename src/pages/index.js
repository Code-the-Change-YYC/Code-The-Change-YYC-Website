import React, { useState } from 'react'
import { graphql, Link } from 'gatsby'
import { AnchorLink } from 'gatsby-plugin-anchor-links'

import Layout from '../components/layout'
import { ContentLeft, ContentRight, ContentCenter } from '../components/Content'
import { CardGroup, Card, CardExecMember } from '../components/Card'
import { ContentModal } from '../components/Content'

export default function Home({ data }) {
  const [studModalOpen, setStudModalOpen] = useState(false)
  const [causeModalOpen, setCauseModalOpen] = useState(false)
  const [mentorModalOpen, setMentorModalOpen] = useState(false)

  const latestUpdate = data.allContentfulEvent.edges[0].node || 'No updates!'
  const sponsors = data.allContentfulSponsor.edges || []
  const sponsorCount = data.allContentfulSponsor.totalCount || 0
  const executives =
    data.allContentfulAdminTeamMember.edges.filter(
      (admin) => !admin.node.externalAdvisor
    ) || []

  return (
    <Layout>
      <header id="header" className="header">
        <div className="header-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="text-container">
                  <h1>
                    <span className="turquoise">Code The Change </span>
                    <span className="red">YYC</span>
                  </h1>
                  <p className="p-large">
                    Welcome to the Calgary chapter of Code The Change.
                  </p>
                  <div className="row btn-group">
                    <div className="col-sm-auto p-0">
                      <div className="col p-0">
                        <AnchorLink
                          className="btn-solid-lg page-scroll m-1"
                          to="/#students"
                        >
                          Students
                        </AnchorLink>
                        <AnchorLink
                          className="btn-solid-lg page-scroll m-1"
                          to="/#causes"
                        >
                          Causes
                        </AnchorLink>
                      </div>
                      <div className="w-100"></div>
                      <div className="col p-0">
                        <AnchorLink
                          className="btn-solid-lg page-scroll m-1"
                          to="/#mentors"
                        >
                          Mentors
                        </AnchorLink>
                        <AnchorLink
                          className="btn-solid-lg page-scroll m-1"
                          to="/#sponsors"
                        >
                          Sponsors
                        </AnchorLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="image-container">
                  <img
                    className="img-fluid"
                    src="images/_header.png"
                    alt="alternative"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <ContentCenter
        id="latest"
        cta={
          <Link className="btn-solid-reg popup-with-move-anim m-4" to="/events">
            Details
          </Link>
        }
      >
        <h2>Latest Updates</h2>
        <div className="mx-auto w-50">
          <h4>{latestUpdate.name}</h4>
          <p className="p-large">{latestUpdate.details.details}</p>
        </div>
      </ContentCenter>

      <ContentCenter id="schools">
        <h2>Post-Secondary Representation</h2>
        <p className="p-heading p-large">
          We have student members, typically in Computer Science and Engineering
          programs, from the following post-secondary institutions in Calgary.
        </p>
        <CardGroup>
          <Card
            to="/#about"
            img={
              <img
                className="card-image"
                src="images/_uofc.png"
                alt="University of Calgary"
              />
            }
          />
          <Card
            to="/#about"
            img={
              <img
                className="card-image"
                src="images/_mru.png"
                alt="Mount Royal University"
              />
            }
          />
          <Card
            to="/#about"
            img={
              <img
                className="card-image"
                src="images/_sait.png"
                alt="Southern Alberta Institute of Technology"
              />
            }
          />
        </CardGroup>
      </ContentCenter>

      <ContentLeft
        id="students"
        img={
          <img
            className="img-fluid"
            src="images/_students.svg"
            alt="alternative"
          />
        }
        cta={
          <a
            className="btn-solid-reg popup-with-move-anim page-scroll"
            onClick={(e) => {
              setStudModalOpen(!studModalOpen)
            }}
            href="#students"
          >
            Details
          </a>
        }
      >
        <h2>For Students</h2>
        <p>
          Calling all programmers, engineers and tinkerers! <br />
          Do you want to excel your programming knowledge, learn new software
          skills, and gain amazing experiences to put on your resume while
          helping your community and contributing to social change?
        </p>
        <p>
          Code The Change is a student driven community initiative where
          computer science and engineering students use their skills for social
          change. We have worked alongside non-profit organizations for the last
          five years. Founded at Stanford University, Code The Change has spread
          to campuses across the US and Canada.
        </p>
      </ContentLeft>

      <ContentModal
        isOpen={studModalOpen}
        onRequestClose={(e) => {
          setStudModalOpen(!studModalOpen)
        }}
        img={
          <img
            className="img-fluid"
            src="images/_rockets.jpg"
            alt="alternative"
          />
        }
        cta={
          <a className="btn-solid-reg mfp-close page-scroll" href="/projects">
            PROJECTS
          </a>
        }
      >
        <h3>Student Information</h3>
        <hr />
        <h5>What's in it for you?</h5>
        <p>
          You will be a part of a small team of programming students and will
          work together on projects to help charities and non-profits who don’t
          have the means to otherwise access expert technical services.
        </p>
        <p>
          You will also receive mentorship from senior programmers and technical
          leaders from around Calgary to expand your skillset and gain
          experience applying what you’ve learned in school to solve real-life
          problems.
        </p>
        <ul className="list-unstyled li-space-lg">
          <li className="media">
            <i className="fas fa-check"></i>
            <div className="media-body">
              Network with likeminded individuals
            </div>
          </li>
          <li className="media">
            <i className="fas fa-check"></i>
            <div className="media-body">Work on real world problems</div>
          </li>
          <li className="media">
            <i className="fas fa-check"></i>
            <div className="media-body">Get some real world experience</div>
          </li>
          <li className="media">
            <i className="fas fa-check"></i>
            <div className="media-body">Work with industry mentors</div>
          </li>
          <li className="media">
            <i className="fas fa-check"></i>
            <div className="media-body">
              Use the power of technology for good
            </div>
          </li>
        </ul>
      </ContentModal>

      <ContentRight
        id="causes"
        img={
          <img
            className="img-fluid"
            src="images/_causes.svg"
            alt="alternative"
          />
        }
        cta={
          <a
            className="btn-solid-reg popup-with-move-anim page-scroll"
            onClick={(e) => {
              setCauseModalOpen(!causeModalOpen)
            }}
            href="#causes"
          >
            Details
          </a>
        }
      >
        <h2>For Causes</h2>
        <p>
          Code The Change is a student-led initiative where students in
          technology-focused programs volunteer their time to work on projects
          for causes as a way to grow their skills, gain experience, attain
          mentorship, and give back to the community.
        </p>
        <p>
          We seek to partner with causes that have projects on the go that need
          additional programming and software development support. We work on a
          wide range of projects, from developing web/phone apps, to RESTful web
          services to data collection or aggregation tools. We will work with
          you to find the right tool for the job. We prefer projects that are
          already underway with a good vision, but require a lot more technical
          work to move it along.
        </p>
        <p>
          If you have a potential project, please complete a{' '}
          <Link to="/causeRegistration">cause project submission</Link>
        </p>
      </ContentRight>

      <ContentModal
        isOpen={causeModalOpen}
        onRequestClose={(e) => {
          setCauseModalOpen(!causeModalOpen)
        }}
        img={
          <img
            className="img-fluid"
            src="images/_causesVector.jpg"
            alt="alternative"
          />
        }
        cta={
          <a className="btn-solid-reg mfp-close page-scroll" href="/causes">
            REGISTER
          </a>
        }
      >
        <h3>Cause Information</h3>
        <hr />
        <h5>How will this work?</h5>
        <p>
          Project selection will be based on participating student group
          capacity, and skillset.
        </p>
        <p>
          Student groups will assign a member of their team to communicate with
          the cause over the course of the year. Your committment level will
          depend on the project. There is going to be ample oppotunities for
          regular check-ins with the team to provide feedback, guidance, and
          ensure they have all requirements and specifications to do their work.
        </p>
        <ul className="list-unstyled li-space-lg">
          <li className="media">
            <i className="fas fa-check"></i>
            <div className="media-body">Get fresh perspectives</div>
          </li>
          <li className="media">
            <i className="fas fa-check"></i>
            <div className="media-body">Mentor young minds</div>
          </li>
          <li className="media">
            <i className="fas fa-check"></i>
            <div className="media-body">Outsource technical work</div>
          </li>
          <li className="media">
            <i className="fas fa-check"></i>
            <div className="media-body">
              Build a thorough technical solution
            </div>
          </li>
        </ul>
      </ContentModal>

      <ContentLeft
        id="mentors"
        img={
          <img
            className="img-fluid"
            src="images/_mentors.svg"
            alt="alternative"
          />
        }
        cta={
          <a
            className="btn-solid-reg popup-with-move-anim page-scroll"
            onClick={(e) => {
              setMentorModalOpen(!mentorModalOpen)
            }}
            href="#mentors"
          >
            Details
          </a>
        }
      >
        <h2>For Industry Mentors</h2>
        <p>
          Have you spent a considerable amount of time in the industry and would
          like to give back to the community?
        </p>
        <p>
          Code The Change will engage students in post secondary schools
          throughout Calgary to assist causes in unlocking them to their full
          potential, while ensuring the students' skillsets are getting
          developed and made more robust.
        </p>
      </ContentLeft>

      <ContentModal
        isOpen={mentorModalOpen}
        onRequestClose={(e) => {
          setMentorModalOpen(!mentorModalOpen)
        }}
        img={
          <img
            className="img-fluid"
            src="images/_mentors.jpg"
            alt="alternative"
          />
        }
        cta={
          <a className="btn-solid-reg mfp-close page-scroll" href="/events">
            EVENTS
          </a>
        }
      >
        <h3>Mentor Information</h3>
        <hr />
        <h5>Why become a mentor?</h5>
        <p>
          Your ability to bring real world experience will allow the students'
          to apply their learnings, and ensure what they are practicing is
          relevant for the current job market.
        </p>
        <p>
          Once you have selected the team you would like to mentor, the team
          will set aside at least one hour a week for working session meetings.
          Please communicate with the team as to its frequency, when and where
          the meeting would take place.
        </p>
        <ul className="list-unstyled li-space-lg">
          <li className="media">
            <i className="fas fa-check"></i>
            <div className="media-body">Give back to the community</div>
          </li>
          <li className="media">
            <i className="fas fa-check"></i>
            <div className="media-body">Take someone under your wings</div>
          </li>
          <li className="media">
            <i className="fas fa-check"></i>
            <div className="media-body">Help resource constrained causes</div>
          </li>
          <li className="media">
            <i className="fas fa-check"></i>
            <div className="media-body">Make a difference</div>
          </li>
          <li className="media">
            <i className="fas fa-check"></i>
            <div className="media-body">Grow your network</div>
          </li>
          <li className="media">
            <i className="fas fa-check"></i>
            <div className="media-body">Earn volunteer hours</div>
          </li>
        </ul>
      </ContentModal>

      <ContentCenter id="information">
        <h2>More Information</h2>
        <p className="p-heading p-large">
          Want to know more about upcoming events, projects, or cause
          registrations? <br /> Please select your option below!
        </p>
        <CardGroup>
          <div className="card">
            <Link to="/events">
              <img
                className="card-image"
                src="images/_calendar2.svg"
                alt="alternative"
              />
              <div className="card-body">
                <h4 className="card-title">Upcoming Events</h4>
              </div>
            </Link>
          </div>

          <div className="card">
            <Link to="/projects">
              <img
                className="card-image"
                src="images/_projects3.svg"
                alt="alternative"
              />
              <div className="card-body">
                <h4 className="card-title">Our Projects</h4>
              </div>
            </Link>
          </div>

          <div className="card">
            <Link to="/causeRegistration">
              <img
                className="card-image"
                src="images/_signup2.svg"
                alt="alternative"
              />
              <div className="card-body">
                <h4 className="card-title">Cause Project Submission</h4>
              </div>
            </Link>
          </div>
        </CardGroup>
      </ContentCenter>

      <ContentCenter id="about" className="basic-4">
        <h2>Team YYC</h2>
        <p className="p-heading p-large">
          This is the team responsible for bringing Code The Change to life in
          Calgary. <br /> To contact them directly, please reach out via
          LinkedIn.
        </p>
        <h4>Student Executives</h4>
        <br />

        {executives.map((admin) => {
          return <CardExecMember admin={admin.node} key={admin.node.fullName} />
        })}
      </ContentCenter>

      <ContentCenter id="sponsors">
        <h2 className="mb-5">Sponsors</h2>
        {sponsors.map((sponsor) => {
          return (
            <Card
              img={
                <img
                  className="card-image"
                  src={sponsor.node.logoAsset.file.url}
                  alt={sponsor.node.logoAsset.title}
                />
              }
              key={sponsor.node.name}
            ></Card>
          )
        })}
        <div>
          {sponsorCount > 2 ? (
            <p className="p-large">+ {sponsorCount - 2} more!</p>
          ) : null}
          <Link className="btn-solid-lg m-4" to="/sponsors">
            Go to Sponsors page
          </Link>
        </div>
      </ContentCenter>

      <ContentCenter className="form-2" id="contact">
        <h2>Contact Information</h2>
        <ul className="list-unstyled li-space-lg">
          <li className="address">
            Since Code the Change YYC is composed of many students from multiple
            post-seconary institutions, the club needed a central place to hold
            events and gatherings. Benevity as a corporate partner graciously
            provides their office space for club events and meetups.
            <br /> Reach out to us on our
            <a
              className="turquoise mx-1"
              href="https://www.facebook.com/CodeTheChangeYYC/"
            >
              Facebook page
            </a>
            or via email at
            <a
              className="turquoise ml-1"
              href="mailto:codethechangeyyc@gmail.com"
            >
              codethechangeyyc@gmail.com
            </a>
            .
          </li>

          <li>
            <i className="fas fa-map-marker-alt"></i>611 Meredith Rd NE #700,
            Calgary, AB T2E 2W5, Canada
          </li>
        </ul>
        <div className="map-responsive">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2508.0794383966327!2d-114.05320568377702!3d51.05162097956288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53717002bfa848b5%3A0xde11feaa52802a04!2sBenevity%2C%20Inc.!5e0!3m2!1sen!2sca!4v1570403455129!5m2!1sen!2sca"
          ></iframe>
        </div>
      </ContentCenter>
    </Layout>
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
    allContentfulSponsor(
      sort: { fields: logoAsset___createdAt, order: ASC }
      limit: 2
    ) {
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
    allContentfulAdminTeamMember(sort: { fields: createdAt, order: ASC }) {
      edges {
        node {
          linkedIn
          fullName
          position
          profilePicture {
            file {
              url
            }
          }
          externalAdvisor
        }
      }
    }
  }
`
