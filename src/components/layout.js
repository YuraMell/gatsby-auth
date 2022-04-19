import React from "react"
import Footer from "./Footer"
import gatsbyLogo from '../images/gatsby-icon.png'
import '../styles/main.css'

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {

  return (
    <>
      <Header logo={gatsbyLogo} />
      {/* <button onClick={() => console.log(netlifyIdentity.currentUser())}>User</button> */}
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
