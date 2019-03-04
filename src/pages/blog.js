import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Banner from "../components/banner"
import SEO from "../components/seo"

const blog = () => (
  <Layout>
    <SEO title="Blog post" />
    <Banner>
      <span>Awesome blogs</span>
    </Banner>
    <div className="wrapper">
      <h2>Check-out Following Blogs</h2>
      <ul>
        <li>
          <Link to="/blogpost/ashok/">Habits of winning</Link>
        </li>
        <li>
          <Link to="">React Books Refrence</Link>
        </li>
        <li>
          <Link to="">Apna Time Aaega</Link>
        </li>
      </ul>
    </div>
  </Layout>
)

export default blog
