import React from 'react'
import { config, useSpring } from 'react-spring'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import SEO from '../../components/SEO'
import { AnimatedBox } from '../../elements'
import { ChildImageSharp } from '../../types'
import Banner from '../../components/banner'

type PageProps = {
  data: {
    banner: ChildImageSharp
    image1: ChildImageSharp
    image2: ChildImageSharp
  }
}

const ProductImage = styled(BackgroundImage)`
  height: 25rem;
  max-width: 20rem !important;
  background-position: top;
  background-size: fit;
`

const OutdoorServices: React.FC<PageProps> = ({ data: { banner, image1, image2 } }) => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })
  return (
    <Layout>
      <SEO title="Studio Services | Caelin Sutch" desc="Affordable and beautiful studio photography sessions." />
      <Banner image={banner}>
        <h1>Outdoor Photography Services</h1>
      </Banner>
      <AnimatedBox style={pageAnimation} py={[6, 6, 6, 8]} px={[6, 6, 8, 6, 8, 13]}>
        <p>
          Outdoor sessions are perfect for family photos, headshots, senior portraits, and capturing memories with a
          loved one.
        </p>
        <h2>Packages</h2>
        <div className="row">
          <div className="col-6">
            <ProductImage fluid={image1.childImageSharp.fluid} />
            <h3>Basic 30min. Headshot Session - $140</h3>
            <p>- 10+ Professionally Edited Photos</p>
            <p>- Perfect for LinkedIn and Social Media Profiles</p>
            <p>- Your choice of location</p>
          </div>
          <div className="col-6">
            <ProductImage fluid={image2.childImageSharp.fluid} />
            <h3>1 Hr. Session - $175</h3>
            <p>- 30+ Professionally Edited Photos</p>
            <p>- Perfect for senior photos or family photos</p>
            <p>- Your choice of location</p>
          </div>
        </div>
      </AnimatedBox>
    </Layout>
  )
}

export const query = graphql`
  query Outdoor {
    banner: file(sourceInstanceName: { eq: "images" }, name: { eq: "outdoor-1" }) {
      childImageSharp {
        fluid(quality: 95, maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image1: file(sourceInstanceName: { eq: "images" }, name: { eq: "outdoor-2" }) {
      childImageSharp {
        fluid(quality: 95, maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image2: file(sourceInstanceName: { eq: "images" }, name: { eq: "outdoor-3" }) {
      childImageSharp {
        fluid(quality: 95, maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
export default OutdoorServices
