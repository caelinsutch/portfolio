import React from 'react'
import { config, useSpring } from 'react-spring'
import Layout from '../components/layout'
import { AnimatedBox } from '../elements'
import SEO from '../components/SEO'

const About = () => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  return (
    <Layout>
      <SEO title="About | Caelin Sutch" desc="Hi. I'm Caelin Sutch! A software developer and creative. " />
      <AnimatedBox style={pageAnimation} py={[6, 6, 6, 8]} px={[6, 6, 8, 6, 8, 13]}>
        <h1>Hi. I'm Caelin Sutch!</h1>
        <p>
          I develop software focused on enhancing people's lives with innovative design, functional UX, and clean
          maintainable code. My experience ranges from full stack web development, mobile development, Robotics
          development, DevOps, and Project Management. I also run a freelance creative firm, producing film, photo, and
          graphic work for various clients.
        </p>
        <p>Currently, I'm the COO of Bytes Robotics, an innovative autonomous robotics startup.</p>
      </AnimatedBox>
    </Layout>
  )
}

export default About
