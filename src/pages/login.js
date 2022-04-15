import * as React from 'react'
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
// import Form from '../components/UI/Form'

const Login = () => {

  // const handleSubmit = (event, formData) => {
  //   event.preventDefault()
  //   window.localStorage.setItem('user-data', JSON.stringify(formData))
  //   navigate(`/profile`)
  // }

  return (
    <Layout>
      <Seo title="Login" />
      <h1>Log in</h1>
      {/* <Form onSubmit={handleSubmit} /> */}
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default Login