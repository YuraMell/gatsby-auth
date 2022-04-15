import React from 'react'
import * as styles from '../../styles/UI/FormField.module.css'

const FormField = ({ label, type = 'text', name, onChange }) => {
  return (
    <div className={styles.field_block}>
      <label className={styles.label}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        className={styles.input}
        onChange={onChange}
        placeholder={label}
      />
    </div>
  )
}

export default FormField