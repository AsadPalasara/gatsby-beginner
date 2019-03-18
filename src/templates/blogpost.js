import React from "react"
import { Link, graphql } from "gatsby"
import get from "lodash/get"
import Layout from "../components/layout"
import SEO from "../components/seo" 

class BlogPosts extends React.Component {
  render() {
    const posts = get(this.props, "data.contentfulMyBlogs")
    // const postsdata = allContentfulMyBlogs.edges
    return (
      <Layout>
        <SEO title={`${posts.title}`} />
        {/* <SEO description={posts.description} /> */}
        <div className="container">
          <div className="blogdetail border mb-5 mt-5 shadow-sm p-3 pt-4">
            <h2 className="text-center">{posts.title}</h2>
            <h6 className="mb-4 blockquote-footer text-lg-center">{posts.createdAt}</h6>
            <img src={posts.avtar.fluid.src} className="mb-3"/>
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
      createdAt(fromNow:true)
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
