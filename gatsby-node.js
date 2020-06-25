// graphql function doesn't throw an error so we have to check to check for the result.errors to throw manually
const wrapper = (promise) =>
  promise.then((result) => {
    if (result.errors) {
      throw result.errors
    }
    return result
  })

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const projectTemplate = require.resolve('./src/templates/project.tsx')

  const result = await wrapper(
    graphql(`
      {
        projects: allMdx {
          nodes {
            frontmatter {
              slug
              images
            }
          }
        }
      }
    `)
  )

  result.data.projects.nodes.forEach((node) => {
    createPage({
      path: node.frontmatter.slug,
      component: projectTemplate,
      context: {
        slug: node.frontmatter.slug,
        images: `/projects-${node.frontmatter.images}/`,
      },
    })
  })
}
