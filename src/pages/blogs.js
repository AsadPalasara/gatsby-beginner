import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Banner from "../components/banner"
import SEO from "../components/seo"
import Img from "gatsby-image"

const Blogs = ({ data }) => {
  const bloglist = data.allContentfulMyBlogs.edges
  return (
    <Layout>
      <SEO title="Blog posts lists" />
      <Banner>
        <h1>
          <span>blogs Lists</span>
        </h1>
      </Banner>
      <div className="container">
        <div className="bloglist">
          <ul className="card-deck mb-5 mt-5 list-unstyled justify-content-center">
            {bloglist.map(({ node: post }) => (
              <li key={post.id} className="card shadow-sm bg-white">
                <Img fluid={post.image.fluid} />
                <div className="card-body pad-top-0">
                  <h4>
                    <Link to={`/blogs/${post.slug}`} className="clear-fix">
                      {post.title}
                    </Link>
                    <span className="blockquote-footer form-control-sm mt-2">
                      {post.createdAt}
                    </span>
                  </h4>
                  <div className="tags float-left mrg-btm-10">
                    {post.tags.map(tag => (
                      <span className="tags" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  {/* <div className="Tagsmain">
                    {bloglist.map(element => (
                      <li>{post.tags}</li>
                    ))}
                  </div> */}
                  <p className="float-left">
                    {post.bodyText.childMarkdownRemark.excerpt}
                  </p>
                  <div className="readmore">
                    <Link
                      to={`/blogs/${post.slug}`}
                      className="clear-fix btn btn-warning text-white stretched-link"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
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
           allContentfulMyBlogs(
             sort: { fields: slug, order: ASC }
             limit: 3
           ) {
             edges {
               node {
                 id
                 slug
                 title
                 tags
                 createdAt(fromNow: true) 
                 childContentfulMyBlogsContentRichTextNode {
                   content
                 }
                 bodyText {
                   childMarkdownRemark {
                     excerpt(pruneLength: 100)
                   }
                 }
                 image {
                   fluid(maxHeight: 580, resizingBehavior: SCALE) {
                     ...GatsbyContentfulFluid_withWebp_noBase64
                   }
                 }
               }
             }
           }
         }
       `
