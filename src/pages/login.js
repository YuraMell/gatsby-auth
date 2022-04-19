import React, { useEffect } from "react"

import { navigate } from "gatsby"
import netlifyIdentity from 'netlify-identity-widget'

import Layout from "../components/layout"
import Seo from "../components/seo"
import CustomLink from "../components/UI/CustomLink"
import * as styles from '../styles/Login.module.css'


const Login = () => {
  useEffect(() => {
    netlifyIdentity.init({})
  })

  netlifyIdentity.on('close', (_) => {
    navigate('/')
  })

  return (
    <Layout>
      <Seo title="Login" />
      <h1>Log in</h1>
      <div className={styles.form_block}>
        <span
          className={styles.button}
          onClick={() => netlifyIdentity.open('login')}
        >
          Log in
        </span>
        <span
          className={styles.button}
          onClick={() => netlifyIdentity.open('signup')}>
          Sign up
        </span>
      </div>
      <CustomLink to="/" value='Go back to the homepage' />
    </Layout>
  )
}

export default Login