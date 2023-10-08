/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Markus Wyrin Portfolio`,
    description: `Markus Wyrins portfolio site`,
    linkedInUsername: `markus-wyrin`,
    image: `/gatsby-icon.png`,
    siteUrl: `https://www.markus.wyrin.se`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts the following options, all of which are defined by `@emotion/babel-plugin` plugin.
        // The values for each key in this example are the defaults the plugin uses.
        sourceMap: true,
        autoLabel: "dev-only",
        labelFormat: `[local]`,
        cssPropOptimization: true,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: '/src/icons/' // See below to configure properly
        }
      }
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en-GB'
      }
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    `gatsby-plugin-sass`,

  ],
}
