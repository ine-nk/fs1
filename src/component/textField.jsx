import React from 'react'
import PropTypes from 'prop-types'

const TextField = ({ label, type, name, value, onChange, error }) => {
  return (<div className='mb-3'>
    <label className="form-label" htmlFor={ name }>{ label }</label>
    <input className="form-control"
      type={ type }
      id={ name }
      name={ name }
      value={ value }
      onChange={ onChange } />
    { error && <p>Это поле не должно быть пустым</p> }
  </div>
  )
}

TextField.defaultProps = {
  type: 'text'
}

TextField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string
}
export default TextField

// <div className='mb-3'>
