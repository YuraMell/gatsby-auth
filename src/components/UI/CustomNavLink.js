import React from 'react'
import { Link } from 'gatsby'
import * as styles from '../../styles/Navbar.module.css'

const CustomNavLink = ({ to, title }) => {
  return (
    <Link
      to={to}
      className={styles.a}
      activeClassName={styles.active}
    >
      {title}
    </Link>
  )
}

export default CustomNavLink