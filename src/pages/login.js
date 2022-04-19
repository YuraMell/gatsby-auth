import React, { useEffect } from "react"

import { Link } from "gatsby"
import netlifyIdentity from 'netlify-identity-widget'

import Layout from "../components/layout"
import Seo from "../components/seo"

const Login = () => {
  useEffect(() => {
    netlifyIdentity.init({})
  })

  return (
    <Layout>
      <Seo title="Login" />
      <h1>Log in</h1>
      <button onClick={() => netlifyIdentity.open()}>Log in</button>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default Login