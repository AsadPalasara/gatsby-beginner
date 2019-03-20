import React from "react"
import { Link, graphql } from "gatsby"
import get from "lodash/get"
import Layout from "../components/layout"
import SEO from "../components/seo" 
import Img from "gatsby-image"

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
            <div className="d-flex">
              <Link className="align-self-center badge-warning btn font-weight-lighter" to={`/blogs/`}>&#8592;</Link>
              <h1 className="flex-fill text-center">{posts.title}</h1>
            </div>
            <h6 className="mb-4 blockquote-footer text-center">{posts.createdAt}</h6>
            <Img className="mb-4" fluid={posts.image.fluid}/>
            <div
              dangerouslySetInnerHTML={{
                __html: posts.bodyText.childMarkdownRemark.html,
              }}
            />
            <span className="mb-4"><Link className="badge-warning btn d-block font-weight-lighter" to={`/blogs/`}>&#8592; Back To Blog Lists</Link></span>
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
      image {
        fluid(maxWidth: 1800) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
      }
    }  
  }
`
