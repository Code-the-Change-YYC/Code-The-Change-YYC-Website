import React from 'react'
import { Helmet } from 'react-helmet'

import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <>
      <Helmet>
        <html lang='en' />

        {/* Third Party Libraries */}

        <link
          href='https://fonts.googleapis.com/css?family=Raleway:400,400i,600,700,700i&display=swap'
          rel='stylesheet'
          media='all'
        />

        <link href='https://maps.googleapis.com' rel='preconnect' />
        <link href='https://maps.gstatic.com' rel='preconnect' />
        <link href='https://www.googletagmanager.com' rel='preconnect' />
        <link href='https://www.google-analytics.com' rel='preconnect' />

        {/* Metadata */}
        <title>
          Code The Change YYC - Where Calgary&apos;s post-secondary Computer Science + Engineering
          changemakers come to make an impact working with causes.
        </title>
        <meta
          name='description'
          content="Code the Change YYC - Where Calgary's post-secondary computer science and engineering changemakers come to make an impact working with causes."
        />

        {/* SEO */}
        <script type='application/ld+json'>
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

        <meta property='og:site_name' content='Code The Change yyc' />
        <meta property='og:site' content='https://www.codethechangeyyc.ca' />
        <meta property='og:title' content='Code The Change YYC' />
        <meta
          property='og:description'
          content="Where Calgary's post-secondary computer science and engineering changemakers come to make an impact working with causes."
        />
        <meta property='og:image' content='https://codethechangeyyc.ca/images/_logo.jpg' />
        <meta property='og:url' content='https://www.codethechangeyyc.ca' />
        <meta property='og:type' content='article' />
      </Helmet>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
