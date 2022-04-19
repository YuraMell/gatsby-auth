import React, { useState, useEffect } from 'react'
import { navigate } from 'gatsby';

import * as styles from '../styles/Navbar.module.css'
import CustomNavLink from './UI/CustomNavLink'
import netlifyIdentity from 'netlify-identity-widget'

const Navbar = () => {
  const [isIdentity, setIsIdentity] = useState(false)

  useEffect(() => {
    netlifyIdentity.init({})
    if (netlifyIdentity.currentUser()) {
      setIsIdentity(true)
    }
  }, [])

  const logout = (e) => {
    e.preventDefault()
    netlifyIdentity.logout()
    setIsIdentity(false)
    navigate(`/login`)
  }

  return (
    <nav className={styles.nav}>
      <CustomNavLink to='/' title='Home' />
      <CustomNavLink to='/about' title='About' />
      <CustomNavLink to='/blog' title='Blog' />
      {isIdentity && <CustomNavLink to='/profile' title='Profile' />}
      {!isIdentity && <CustomNavLink to='/login' title='Login' />}
      {isIdentity && <span
        className={styles.a}
        onClick={logout}
      >
        Logout
      </span>}
    </nav>
  )
}

export default Navbar