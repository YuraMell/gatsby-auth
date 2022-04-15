import React from 'react'
import * as styles from '../styles/Navbar.module.css'
import CustomNavLink from './UI/CustomNavLink'

const Navbar = () => {
  // const logout = (e) => {
  //   e.preventDefault()
  //   localStorage.removeItem('user-data')
  //   navigate(`/login`)
  // }

  // const userData = JSON.parse(localStorage.getItem('user-data'))

  return (
    <nav className={styles.nav}>
      <CustomNavLink to='/' title='Home' />
      <CustomNavLink to='/about' title='About' />
      <CustomNavLink to='/blog' title='Blog' />
      {/* {userData && <CustomNavLink to='/profile' title='Profile' />}
      {!userData && <CustomNavLink to='/login' title='Login' />}
      {userData && <a
        href='/'
        className={styles.a}
        onClick={logout}
      >
        Logout
      </a>} */}
    </nav>
  )
}

export default Navbar