import React, { useState } from 'react'

import * as styles from '../../styles/UI/Form.module.css'
import Button from './Button'
import FormField from './FormField'

const Form = ({ method = "POST", onSubmit }) => {
  const [form, setForm] = useState({ username: '', email: '', password: '' })

  const handleUpdate = event => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  return (
    <form
      method={method}
      onSubmit={(e) => onSubmit(e, form)}
      className={styles.form}
    >
      <FormField
        label='Username'
        name='username'
        onChange={handleUpdate}
      />
      <FormField
        label='E-mail'
        type='email'
        name='email'
        onChange={handleUpdate}
      />
      <FormField
        label='Password'
        type='password'
        name='password'
        onChange={handleUpdate}
      />
      <Button
        type="submit"
        value="Log In"
      />
    </form>
  )
}

export default Form