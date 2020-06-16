import React from "react"

export default function MemberExec({ src, children, href }) {
  return (
    <div className="team-member">
      <div className="image-wrapper">
        <img className="img-fluid" src={src} alt="alternative" />
      </div>
      {children}
      <span className="social-icons">
        <span className="fa-stack">
          <a href={href}>
            <i className="fas fa-circle fa-stack-2x"></i>
            <i className="fab fa-linkedin-in fa-stack-1x"></i>
          </a>
        </span>
      </span>
    </div>
  )
}
