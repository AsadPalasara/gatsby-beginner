import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"

const aboutus = () => (
  <Layout>
    <SEO title="About us" />
    <Banner>
      <h1>
        <span>About us</span>
      </h1>
    </Banner>
    <div className="container">
      <h2>About us content Soon...</h2>
    </div>
  </Layout>
)

export default aboutus
