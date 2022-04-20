import React, { useEffect, useState, useRef } from "react"

import { navigate } from "gatsby"
import netlifyIdentity from 'netlify-identity-widget'

import Layout from "../components/layout"
import Seo from "../components/seo"
import CustomLink from "../components/UI/CustomLink"
import * as styles from '../styles/Login.module.css'


const Login = () => {
  const [value, setValue] = useState('')
  const formRef = useRef(null)

  useEffect(() => {
    netlifyIdentity.init({})
  })

  netlifyIdentity.on('close', (_) => {
    navigate('/')
  })

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) =>
          encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  const handleChange = e => setValue(e.target.value)

  const handleSubmit = async (event) => {
    event.preventDefault();
    let formData = new FormData(formRef.current);
    console.log(formData)

    let response = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: encode({
        "pizzaOrder": event.target.getAttribute("name"),
      }),
    })

    let result = response.json()
    console.log(result)
  };

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
      <form
        name="contact-form"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input name="name" placeholder="Your Name" type="text" />
        <input name="email" placeholder="name@name.com" type="email" />
        <input name="phone" type="text" placeholder="phone" />
        <button>Send</button>
      </form>
      <CustomLink to="/" value='Go back to the homepage' />
    </Layout>
  )
}

export default Login