import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const IndexPage = () => {
  console.log("ENV IS", process.env.GATSBY_ENV );

  const data = useStaticQuery(graphql`
  query {
    frameImg: file(relativePath: { eq: "1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    Img1: file(relativePath: { eq: "1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  `)

  return(
    <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <div style={{ width:"100px", height:"200px" }}>
      <Img fluid={ data.frameImg.childImageSharp.fluid } />
    </div>

    <div style={{ width:"100px", height:"200px" }}>
      <Img fluid={ data.Img1.childImageSharp.fluid } />
    </div>

    <div>
      <Img fluid={ data.frameImg.childImageSharp.fluid } />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
  )
}

export default IndexPage
