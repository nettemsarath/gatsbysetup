import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

const ArtDirectedFullBackground = ({ className, children }) => {
  const { desktop, medium, small } = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "desktop.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        medium: file(relativePath: { eq: "tablet.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1400, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        small: file(relativePath: { eq: "mobile.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 490, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  // Art-Direction Array
  const backgroundArtDirectionStack = [
    small.childImageSharp.fluid,
    {
      ...medium.childImageSharp.fluid,
      media: `(min-width: 491px)`,
    },
    {
      ...desktop.childImageSharp.fluid,
      media: `(min-width: 1401px)`,
    },
  ]

  return (
    <>
      <BackgroundImage
        Tag="section"
        className={className}
        fluid={backgroundArtDirectionStack}
        backgroundColor={`#040e18`}
        title="Art-Directed Fullscreen Background"
        id="adfullscreenbg"
        role="img"
        aria-label="Art-Directed Fullscreen Background"
        preserveStackingContext={true}
      >
        {children}
      </BackgroundImage>
    </>
  )
}

const StyledFullBackground = styled(ArtDirectedFullBackground)`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default StyledFullBackground
