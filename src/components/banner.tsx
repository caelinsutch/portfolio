import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components'
import { ChildImageSharp } from '../types'

type Props = {
  image: ChildImageSharp
}

const Content = styled.div`
  color: white !important;
  text-align: center;
  font-weight: 800;
  padding-top: 10rem;
  > h1 {
    color: white;
  }
`

const Banner: React.FC<Props> = ({ children, image }) => {
  const backgroundFluidImageStack = [
    `linear-gradient(rgba(0,0 ,0 , 0.3), rgba(0,0 ,0, 0.5))`,
    image.childImageSharp.fluid,
  ]
  return (
    <>
      <BackgroundImage fluid={backgroundFluidImageStack} Tag="section" style={{ height: '30rem' }}>
        <Content>{children}</Content>
      </BackgroundImage>
    </>
  )
}

export default Banner
