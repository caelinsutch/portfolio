import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { animated, useSpring, config } from 'react-spring'
import Layout from '../components/layout'
import GridItem from '../components/grid-item'
import SEO from '../components/SEO'
import { ChildImageSharp } from '../types'
import { Container } from '../styles/shared'

type PageProps = {
  data: {
    projects: {
      nodes: {
        frontmatter: {
          title: string
          slug: string
          categories: string[]
          cover: ChildImageSharp
        }
      }[]
    }
  }
}

const Intro = styled.div`
  grid-column: span 3;
  grid-row: span 2;
  margin: 15rem 0;
  padding: 3rem;
  @media (max-width: ${(props) => props.theme.breakpoints[2]}) {
    margin: 0 !important;
    h1 {
      font-size: 2rem;
    }
    h2 {
      font-size: 1.5rem;
    }
  }
`

const IntroContent = styled(Container)`
  margin: 0 auto;
`

const IntroTitle = styled.h1`
  font-size: 3rem;
`

const Area = styled(animated.div)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: 30rem;

  @media (max-width: ${(props) => props.theme.breakpoints[2]}) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: ${(props) => props.theme.breakpoints[1]}) {
    grid-template-columns: 1fr;
  }
`

const ProjectCoverImage = styled(Img)`
  &:after {
    content: '\\A';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.6);
    opacity: 0;
    transition: all 1s;
    -webkit-transition: all 1s;
  }
`

const Index: React.FunctionComponent<PageProps> = ({ data: { projects } }) => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  return (
    <Layout>
      <SEO />
      <Intro>
        <IntroContent>
          <IntroTitle>
            Hi, I'm Caelin Sutch, a passionate Entreprenuer, Software Developer, Graphic Designer, Photographer, and
            Videographer.
          </IntroTitle>
          <h2>Currently, I'm the COO of Bytes Robotics, and attending the MET program at UC Berkeley.</h2>
          <p>
            I program and design innovative technology that solves real-world problems using all the tools at my
            disposal. Due to my wide background, I can both create products using next-generation technology, but also
            market and grow them.
          </p>
        </IntroContent>
      </Intro>
      <Area style={pageAnimation}>
        {projects.nodes.map(({ frontmatter }) => (
          <GridItem
            key={frontmatter.slug}
            to={`/${frontmatter.slug}`}
            aria-label={`View project "${frontmatter.title}"`}
          >
            <ProjectCoverImage fluid={frontmatter.cover.childImageSharp.fluid} />
            <span className="title">{frontmatter.title}</span>
            <span className="categories">{frontmatter.categories.join(', ')}</span>
          </GridItem>
        ))}
      </Area>
    </Layout>
  )
}

export default Index

export const query = graphql`
  query Index {
    projects: allMdx {
      nodes {
        frontmatter {
          title
          categories
          slug
          cover {
            childImageSharp {
              fluid(quality: 95, maxWidth: 1200) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`
