import React from "react"
import SEO from "../components/seo"
import Banner from "../components/banner" 
import Layout from "../components/layout"
import Image from "../components/image"

const aboutus = ({ data }) => {
  const post = data.allContentfulMyBlogs.edges
  return (
    <Layout>
      <SEO title="About" />
      <Banner>
        <h1>
          <span>About me</span>
        </h1>
      </Banner>
      <div className="container">
        <div className="justify-content-center row">
          <figure className="align-items-center col-8 col-md-4 text-center">
            <Image />
          </figure>
          <div className="align-self-center col-md-12 col-lg-8">
            <h2>John Doe</h2>
            <p>
              It is a long established fact that a reader will be distracted
              by the readable content of a page when looking at its layout.
              The point of using Lorem Ipsum is that it has a more-or-less
              normal distribution of letters, as opposed to using 'Content
              here, content here', making it look like readable English. Many
              desktop publishing packages and web page editors now use Lorem
              Ipsum as their default model text, and a search for 'lorem
              ipsum' will uncover many web sites still in their infancy.
              Various versions have evolved over the years, sometimes by
              accident, sometimes on purpose (injected humour and the like).
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default aboutus

export const query = graphql`
  query aboutpage {
    allContentfulMyBlogs(sort: { fields: slug, order: ASC }, limit: 3) {
      edges {
        node {
          id
          slug
          title
          tags 
        }
      }
    }
  }
`
