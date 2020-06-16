import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

import { withPrefix } from "gatsby"

// This file is to insert custom HTML into the <head>;
// Needed for inserting our external CSS;
// Which is needed for the theme to work
export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
        <link
          href="https://fonts.googleapis.com/css?family=Raleway:400,400i,600,700,700i&amp;subset=latin-ext"
          rel="stylesheet"
        />
        <link href="css/styles.css" rel="stylesheet" type="text/css" />
        <link href="css/bootstrap.css" rel="stylesheet" type="text/css" />
        <link
          href="/css/fontawesome-all.css"
          rel="stylesheet"
          type="text/css"
        />
        <link href="/css/swiper.css" rel="stylesheet" type="text/css" />
        <link href="/css/magnific-popup.css" rel="stylesheet" type="text/css" />

        <script defer src="/js/jquery.min.js" type="text/javascript"></script>
        <script defer src="/js/popper.min.js" type="text/javascript"></script>
        <script
          defer
          src="/js/bootstrap.min.js"
          type="text/javascript"
        ></script>
        <script
          defer
          src="/js/jquery.easing.min.js"
          type="text/javascript"
        ></script>
        <script defer src="js/swiper.min.js" type="text/javascript"></script>
        <script
          defer
          src="/js/jquery.magnific-popup.js"
          type="text/javascript"
        ></script>
        <script
          defer
          src="/js/validator.min.js"
          type="text/javascript"
        ></script>
        <script defer src="/js/scripts.js" type="text/javascript"></script>
      </head>
      <body
        data-spy="scroll"
        data-target=".fixed-top"
        {...props.bodyAttributes}
      >
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
