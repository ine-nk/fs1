import React, { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState('')

  const handleChange = (e) => {
    setEmail(e.target.value)
    console.log(e.target.name)
  }
  return <form className='m-3' action="">
    <div className='mb-3'>
      <label className="form-label" htmlFor="email">Email</label>
      <input className="form-control" type="text"
        id='email'
        name='email'
        value={ email }
        onChange={ handleChange } /></div>
    <div className='mb-3'>
      <label className="form-label"
        htmlFor="password" >Password</label>
      <input className="form-control"
        type="password"
        name='password'
        id='passsword'
        onChange={ handleChange } /></div>
  </form>
}

export default Login
