import React from 'react'
import { Helmet } from 'react-helmet'
// import { withPrefix } from 'gatsby'

import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <>
      <Helmet>
        <html lang="en" />

        {/* Third Party Libraries */}
        <script
          async
          defer
          src="https://unpkg.com/@popperjs/core@2"
          type="text/javascript"
        ></script>
        <script
          async
          defer
          src="https://code.jquery.com/jquery-3.5.1.min.js"
          integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
          crossOrigin="anonymous"
        ></script>
        <script
          defer
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
          integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
          crossOrigin="anonymous"
        ></script>
        {/* <script
          async
          defer
          src={withPrefix('/js/scripts.js')}
          type="text/javascript"
        ></script> */}

        <link
          href="https://fonts.googleapis.com/css?family=Raleway:400,400i,600,700,700i&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/swiper/swiper-bundle.min.css"
        />

        <link href="https://maps.gstatic.com" rel="preconnect" />
        <link href="https://maps.gstatic.com" rel="dns-prefetch" />

        {/* Metadata */}
        <title>
          Code The Change YYC - Where Calgary's post-secondary Computer Science
          + Engineering changemakers come to make an impact working with causes.
        </title>
        <meta
          name="description"
          content="Code the Change YYC - Where Calgary's post-secondary computer science and engineering changemakers come to make an impact working with causes."
        />

        {/* SEO */}
        <script type="application/ld+json">
          {`
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "url": "https://codethechangeyyc.ca",
          "name": "Code the Change YYC",
          "contactPoint": {
            "@type": "ContactPoint",
            "email": "codethechangeyyc@gmail.com",
          }
        }
      `}
        </script>

        <meta property="og:site_name" content="Code The Change yyc" />
        <meta property="og:site" content="https://www.codethechangeyyc.ca" />
        <meta property="og:title" content="Code The Change YYC" />
        <meta
          property="og:description"
          content="Where Calgary's post-secondary computer science and engineering changemakers come to make an impact working with causes."
        />
        <meta
          property="og:image"
          content="https://codethechangeyyc.ca/images/_logo.jpg"
        />
        <meta property="og:url" content="https://www.codethechangeyyc.ca" />
        <meta property="og:type" content="article" />
      </Helmet>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
