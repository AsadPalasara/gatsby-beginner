import React from "react"
import Image from "../components/image"
import { StaticQuery, graphql } from "gatsby"

const Banner = ({ children }) => (
  <div className="banner">
    <Image/>
    <div className="wrapper">
      <h1>{children}</h1>
    </div>  
  </div>  
)


export default Banner
