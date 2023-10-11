/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
require("dotenv").config();

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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Markus Wyrin Portfolio`,
        short_name: `Markus Wyrin`,
        start_url: `/`,
        background_color: `#0073ec`,
        theme_color: `#ffff00`,
        display: `standalone`,
        icon: `src/icons/markus.webp`, // This path is relative to the root of the site.
        icon_options: {
          // For all the options available,
          // please see the section "Additional Resources" below.
          purpose: `any maskable`,
        },
        cache_busting_mode: 'none', // this is a fi for offline caching
      },
    },
    {
      // gatsby-plugin-offline needs to be after gatsby-plugin-manifest
      resolve: 'gatsby-plugin-offline',
      options: {
         workboxConfig: {
            globPatterns: ['**/markus*']
         }
      }
   },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    {
			resolve: "gatsby-source-prismic",
			/**
			 * @type {import("gatsby-source-prismic").PluginOptions}
			 */
			options: {
				repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
				accessToken: process.env.PRISMIC_ACCESS_TOKEN,
				customTypesApiToken: process.env.PRISMIC_CUSTOM_TYPES_API_TOKEN,
				routes: [
					{
						type: "blog_post",
						path: "/blog_post/:uid",
					},
				],
			},
		},
    // {
    //   resolve: `gatsby-source-prismic`,
    //   options: {
    //     repositoryName: `${process.env.GATSBY_PRISMIC_REPO_NAME}`,
    //     accessToken: `${process.env.API_KEY}`,
    //     linkResolver: ({ node, key, value }) => post => `/${post.uid}`,
    //     schemas: {
    //       post: require("./custom_types/post.json"),
    //     },
    //   },
    // },
    `gatsby-transformer-sharp`, // Needed for dynamic images
    `gatsby-plugin-sass`,
  ],
}
