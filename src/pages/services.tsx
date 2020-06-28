import React from 'react'
import { config, useSpring } from 'react-spring'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/SEO'
import { AnimatedBox } from '../elements'
import { ChildImageSharp } from '../types'
import ServiceCard from '../components/service-card'

type PageProps = {
  data: {
    services: {
      nodes: {
        title: string
        description: string
        link: string
        image: ChildImageSharp
      }[]
    }
  }
}

const Services: React.FC<PageProps> = ({
  data: {
    services: { nodes },
  },
}) => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })
  return (
    <Layout>
      <SEO
        title="Services | Caelin Sutch"
        desc="My various services packages, such as photography, videography, and web development."
      />
      <AnimatedBox style={pageAnimation} py={[6, 6, 6, 8]} px={[6, 6, 8, 6, 8, 13]}>
        <h1 style={{ textAlign: 'center' }}>Services</h1>
        <div className="row">
          {nodes.map((service) => (
            <div className="col-4">
              <ServiceCard
                title={service.title}
                description={service.description}
                image={service.image}
                to={service.link}
              />
            </div>
          ))}
        </div>
      </AnimatedBox>
    </Layout>
  )
}

export const query = graphql`
  query Services {
    services: allServicesYaml {
      nodes {
        title
        description
        link
        image {
          childImageSharp {
            fluid(quality: 95, maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`

export default Services
