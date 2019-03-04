import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="header-nav">
    <div className="container">
      <div className="row">
        <div className="logo col-7">
          <Link to="/"> LOGO </Link>
        </div>
        <ul className="nav col-5 align-items-center">
          <li>
            <Link to="/" activeClassName="active">
              Home
            </Link>
          </li>
          <li>
            <Link to="/blogs/" activeClassName="active">
              blogs
            </Link>
          </li>
          <li>
            <Link to="/about-us/" activeClassName="active">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact-us/" activeClassName="active">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
