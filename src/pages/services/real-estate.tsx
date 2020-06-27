import React from 'react'
import { config, useSpring } from 'react-spring'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import Layout from '../../components/layout'
import SEO from '../../components/SEO'
import { AnimatedBox } from '../../elements'
import { Container } from '../../styles/shared'
import { ChildImageSharp } from '../../types'
import Banner from '../../components/banner'

type PageProps = {
  data: {
    banner: ChildImageSharp
    image1: ChildImageSharp
    image2: ChildImageSharp
    image3: ChildImageSharp
  }
}

const Center = styled.div`
  text-align: center;
  width: 100%;
`

const ProductImage = styled(BackgroundImage)`
  height: 25rem;
`

const RealEstateServices: React.FC<PageProps> = ({ data: { banner, image1, image2, image3 } }) => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })
  return (
    <Layout>
      <SEO
        title="Real Estate Services | Caelin Sutch"
        desc="Affordable and impactful real estate marketing packages with a high ROI."
      />
      <Banner image={banner}>
        <h1>Real Estate Photo/Video Services</h1>
      </Banner>
      <AnimatedBox style={pageAnimation} py={[6, 6, 6, 8]} px={[6, 6, 8, 6, 8, 13]}>
        <Container>
          <Center>
            <h3>All packages are delivered ASAP</h3>
            <h3>Video is included FREE!</h3>
          </Center>
          <h2>Benefits of Working with Us</h2>
          <h3>Professional Equipment</h3>
          <p>
            Our kit of equipment includes 2 full frame DSLRs, capable of shooting 30 MP, multiple L series professional
            lenses, professional editing software, 6k RAW video camera, gimbal, aerial professional drone, and more!
          </p>

          <h2>Packages</h2>
          <ProductImage fluid={image1.childImageSharp.fluid} />
          <h3>Deluxe Package - $150</h3>
          <p>Up to 20 interior/exterior HDR Photographs professionally enhanced and edited</p>
          <p>4K Walk-Through Video Tour: 2-3 Minutes FREE</p>

          <ProductImage fluid={image2.childImageSharp.fluid} />
          <h3>Showcase Package</h3>
          <p>Up to 25 interior/exterior HDR Photographs professionally enhanced and edited</p>
          <p>4K Walk-Through Video Tour: 2-3 Minutes FREE</p>
          <p>Up to 10 Aerial Photos + Video Scenes</p>

          <ProductImage fluid={image3.childImageSharp.fluid} />
          <h3>Ultimate Package</h3>
          <p>Up to 30 interior/exterior HDR Photographs professionally enhanced and edited</p>
          <p>4K Walk-Through Video Tour: 3-5 Minutes FREE</p>
          <p>Up to 20 Aerial Photos + Video Scenes</p>
          <h3>Package Add-Ons</h3>
          <p>Sunset Photographs (10) - $100</p>
          <p> Night Photography (10) - $100</p>
        </Container>
      </AnimatedBox>
    </Layout>
  )
}

export default RealEstateServices

export const query = graphql`
  query RealEstate {
    banner: file(sourceInstanceName: { eq: "images" }, name: { eq: "real-estate-1" }) {
      childImageSharp {
        fluid(quality: 95, maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image1: file(sourceInstanceName: { eq: "images" }, name: { eq: "real-estate-2" }) {
      childImageSharp {
        fluid(quality: 95, maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image2: file(sourceInstanceName: { eq: "images" }, name: { eq: "real-estate-3" }) {
      childImageSharp {
        fluid(quality: 95, maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image3: file(sourceInstanceName: { eq: "images" }, name: { eq: "real-estate-4" }) {
      childImageSharp {
        fluid(quality: 95, maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
