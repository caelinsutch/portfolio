import React from 'react'
import { graphql, Link } from 'gatsby'
import { readableColor } from 'polished'
import styled from 'styled-components'
import { config, useSpring, animated } from 'react-spring'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/layout'
import { AnimatedBox, Button } from '../elements'
import SEO from '../components/SEO'
import { Container } from '../styles/shared'

const PBox = styled(AnimatedBox)`
  max-width: 1400px;
  margin: 0 auto;
`

const CategoryWrapper = styled(AnimatedBox)`
  letter-spacing: 0.05em;
  font-size: ${(props) => props.theme.fontSizes[1]};
  text-transform: uppercase;
`

const Description = styled(animated.div)`
  max-width: 960px;
  letter-spacing: -0.003em;
  --baseline-multiplier: 0.179;
  --x-height-multiplier: 0.35;
  line-height: 1.58;
`

const PButton = styled(Button)<{ color: string }>`
  background: ${(props) => (props.color === 'white' ? 'black' : props.color)};
  color: ${(props) => readableColor(props.color === 'white' ? 'black' : props.color)};
`

type PageProps = {
  data: {
    project: {
      body: any
      frontmatter: {
        title_detail: string
        color: string
        category: string
        categories: string[]
        desc: string
        slug: string
        cover: {
          childImageSharp: {
            resize: {
              src: string
            }
          }
        }
      }
    }
  }
}

const Project: React.FunctionComponent<PageProps> = ({
  data: {
    project: { frontmatter, body },
  },
}) => {
  const categoryAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0, transform: 'translate3d(0, -30px, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
  })

  const titleAnimation = useSpring({ config: config.slow, delay: 300, from: { opacity: 0 }, to: { opacity: 1 } })
  const descAnimation = useSpring({ config: config.slow, delay: 600, from: { opacity: 0 }, to: { opacity: 1 } })

  return (
    <Layout color={frontmatter.color}>
      <SEO
        pathname={frontmatter.slug}
        title={`${frontmatter.title_detail} | Caelin Sutch`}
        desc={frontmatter.desc}
        banner={frontmatter.cover.childImageSharp.resize.src}
        individual
      />
      <PBox py={10}>
        <Container>
          <CategoryWrapper style={categoryAnimation}>{frontmatter.categories.join(', ')}</CategoryWrapper>
          <animated.h1 style={titleAnimation}>{frontmatter.title_detail}</animated.h1>
          <Description style={descAnimation}>
            <div dangerouslySetInnerHTML={{ __html: frontmatter.desc }} />
            <MDXRenderer>{body}</MDXRenderer>
          </Description>
        </Container>
      </PBox>
      <PBox style={{ textAlign: 'center' }} py={10} px={[6, 6, 8, 10]}>
        <h2>Interested in my work?</h2>
        <PButton color={frontmatter.color} py={4} px={8}>
          <Link to="/about" style={{ textDecoration: 'none', color: 'white' }}>
            Schedule a Meeting with Me
          </Link>
        </PButton>
      </PBox>
    </Layout>
  )
}

export default Project

export const query = graphql`
  query ProjectTemplate($slug: String!) {
    project: mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title_detail
        color
        category
        categories
        desc
        slug
        cover {
          childImageSharp {
            resize(width: 1200, height: 675, quality: 80) {
              src
            }
          }
        }
      }
    }
  }
`
