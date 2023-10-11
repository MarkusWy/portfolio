const path = require(`path`)
// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}
// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/BlogPostTemplate.js`)
  const result = await graphql(`
    query {
      allPrismicBlogPost {
        edges {
          node {
            id
            href
            lang
            prismicId
            data {
              main_image {
                url
                localFile {
                  absolutePath
                }
              }
              blog_post_content {
                prismic_wysiwyg {
                  html
                }
              }
              post_title {
                text
              }
            }
          }
        }
      }
    }
  `)
  result.data.allPrismicBlogPost.edges.forEach(edge => {
    createPage({
      path: `${edge.node.data.post_title.text}`,
      component: blogPostTemplate,
      context: {
        title: edge.node.data.post_title.text,
        postContent: edge.node.data.blog_post_content
      },
    })
  })
}