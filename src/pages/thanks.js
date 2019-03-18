import React from "react"
import Layout from "../components/layout"
import Banner from "../components/banner"
import SEO from "../components/seo"

const Success = () => (
  <Layout>
    <SEO title="Thank You" />
    <Banner>
      <h1>
        <span>Thank You</span>
      </h1>
    </Banner>
    <div className="container">
      <h2
        style={{
          textAlign: `center`,
          margin: `10px 0 20px 0`,
          fontFamily: `Raleway`,
          letterSpacing: `3px`,
        }}
      >
        SUCCESS !!
      </h2>
      <p style={{ textAlign: `center` }}>Thank you for contacting us!</p>
    </div>
  </Layout>
)

export default Success
