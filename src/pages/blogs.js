import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Banner from "../components/banner"
import SEO from "../components/seo"

const Blogs = ({ data }) => {
  const bloglist = data.allContentfulMyBlogs.edges
  return (
    <Layout>
      <SEO title="Blog posts" />
      <Banner>
        <h1>
          <span>blogs Lists</span>
        </h1>
      </Banner>
      <div className="container">
        <div className="bloglist">
          <ul className="row list-unstyled">
            {bloglist.map(({ node: post }) => (
              <li key={post.id} className="col-3">
                <img src={post.avtar.fluid.src} />
                <Link to={`/blogs/${post.slug}`}>{post.title}</Link>
                <span>{post.tags}</span>
                <p>{post.content}</p>
              </li>
            ))}
          </ul>
          <span className="mgBtm__24" />
          <Link to="/">Go back to the homepage</Link>
        </div>
      </div>
    </Layout>
  )
}

export default Blogs

export const query = graphql`
  query bloglistPageQuery {
    allContentfulMyBlogs {
      edges {
        node {
          id
          slug
          title
          tags
          childContentfulMyBlogsContentRichTextNode {
            content
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
