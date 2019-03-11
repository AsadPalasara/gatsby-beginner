import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
import pic from "../images/my.jpg"

const aboutus = ({ data }) => {
  const post = data.allContentfulMyBlogs.edges
  return (
    <Layout>
      <SEO title="About us" />
      <Banner>
        <h1>
          <span>About me</span>
        </h1>
      </Banner>
      <div className="container">
        <div className="media">
          <img
            src={pic}
            className="align-items-center mr-3"
            style={{
              Width: `280px`,
              maxWidth: `280px`,
              borderRadius: `50% !important`,
            }}
          />
          <div className="media-body">
            <h4>Asad Palasara</h4>
            <p>My Name is Khan </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
          childContentfulMyBlogsContentRichTextNode {
            content
          }
          images {
            fluid {
              src
            }
          }
          bodyText {
            childMarkdownRemark {
              excerpt(pruneLength: 100)
            }
          }
          avtar {
            fluid(maxHeight: 250) {
              src
            }
            file {
              url
              fileName
              contentType
            }
          }
        }
      }
    }
  }
`
