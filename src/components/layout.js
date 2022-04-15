import * as React from "react"
import Footer from "./Footer"
import gatsbyLogo from '../images/gatsby-icon.png'
import '../styles/main.css'

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header logo={gatsbyLogo} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
