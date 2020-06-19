import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"

import { Helmet } from "react-helmet"
import { withPrefix } from "gatsby"

export default function Layout({ children, location }) {
  return (
    <>
      <Helmet>
        <script
          defer
          src={withPrefix("/js/popper.min.js")}
          type="text/javascript"
        ></script>
        <script
          defer
          src={withPrefix("/js/jquery.min.js")}
          type="text/javascript"
        ></script>
        <script
          defer
          src={withPrefix("/js/bootstrap.min.js")}
          type="text/javascript"
        ></script>
        <script
          defer
          src={withPrefix("/js/jquery.easing.min.js")}
          type="text/javascript"
        ></script>
        <script
          defer
          src={withPrefix("js/swiper.min.js")}
          type="text/javascript"
        ></script>
        <script
          defer
          src={withPrefix("/js/jquery.magnific-popup.js")}
          type="text/javascript"
        ></script>
        <script
          defer
          src={withPrefix("/js/validator.min.js")}
          type="text/javascript"
        ></script>
        <script
          defer
          src={withPrefix("/js/scripts.js")}
          type="text/javascript"
        ></script>

        <link
          href={withPrefix("/css/magnific-popup.css")}
          rel="stylesheet"
          type="text/css"
        />
        <link
          href={withPrefix("css/bootstrap.css")}
          rel="stylesheet"
          type="text/css"
        />
        <link
          href={withPrefix("/css/fontawesome-all.css")}
          rel="stylesheet"
          type="text/css"
        />
        <link
          href={withPrefix("/css/swiper.css")}
          rel="stylesheet"
          type="text/css"
        />
        <link
          href={withPrefix("css/styles.css")}
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Raleway:400,400i,600,700,700i&amp;subset=latin-ext"
          rel="stylesheet"
        />
      </Helmet>
      <Navbar location={location} />
      {children}
      <Footer />
    </>
  )
}
