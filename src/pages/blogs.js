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
              <li key={post.id} className="col-lg-3 col-6">
                <Link to={`/blogs/${post.slug}`}>
                  <img src={post.avtar.fluid.src} />
                  <Link to={`/blogs/${post.slug}`}>{post.title}</Link>
                  <div className="tags">
                    <Link to={`/blogs/${post.slug}`} className="tags">
                      {post.tags}
                    </Link>
                  </div>
                  {/* <div className="Tagsmain">
                    {bloglist.map(element => (
                      <li>{post.tags}</li>
                    ))}
                  </div> */}
                  <p>{post.content}</p>
                </Link>
              </li>
            ))}
          </ul>
          <span className="mgBtm__24" />
        </div>
      </div>
    </Layout>
  )
}

export default Blogs

export const query = graphql`
  query bloglistPageQuery {
    allContentfulMyBlogs(sort: { fields: slug, order: ASC }) {
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
