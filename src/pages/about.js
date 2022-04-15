import * as React from 'react'
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = () => {
  return (
    <Layout>
      <Seo title="About" />
      <h1>Hi from the About page</h1>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default AboutPage