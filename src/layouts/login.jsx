import React, { useEffect, useState } from 'react'
import TextField from '../component/textField'
import { validator } from '../utils/validator'

const Login = () => {
  const [data, setData] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState({})
  const handleChange = ({ target }) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }))
  }

  const validatorConfig = {
    emai: { isRequired: { message: 'Электронная почта обязательно для заполнения' } },
    password: { isRequired: { message: 'Укажите пароль ' } }
  }

  const validate = () => {
    // const errors = {}
    const errors = validator(data, validatorConfig)
    // for (const fieldName in data) {
    //   if (data[fieldName].trim() === '') {
    //     errors[fieldName] = `${fieldName} это поле не может быть пустым`
    //   }
    // }
    setErrors(errors)
    return Object.keys(errors).length === 0
  }

  useEffect(() => {
    validate()
  }, [data])

  const handleSubmit = (e) => {
    e.preventDefault()
    const isValid = validate()
    if (!isValid) return
    console.log('data', data)
  }

  return (<form className='m-3' onSubmit={ handleSubmit }>
    <TextField
      label='Электронная почта'
      name='email'
      value={ data.email }
      onChange={ handleChange }
      errors={ errors.email } />
    <TextField
      label='Пароль'
      type='password'
      name='password'
      value={ data.password }
      onChange={ handleChange }
      errors={ errors.password }
    />
    <button type='submit'>Submit</button>
  </form>
  )
}

export default Login
