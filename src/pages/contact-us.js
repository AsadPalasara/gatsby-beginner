import React from "react" 
import Layout from "../components/layout"
import Banner from "../components/banner"
import SEO from "../components/seo"

const Contact = props => (
  <Layout>
    <SEO title="Blog posts" />
    <Banner>
      <h1>
        <span>Contact Us</span>
      </h1>
    </Banner>
    <div className="container">
      <section id="contact" className="contact-form">
        <h2>GET IN TOUCH</h2>
        <form
          className="row"
          name="contac-form"
          method="post"
          action="/success/" 
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="bot-field" />

          <div className="field col-md-6">
            <input type="text" name="name" id="name" required />
            <label htmlFor="name">Name</label>
          </div>
          <div className="field col-md-6">
            <input type="text" name="email" id="email" required />
            <label htmlFor="email">Email</label>
          </div>
          <div className="field col-12">
            <textarea name="message" id="message" rows="6" required />
            <label htmlFor="message">Message</label>
          </div>
          <div data-netlify-recaptcha="true"></div>
          <div className="action">
            <input type="submit" value="Send Message" className="draw-border btn btn-outline-primary btn-outline-dark clear-fix stretched-link"/>
            <input type="reset" value="Clear" className="draw-border btn btn-outline-primary btn-outline-dark clear-fix stretched-link" />
          </div>
        </form>
      </section>
    </div>
  </Layout>
)

export default Contact
