import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"

const homepage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Banner>
      <h1>
        <span>Home</span>
      </h1>
    </Banner>
    <div className="container">
      <h2>Contents Soon . . . .</h2>
    </div>
  </Layout>
)

export default homepage
