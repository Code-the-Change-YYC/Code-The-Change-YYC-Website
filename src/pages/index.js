import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

import { ContentLeft, ContentRight, ContentCenter } from "../components/Content"
import { CardGroup, Card } from "../components/Card"
import { Modal } from "../components/Modal"
import MemberExec from "../components/MemberExec"

export default function Home({ location }) {
  console.log("index")
  return (
    <Layout location={location}>
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

      <div
        id="details-lightbox-1"
        class="lightbox-basic zoom-anim-dialog mfp-hide"
      >
        <div class="container">
          <div class="row">
            <button
              title="Close (Esc)"
              type="button"
              class="mfp-close x-button"
            >
              ×
            </button>
            <div class="col-lg-8">
              <div class="image-container">
                <img
                  class="img-fluid"
                  src="images/_rockets.jpg"
                  alt="alternative"
                />
              </div>
            </div>
            <div class="col-lg-4">
              <h3>Student Information</h3>
              <hr />
              <h5>What's in it for you?</h5>
              <p>
                You will be a part of a small team of programming students and
                will work together on projects to help charities and non-profits
                who don’t have the means to otherwise access expert technical
                services.
              </p>
              <p>
                You will also receive mentorship from senior programmers and
                technical leaders from around Calgary to expand your skillset
                and gain experience applying what you’ve learned in school to
                solve real-life problems.
              </p>
              <ul class="list-unstyled li-space-lg">
                <li class="media">
                  <i class="fas fa-check"></i>
                  <div class="media-body">
                    Network with likeminded individuals
                  </div>
                </li>
                <li class="media">
                  <i class="fas fa-check"></i>
                  <div class="media-body">Work on real world problems</div>
                </li>
                <li class="media">
                  <i class="fas fa-check"></i>
                  <div class="media-body">Get some real world experience</div>
                </li>
                <li class="media">
                  <i class="fas fa-check"></i>
                  <div class="media-body">Work with industry mentors</div>
                </li>
                <li class="media">
                  <i class="fas fa-check"></i>
                  <div class="media-body">
                    Use the power of technology for good
                  </div>
                </li>
              </ul>
              <a class="btn-solid-reg mfp-close page-scroll" href="/projects">
                PROJECTS
              </a>
              <a
                class="btn-outline-reg mfp-close as-button"
                href="#screenshots"
              >
                BACK
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        id="details-lightbox-2"
        class="lightbox-basic zoom-anim-dialog mfp-hide"
      >
        <div class="container">
          <div class="row">
            <button
              title="Close (Esc)"
              type="button"
              class="mfp-close x-button"
            >
              ×
            </button>
            <div class="col-lg-8">
              <div class="image-container">
                <img
                  class="img-fluid"
                  src="images/_causesVector.jpg"
                  alt="alternative"
                />
              </div>
            </div>
            <div class="col-lg-4">
              <h3>Cause Information</h3>
              <hr />
              <h5>How will this work?</h5>
              <p>
                Project selection will be based on participating student group
                capacity, and skillset.
              </p>
              <p>
                Student groups will assign a member of their team to communicate
                with the cause over the course of the year. Your committment
                level will depend on the project. There is going to be ample
                oppotunities for regular check-ins with the team to provide
                feedback, guidance, and ensure they have all requirements and
                specifications to do their work.
              </p>
              <ul class="list-unstyled li-space-lg">
                <li class="media">
                  <i class="fas fa-check"></i>
                  <div class="media-body">Get fresh perspectives</div>
                </li>
                <li class="media">
                  <i class="fas fa-check"></i>
                  <div class="media-body">Mentor young minds</div>
                </li>
                <li class="media">
                  <i class="fas fa-check"></i>
                  <div class="media-body">Outsource technical work</div>
                </li>
                <li class="media">
                  <i class="fas fa-check"></i>
                  <div class="media-body">
                    Build a thorough technical solution
                  </div>
                </li>
              </ul>
              <a class="btn-solid-reg mfp-close page-scroll" href="causes.html">
                REGISTER
              </a>{" "}
              <a
                class="btn-outline-reg mfp-close as-button"
                href="#screenshots"
              >
                BACK
              </a>
            </div>
          </div>
        </div>
      </div>

      <ContentCenter>
        <h2>More Information</h2>
        <p class="p-heading p-large">
          Want to know more about upcoming events, projects, or cause
          registrations? <br /> Please select your option below!
        </p>
        <CardGroup>
          <div class="card">
            <a href="events.html">
              <img
                class="card-image"
                src="images/_calendar2.svg"
                alt="alternative"
              />
              <div class="card-body">
                <h4 class="card-title">Upcoming Events</h4>
              </div>
            </a>
          </div>

          <div class="card">
            <a href="/projects">
              <img
                class="card-image"
                src="images/_projects3.svg"
                alt="alternative"
              />
              <div class="card-body">
                <h4 class="card-title">Our Projects</h4>
              </div>
            </a>
          </div>

          <div class="card">
            <a href="causes.html">
              <img
                class="card-image"
                src="images/_signup2.svg"
                alt="alternative"
              />
              <div class="card-body">
                <h4 class="card-title">Cause Project Submission</h4>
              </div>
            </a>
          </div>
        </CardGroup>
      </ContentCenter>

      <ContentCenter className="basic-4">
        <h2>Team YYC</h2>
        <p class="p-heading p-large">
          This is the team responsible for bringing Code The Change to life in
          Calgary. <br /> To contact them directly, please reach out via
          LinkedIn.
        </p>
        <h4>Student Executives</h4>
        <br />

        <MemberExec
          src="images/_team/_cole-colorcorrected.jpg"
          href="https://www.linkedin.com/in/ckthiessen"
        >
          <p className="p-large">
            <strong>Cole Thiessen</strong>
          </p>
          <p className="job-title">Co-President</p>
        </MemberExec>

        <MemberExec
          src="images/_team/_ariba.jpg"
          href="https://www.linkedin.com/in/aribaanees"
        >
          <p class="p-large">
            <strong>Ariba Anees</strong>
          </p>
          <p class="job-title">Co-President</p>
        </MemberExec>

        <MemberExec
          src="images/_team/_dustin-centered.jpg"
          href="https://www.linkedin.com/in/dustin-king-30932a193"
        >
          <p class="p-large">
            <strong>Dustin King</strong>
          </p>
          <p class="job-title">VP of Finance</p>
        </MemberExec>

        <MemberExec
          src="images/_team/_cjpg.jpg"
          href="https://www.linkedin.com/in/cgarrovillo"
        >
          <p class="p-large">
            <strong>Christian Garrovillo</strong>
          </p>
          <p class="job-title">VP of Marketing</p>
        </MemberExec>

        <MemberExec
          src="images/_team/_jj.jpg"
          href="https://www.linkedin.com/in/jofred-cayabyab"
        >
          <p class="p-large">
            <strong>JayJay Cayabyab</strong>
          </p>
          <p class="job-title">Tech Director</p>
        </MemberExec>

        <MemberExec
          src="images/_team/_avneet.jpg"
          href="https://www.linkedin.com/in/avneet-gill-223a87177"
        >
          <p class="p-large">
            <strong>Avneet Gill</strong>
          </p>
          <p class="job-title">VP of Tech</p>
        </MemberExec>
      </ContentCenter>

      <ContentCenter>
        <h2>Sponsors</h2>
      </ContentCenter>

      <ContentCenter className="form-2">
        <h2>Contact Information</h2>
        <ul class="list-unstyled li-space-lg">
          <li class="address">
            Since Code the Change YYC is composed of many students from multiple
            post-seconary institutions, the club needed a central place to hold
            events and gatherings. Benevity as a corporate partner graciously
            provides their office space for club events and meetups.
            <br /> Reach out to us on our{" "}
            <a href="https://www.facebook.com/CodeTheChangeYYC/">
              Facebook page
            </a>{" "}
            or via email at{" "}
            <a class="turquoise" href="mailto:codethechangeyyc@gmail.com">
              codethechangeyyc@gmail.com
            </a>
            .
          </li>

          <li>
            <i class="fas fa-map-marker-alt"></i>611 Meredith Rd NE #700,
            Calgary, AB T2E 2W5, Canada
          </li>
        </ul>
        <div class="map-responsive">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2508.0794383966327!2d-114.05320568377702!3d51.05162097956288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53717002bfa848b5%3A0xde11feaa52802a04!2sBenevity%2C%20Inc.!5e0!3m2!1sen!2sca!4v1570403455129!5m2!1sen!2sca"
            allowfullscreen=""
          ></iframe>
        </div>
      </ContentCenter>
    </Layout>
  )
}
