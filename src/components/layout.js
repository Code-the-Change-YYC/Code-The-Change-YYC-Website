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
          src={withPrefix('/js/popper.min.js')}
          type="text/javascript"
        ></script>
        <script
          defer
          src={withPrefix('/js/jquery.min.js')}
          type="text/javascript"
        ></script>
        <script
          defer
          src={withPrefix('/js/bootstrap.min.js')}
          type="text/javascript"
        ></script>
        <script
          defer
          src={withPrefix('/js/jquery.easing.min.js')}
          type="text/javascript"
        ></script>
        <script
          defer
          src={withPrefix('js/swiper.min.js')}
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
          href="https://fonts.googleapis.com/css?family=Raleway:400,400i,600,700,700i&amp;subset=latin-ext"
          rel="stylesheet"
        />
      </Helmet>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
