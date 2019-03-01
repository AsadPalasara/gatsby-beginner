import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"

const aboutus = () => (
  <Layout>
    <SEO title="About us" />
    <Banner><span>About us</span></Banner>
    <div className="wrapper">
      <h2>About us content Soon...</h2> 
    </div>  
  </Layout>
)

export default aboutus
