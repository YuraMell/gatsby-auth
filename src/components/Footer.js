import React from 'react'
import * as styles from '../styles/Footer.module.css'


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        © {new Date().getFullYear()}, Built with
        <a href="https://www.gatsbyjs.com" className={styles.a}>Gatsby</a>
      </div>
    </footer>
  )
}

export default Footer