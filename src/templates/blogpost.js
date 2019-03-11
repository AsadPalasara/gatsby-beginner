import React from "react"
import { Link, graphql } from "gatsby"
import get from "lodash/get"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"

class BlogPosts extends React.Component {
  render() {
    const posts = get(this.props, "data.contentfulMyBlogs")
    // const postsdata = allContentfulMyBlogs.edges
    return (
      <Layout>
        <SEO title={`${posts.title}`} />
        {/* <SEO description={posts.description} /> */}
        <Banner>
          <h1>
            <span>{posts.title}</span>
          </h1>
        </Banner>
        <div className="container">
          <div className="blogdetail">
            <img src={posts.avtar.fluid.src} />
            <p>{posts.bodyText.childMarkdownRemark.excerpt}</p>
          </div>
        </div>
      </Layout>
    )
  }
}

export default BlogPosts

export const query = graphql`
  query BlogPostBySlugsdjskdk($slug: String!) {
    contentfulMyBlogs(slug: { eq: $slug }) {
      title
      tags
      bodyText {
        childMarkdownRemark {
          html
          excerpt(pruneLength: 500)
        }
      }
      avtar {
        fluid(maxHeight: 550) {
          src
        }
      }
      images {
        fluid {
          src
        }
      }
    }
  }
`
