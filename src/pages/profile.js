import * as React from 'react'
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Profile = () => {

  // const userData = JSON.parse(localStorage.getItem('user-data')) ?? { username: '', email: '', password: '' }

  return (
    <Layout>
      <Seo title="Profile" />
      <h1>Hi from the Profile page</h1>
      <h1>Your profile</h1>
      <ul>
        {/* <li>Name: {userData.username} </li>
        <li>E-mail: {userData.email} </li> */}
      </ul>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default Profile