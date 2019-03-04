import React from "react"
import { StaticQuery, graphql } from "gatsby"

const Banner = ({ children }) => (
  <div className="banner align-items-center">
    <div className="container">{children}</div>
  </div>
)

export default Banner
