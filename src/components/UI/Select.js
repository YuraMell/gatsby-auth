import React from 'react'
import * as styles from '../../styles/UI/Select.module.css'

const Select = ({ name, value, onChange, optionValue, options }) => {
  return (
    <select
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      className={styles.select}
    >
      <option
        value={optionValue}
        className={styles.option}
      >
        {optionValue}
      </option>
      {options.map(option => (
        <option
          value={option}
          key={option}
          className={styles.option}
        >
          {option}
        </option>
      ))}
    </select>
  )
}

export default Select