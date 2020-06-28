import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import { ChildImageSharp } from '../types'

type Props = {
  title: string
  description: string
  image: ChildImageSharp
  to: string
}

const CardContainer = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  min-height: 38rem;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`

const ImageContainer = styled.div`
  height: 25rem;
`

const CardContent = styled.div`
  padding: 1rem;
`

const CardTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
`

const CardDescription = styled.h2`
  font-size: 1rem;
  font-weight: normal;
`

const ServiceCard: React.FC<Props> = ({ title, description, image, to }) => (
  <CardContainer>
    <Link to={to} style={{ textDecoration: 'none' }}>
      <ImageContainer>
        <Img fluid={image.childImageSharp.fluid} style={{ height: '100%' }} />
      </ImageContainer>
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Link>
  </CardContainer>
)

export default ServiceCard
