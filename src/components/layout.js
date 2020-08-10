import React from 'react'
import { Helmet } from 'react-helmet'
import { withPrefix } from 'gatsby'

import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <>
      <Helmet>
        <script
          defer
          src="https://unpkg.com/@popperjs/core@2"
          type="text/javascript"
        ></script>
        <script
          defer
          src="https://code.jquery.com/jquery-3.5.1.min.js"
          integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
          crossorigin="anonymous"
        ></script>
        <script
          defer
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
          integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
          crossorigin="anonymous"
        ></script>
        <script
          defer
          src="https://unpkg.com/swiper/swiper-bundle.min.js"
        ></script>
        <script
          defer
          src={withPrefix('/js/jquery.easing.min.js')}
          type="text/javascript"
        ></script>
        <script
          defer
          src={withPrefix('/js/validator.min.js')}
          type="text/javascript"
        ></script>
        <script
          defer
          src={withPrefix('/js/scripts.js')}
          type="text/javascript"
        ></script>

        <link
          defer
          href="https://fonts.googleapis.com/css?family=Raleway:400,400i,600,700,700i&amp;subset=latin-ext"
          rel="stylesheet"
        />
        <link
          defer
          rel="stylesheet"
          href="https://unpkg.com/swiper/swiper-bundle.min.css"
        />

        <title>
          Code The Change YYC - Where Calgary's post-secondary Computer Science
          + Engineering changemakers come to make an impact working with causes.
        </title>
      </Helmet>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
