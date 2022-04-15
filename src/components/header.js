import * as React from "react"
import { Link } from "gatsby"
import * as styles from '../styles/Header.module.css'
import Navbar from "./Navbar"


const Header = ({ logo }) => (
  <header className={styles.header}>
    <div className={styles.inner}>
      <Link to="/">
        <img src={logo} alt="logo" className={styles.logo} />
      </Link>
      <Navbar />
    </div>
  </header>
)

export default Header
