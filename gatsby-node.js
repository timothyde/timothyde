const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Query all Pages with their IDs and template data.
  const pages = await graphql(`
    query PostsQuery {
      posts: allPrismicBlogPost {
        nodes {
          data {
            teaser {
              text
            }
            subtitle {
              text
            }
            title {
              text
            }
            text {
              html
            }
            image {
              alt
              url
            }
          }
          uid
          id
          first_publication_date
        }
      }
    }
  `)

  const postTemplate = path.resolve(
    './src/components/templates/postTemplate.js'
  )

  // Create pages for each Post in Prismic.
  pages.data.posts.nodes.forEach(node => {
    console.log('node.uid', node.uid)
    createPage({
      path: `/blog/${node.uid}`,
      component: postTemplate,
      context: {
        ...node,
      },
    })
  })
}
