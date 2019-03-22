import React from "react"
import Layout from "../components/layout"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo" 
import homeimg from "../images/pink.jpg" 


const homepage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <figure style={{ height: `calc(100vh - 80px)`, margin: `0` }}>
      {/* <img
        src={homeimg}
        style={{
          width: `100%`,
          height: `calc(100vh - 80px)`,
          objectFit: `cover`,
        }}
      /> */}
      <Homebanner/>
    </figure>
    <div
      style={{
        position: `absolute`,
        transform: `translate(-50%, -50%)`,
        left: `50%`,
        top: `50%`,
      }}
    >
      <h1 style={{ background: `#fff` }}>
        <span style={{ color: `#333`, padding: `10px`, display: `block` }}>
          Gatsby with Contentfull
        </span>
      </h1>
    </div>
  </Layout>
)


const Homebanner = () => (
  <StaticQuery
    query={graphql`
      query {
        bannerimg: file(relativePath: { eq: "pink.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Img
        style={{
          width: `100%`,
          height: `calc(100vh - 80px)`,
          objectFit: `cover`,
        }}
        fluid={data.bannerimg.childImageSharp.fluid}
      />
    )}
  />
)

export default homepage
 

