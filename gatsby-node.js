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
  const blogPostListingTemplate = path.resolve(`src/templates/BlogPostListingTemplate.js`)
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
              post_tag
              main_image {
                gatsbyImageData
                # dimensions {
                #   width
                #   height
                # }
              }
              blog_post_content {
                prismic_wysiwyg {
                  html
                }
                section_id
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

  const titleToPath = (title) => `${title.replaceAll(' ', '-').toLowerCase().replaceAll('---', '-').replaceAll('c#', 'csharp')}/`;

  const getMainImages = (edgesArray) => {
    return edgesArray.map(edge => {
      return {
        image: edge.node.data.main_image.gatsbyImageData.images,
        tag: edge.node.data.post_tag,
        title: edge.node.data.post_title.text,
        path: `/${titleToPath(edge.node.data.post_title.text)}`,
      }
    })
  }

  createPage({
    path: '/posts',
    component: blogPostListingTemplate,
    context: {
      posts: getMainImages(result.data.allPrismicBlogPost.edges),
    },
  })

  result.data.allPrismicBlogPost.edges.forEach(edge => {

    const mainImage = edge.node.data.main_image;
    const postContent = edge.node.data.blog_post_content;

    // This is used to create responsive images from prismic wysiwyg data for our blog posts.
    const transformedPostContent = postContent.map(post => {
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

        const withImgixParams = (params) => (imgPath.replace('compress,format', `compress,format${params}`)).replaceAll('"', '');
        const fullSrcSet = `"${withImgixParams('&width=1500&ar=1:1&fit=fill&fill=solid&bg=FFFFFF 1500w')}, ${withImgixParams('&width=1000&ar=1:1&fit=fill&fill=solid&bg=FFFFFF 1000w')}, ${withImgixParams('&width=500&ar=1:1&fit=fill&fill=solid&bg=FFFFFF 500w')}, ${withImgixParams('&width=300&ar=1:1&fit=fill&fill=solid&bg=FFFFFF 300w')}"`

        // data-srcset is replaced in the front-end at runtime with srcset for blur-up effect
        const source = `<source sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 500px" data-srcset=${fullSrcSet}/>`
        const imgPlaceholder = imgElement.replace('compress,format', 'compress,format&width=64&ar=1:1&fit=fill&fill=solid&bg=FFFFFF').replace('<img src=', '<img loading=lazy src=');

        // We inject the sources into the html string
        post.prismic_wysiwyg.html = post.prismic_wysiwyg.html.replace(imgElement, `<picture>${source}${imgPlaceholder}</picture>`);
      });

      return post;
    });

    console.log('this is the path', titleToPath(edge.node.data.post_title.text));

    createPage({
      path: titleToPath(edge.node.data.post_title.text),
      component: blogPostTemplate,
      context: {
        title: edge.node.data.post_title.text,
        postContent: transformedPostContent,
        mainImage: mainImage,
      },
    })
  })
}