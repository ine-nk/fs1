import React, { useState } from 'react'
import TextField from '../component/textField'

const Login = () => {
  const [data, setData] = useState({ email: '', password: '' })

  const handleChange = ({ target }) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('data', data)
  }

  return (<form className='m-3' onSubmit={ handleSubmit }>
    <TextField
      label='Электронная почта'
      name='email'
      value={ data.email }
      onChange={ handleChange } />
    <TextField
      label='Пароль'
      type='password'
      name='password'
      value={ data.password }
      onChange={ handleChange }
    />
    <button type='submit'>Submit</button>
  </form>
  )
}

export default Login
