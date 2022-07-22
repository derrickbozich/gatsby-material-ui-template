module.exports = {
  siteMetadata: {
    title: `Brothertiger`,
    description: `Luke Demo`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-transition-link`,


    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
        defaults: {
          formats: [`auto`, `webp`, `avif`],
          // placeholder: `dominantColor`,
          quality: 70,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
          // tracedSVGOptions: {},
          // blurredOptions: {},
          // jpgOptions: {},
          // pngOptions: {},
          // webpOptions: {},
          // avifOptions: {},
        }
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    // `gatsby-theme-material-ui`,
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint:
          'https://soundofceres.us9.list-manage.com/subscribe/post?u=10632f26f29adaec28fb52e8c&id=ec3cd1db93', // add your MC list endpoint here; see instructions below
      },
    },
    {
      resolve: `gatsby-theme-material-ui`,
      options: {
        webFontsConfig: {
          fonts: {
            google: [
              {
                family: `Cormorant Garamond`,
                variants: [`300`, `400`, `500`, `700`],
              },
              {
                family: `Red Hat Text`,
                variants: [`400`,`600`,`700`],
              },
              {
                family: `Red Hat Mono`,
                variants: [`400`,],
              },
              {
                family: `Red Hat Display`,
                variants: [`400`,'600'],
              },
            ],
          },
        },
      },
    },
    `gatsby-plugin-sass`,
  ],
}
