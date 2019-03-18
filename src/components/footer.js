import React from "react" 

const Footer = ({ siteTitle }) => (
  <footer style={{}}>
    <div className="container">
      <p style={{ textAlign: `center` }}>
        All Right Reserve © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">
          <strong>Gatsby</strong>
        </a>
      </p>
    </div>
  </footer>
)

export default Footer
