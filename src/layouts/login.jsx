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
    email: {
      isRequired: { message: 'Электронная почта обязательно для заполнения' },
      isEmail: { message: 'Введите корректный email' }
    },
    password: {
      isRequired: { message: 'Укажите пароль ' },
      isCapitalSimbol: { message: 'Пароль должен содержать хотя бы одну заглавную букву' },
      isContainDigit: { message: 'Пароль должен содержать хотя бы одну цифру' },
      min: {
        message: 'Длина пароля должна быть не менее 8-ми символов',
        value: 8
      }
    }
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
  const isValid = Object.keys(errors).length === 0
  useEffect(() => {
    validate()
  }, [data])

  const handleSubmit = (e) => {
    e.preventDefault()
    const isValid = validate()
    if (!isValid) return
    console.log('data', data)
  }

  return (<div className="container mt-5 p-2 shadow">
    <div className="col-md-6 offset-md-3">
      <h3 className='ps-3 '>Login</h3>
      <form className='m-3 ' onSubmit={ handleSubmit }>
        <TextField
          label='Электронная почта'
          name='email'
          value={ data.email }
          onChange={ handleChange }
          error={ errors.email } />
        <TextField
          label='Пароль'
          type='password'
          name='password'
          value={ data.password }
          onChange={ handleChange }
          error={ errors.password }
        />
        <button className='btn btn-primary w-100 mx-auto' type='submit' disabled={ !isValid }>Submit</button>
      </form>
    </div>
  </div>
  )
}

export default Login
