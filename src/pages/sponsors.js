import React from 'react'
import { graphql, Link } from 'gatsby'

import { ContentCenter } from '../components/Content'
import { CardGroup, Card, CardExecMember } from '../components/Card'

export default function SponsorsAndAdvisors({ data }) {
  const advisors =
    data.allContentfulAdminTeamMember.edges.filter(
      (admin) => admin.node.externalAdvisor
    ) || []

  const sponsorshipProposal = data.allContentfulAsset.edges[0].node
  return (
    <>
      <header id="header" className="ex-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>Team Sponsors</h1>
            </div>
          </div>
        </div>
      </header>

      <ContentCenter>
        <p className="p-heading p-large mb-0">
          We are continously pursuing endeavours that could help students
          achieve more social good for the community. These are the sponsors
          that help make our events and ideas possible.
        </p>
      </ContentCenter>

      <ContentCenter>
        <CardGroup>
          {data.allContentfulSponsor.edges.map((edge) => {
            return (
              <Card
                img={
                  <img
                    className="card-image"
                    src={edge.node.logoAsset.file.url}
                    alt={edge.node.logoAsset.title}
                  />
                }
                key={edge.node.name}
                href={edge.node.sponsorWebsite}
              >
                <h4>{edge.node.name}</h4>
              </Card>
            )
          })}
        </CardGroup>
      </ContentCenter>

      <ContentCenter className="basic-4">
        <h2 className="mb-5">External Advisors</h2>
        {advisors.map((admin) => {
          return <CardExecMember admin={admin.node} key={admin.node.fullName} />
        })}
      </ContentCenter>

      <ContentCenter className="mb-5">
        <p className="p-heading p-large mb-4">
          Want to help shape the future of Code the Change YYC? Feel free to
          reach out to us and we'd love to discuss your involvement.
        </p>
        <Link className="btn-solid-lg page-scroll mx-1" to="/#contact">
          Contact us
        </Link>
        <a
          className="btn-solid-lg page-scroll mx-1"
          href={sponsorshipProposal.file.url}
        >
          Sponsorship Proposal
        </a>
      </ContentCenter>
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
