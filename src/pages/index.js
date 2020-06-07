import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

import { ContentLeft, ContentRight, ContentCenter } from "../components/Content"
import { CardGroup, Card } from "../components/Card"
import { Modal } from "../components/Modal"
import InternalLink from "../components/InternalLink"

export default function Home({ location }) {
  return (
    <Layout location={location}>
      <header id="header" className="header">
        <div className="header-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="text-container">
                  <h1>
                    <span className="turquoise">Code The Change</span>
                    <span className="red">YYC</span>
                  </h1>
                  <p className="p-large">
                    Welcome to the Calgary chapter of Code The Change.
                  </p>
                  <div className="row btn-group">
                    <div className="col-sm-auto p-0">
                      <div className="col p-0">
                        <a
                          className="btn-solid-lg page-scroll m-1"
                          href="#students"
                        >
                          Students
                        </a>
                        <a
                          className="btn-solid-lg page-scroll m-1"
                          href="#causes"
                        >
                          Causes
                        </a>
                      </div>
                      <div className="w-100"></div>
                      <div className="col p-0">
                        <a
                          className="btn-solid-lg page-scroll m-1"
                          href="#mentors"
                        >
                          Mentors
                        </a>
                        <a
                          className="btn-solid-lg page-scroll m-1"
                          href="sponsors.html"
                        >
                          Sponsors
                        </a>
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

      <ContentCenter id="schools">
        <h2>Post-Secondary Representation</h2>
        <p className="p-heading p-large">
          We have student members, typically in Computer Science and Engineering
          programs, from the following post-secondary institutions in Calgary.
        </p>
        <CardGroup>
          <Card
            href="#about"
            src="images/_uofc.png"
            alt="University of Calgary"
          />
          <Card
            href="#about"
            src="images/_mru.png"
            alt="Mount Royal University"
          />
          <Card
            href="#about"
            src="images/_sait.png"
            alt="Southern Alberta Institute of Technology"
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
            className="btn-solid-reg popup-with-move-anim"
            href="#details-lightbox-1"
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
            className="btn-solid-reg popup-with-move-anim"
            href="#details-lightbox-2"
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
          If you have a potential project, please complete a{" "}
          <a href="causes.html">cause project submission</a>
        </p>
      </ContentRight>

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
            className="btn-solid-reg popup-with-move-anim"
            href="#details-lightbox-3"
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

      <Modal
        id="details-lightbox-1"
        img={
          <img
            className="img-fluid"
            src="images/_rockets.jpg"
            alt="alternative"
          />
        }
        a={
          <a
            className="btn-solid-reg mfp-close page-scroll"
            href="projects.html"
          >
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
      </Modal>
    </Layout>
  )
}
