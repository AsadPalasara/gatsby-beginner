import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from '../components/banner'

const homepage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} /> 
    <Banner><span>Home</span></Banner>
    <div className="wrapper">
      <h2>Contents Soon . . . .</h2> 
  
    </div>
  </Layout>
)

export default homepage
