import React from 'react'
import { config, useSpring } from 'react-spring'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import Layout from '../../components/layout'
import SEO from '../../components/SEO'
import { AnimatedBox } from '../../elements'
import Banner from '../../components/banner'
import { ChildImageSharp } from '../../types'

type PageProps = {
  data: {
    banner: ChildImageSharp
    image1: ChildImageSharp
    image2: ChildImageSharp
    image3: ChildImageSharp
  }
}

const ProductImage = styled(BackgroundImage)`
  height: 25rem;
  max-width: 20rem !important;
  background-position: top;
  background-size: fit;
`

const StudioServices: React.FC<PageProps> = ({ data: { banner, image1, image2, image3 } }) => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })
  return (
    <Layout>
      <SEO title="Studio Services | Caelin Sutch" desc="Affordable and beautiful studio photography sessions." />
      <Banner image={banner}>
        <h1>Studio Photography Services</h1>
      </Banner>
      <AnimatedBox style={pageAnimation} py={[6, 6, 6, 8]} px={[6, 6, 8, 6, 8, 13]}>
        <h2>Packages</h2>
        <div className="row">
          <div className="col-4">
            <ProductImage fluid={image1.childImageSharp.fluid} />
            <h3>Bronze Package - $150</h3>
            <p>- 30 Minutes</p>
            <p>- One Clothing Style</p>
            <p>- 15 Professionally Edited Photos</p>
          </div>
          <div className="col-4">
            <ProductImage fluid={image2.childImageSharp.fluid} />
            <h3>Silver Package - $225</h3>
            <p>- 1 Hour</p>
            <p>- Two Clothing Styled</p>
            <p>- 30 Professionally Edited Photos</p>
          </div>
          <div className="col-4">
            <ProductImage fluid={image3.childImageSharp.fluid} />
            <h3>Gold Package - $350</h3>
            <p>- 2 Hours</p>
            <p>- Makeup Artist</p>
            <p>- Three Clothing Styled</p>
            <p>- 45 Professionally Edited Photos</p>
          </div>
        </div>
      </AnimatedBox>
    </Layout>
  )
}

export const query = graphql`
  query Studio {
    banner: file(sourceInstanceName: { eq: "images" }, name: { eq: "studio-1" }) {
      childImageSharp {
        fluid(quality: 95, maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image1: file(sourceInstanceName: { eq: "images" }, name: { eq: "studio-2" }) {
      childImageSharp {
        fluid(quality: 95, maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image2: file(sourceInstanceName: { eq: "images" }, name: { eq: "studio-3" }) {
      childImageSharp {
        fluid(quality: 95, maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image3: file(sourceInstanceName: { eq: "images" }, name: { eq: "studio-4" }) {
      childImageSharp {
        fluid(quality: 95, maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default StudioServices
