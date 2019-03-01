import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"

const contactus = () => (
    <Layout>
        <Banner><span>Contact us</span></Banner>
        <SEO title="Contact us" />
        <div className="wrapper">
            <h2>No Worry Feel Free TO Contact Me</h2>
	        <Link to="/">Go back to your Gully !! </Link>
	    </div>    
    </Layout>
)

export default contactus
