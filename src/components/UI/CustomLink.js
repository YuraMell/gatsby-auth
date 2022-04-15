import { Link } from 'gatsby'
import React from 'react'
import * as styles from '../../styles/UI/CustomLink.module.css'


const CustomLink = ({ to, value }) => {
  return (
    <Link to={to} className={styles.a}>{value}</Link>
  )
}

export default CustomLink