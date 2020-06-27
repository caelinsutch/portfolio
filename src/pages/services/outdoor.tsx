import React from 'react'
import { config, useSpring } from 'react-spring'
import Layout from '../../components/layout'
import SEO from '../../components/SEO'
import { AnimatedBox } from '../../elements'

const StudioServices: React.FC = () => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })
  return (
    <Layout>
      <SEO
        title="Outdoor Photogrpahy Services | Caelin Sutch"
        desc="Affordable and beautiful outdoor photography sessions."
      />
      <AnimatedBox style={pageAnimation} py={[6, 6, 6, 8]} px={[6, 6, 8, 6, 8, 13]}>
        <h1>Outdoor Photography Services</h1>
      </AnimatedBox>
    </Layout>
  )
}

export default StudioServices
