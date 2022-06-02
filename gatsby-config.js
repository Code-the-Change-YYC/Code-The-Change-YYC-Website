require('dotenv').config()

module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: `${process.env.CONTENTFUL_SPACEID}`,
        accessToken: `${process.env.CONTENTFUL_ACCESS_LIVE}`,
      },
    },
    {
      // Google Tag Manager Script. MUST come BEFORE the Analytics script.
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: `${process.env.GA_GTM}`,

        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,
      },
    },
    {
      // Google Analytics Script. MUST come AFTER the Tag Manager script.
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: `${process.env.GA_TRACKING}`,
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: false,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ['/preview/**', '/do-not-track/me/too/'],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 500,
        // Defers execution of google analytics script until after page load
        defer: false,
        // Any additional optional fields
        sampleRate: 100,
      },
    },
    'gatsby-plugin-transition-link',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Code the Change YYC',
        short_name: 'CTC YYC',
        start_url: '/',
        background_color: '#f7fcfd',
        theme_color: '#00bfd8',
        display: 'standalone',
        icon: 'static/images/_favicon.png'
      },
    },
  ],
}
