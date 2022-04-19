import * as React from 'react'
import netlifyIdentity from 'netlify-identity-widget'

import Layout from "../components/layout"
import Seo from "../components/seo"
import CustomLink from '../components/UI/CustomLink'

const Profile = () => {

  const username = netlifyIdentity.currentUser()?.user_metadata?.full_name
  const email = netlifyIdentity.currentUser()?.email

  return (
    <Layout>
      <Seo title="Profile" />
      <h1>Hi from the Profile page</h1>
      <h1>Your profile</h1>
      <ul>
        <li>Name: {username} </li>
        <li>E-mail: {email} </li>
      </ul>
      <CustomLink to="/" value='Go back to the homepage' />
    </Layout>
  )
}

export default Profile