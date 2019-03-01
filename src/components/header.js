import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div className="wrapper">
      <div className="logo">
        <Link to="/"> LOGO </Link>
      </div>
      <ul className="nav" style={{ listStyle: `none`, float: `right`, margin: `0`, alignSelf:`center`}}>
        <li><Link to="/" activeClassName="active">Home</Link></li>
        <li><Link to="/blogpost/" activeClassName="active">blogs</Link></li>
        <li><Link to="/about-us/" activeClassName="active">About</Link></li>
        <li><Link to="/contact-us/" activeClassName="active">Contact</Link></li>
      </ul>
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
