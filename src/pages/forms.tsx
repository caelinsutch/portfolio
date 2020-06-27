import React from 'react'
import { config, useSpring } from 'react-spring'
import Layout from '../components/layout'
import SEO from '../components/SEO'
import { AnimatedBox } from '../elements'

const Forms: React.FC = () => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })
  return (
    <Layout>
      <SEO title="Forms | Caelin Sutch" desc="Assorted website forms for scheduling events and packages" />
      <AnimatedBox style={pageAnimation} py={[6, 6, 6, 8]} px={[6, 6, 8, 6, 8, 13]}>
        <h1>Forms</h1>
      </AnimatedBox>
    </Layout>
  )
}

export default Forms
