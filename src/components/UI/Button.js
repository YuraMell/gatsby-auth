import React from 'react'
import * as styles from '../../styles/UI/Button.module.css'


const Button = ({ type = 'button', value, onClick = () => null }) => (
  <input
    type={type}
    value={value}
    className={styles.button}
    onClick={onClick}
  />
)

export default Button