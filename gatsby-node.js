const parse = require('node-html-parser').default;
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

    const postContent = edge.node.data.blog_post_content;

    // This is used to create responsive images from prismic wysiwyg data for our blog posts.
    const transformedPostContent = postContsent.map(post => {
      // This gets the content inside quotes ""
      const srcRegex = /"(.*?)"/g;
      // This gets the whole image tag from opening to closing />
      const imgRegex = /<img[^>]+>/g;
      // Gets an array of image elements from the wysiwyg html string
      const imgElements = [...post.prismic_wysiwyg.html.match(imgRegex) || []];
    
      // We loop through and create a srcset for each image element
      imgElements.forEach(imgElement => {
        // This gets the image tag string
        const imgPath = imgElement.match(srcRegex)[0];

        // we prep our sources
        const srcExtraSmall = `<source media="(min-width:300px)" srcset=${imgPath.replace('compress,format', 'compress,format&width=300&ar=1:1&fit=crop')}/>`
        const srcSmall = `<source media="(min-width:650px)" srcset=${imgPath.replace('compress,format', 'compress,format&width=650&ar=1:1&fit=crop')}/>`
        const srcMedium = `<source media="(min-width:1000px)" srcset=${imgPath.replace('compress,format', 'compress,format&width=1000&ar=1:1&fit=crop')}/>`
        const srcLarge = `<source media="(min-width:1500px)" srcset=${imgPath.replace('compress,format', 'compress,format&width=1500&ar=1:1&fit=crop')}/>`

        // We inject the sources into the html string
        post.prismic_wysiwyg.html = post.prismic_wysiwyg.html.replace(imgElement, `<picture>${srcLarge}${srcMedium}${srcSmall}${srcExtraSmall}${imgElement}</picture>`);
      });

      return post;
    });

    createPage({
      path: `${edge.node.data.post_title.text}`,
      component: blogPostTemplate,
      context: {
        title: edge.node.data.post_title.text,
        postContent: transformedPostContent
      },
    })
  })
}