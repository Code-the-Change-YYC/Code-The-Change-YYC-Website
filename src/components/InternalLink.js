import React from "react"
import { Link } from "gatsby"

/** Workaround
 * Since the theme's CSS and JS are tightly coupled to work together,
 * this workaround is to ensure functionality when clicking <a> whose behaviour should
 * trigger animations and scrolls.
 * Determines whether a link includes a '#' and renders a regular <a> or a Gatsby
 * <Link> when not.
 */
export const InternalLink = ({ location, to, children }) => {
  // console.log(`location: ${location.pathname}`)
  // console.log(`to: ${to}`)
  let path = ""
  if (to.includes("#")) {
    if (to.includes(location.pathname)) {
      path = to.substr(to.indexOf("#"), to.length)
      return (
        <a className="nav-link page-scroll" href={path}>
          {children}
        </a>
      )
    }
  }
  return (
    <Link className="nav-link page-scroll" to={to}>
      {children}
    </Link>
  )
}
