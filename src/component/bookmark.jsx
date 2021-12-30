import React from 'react'
import PropTypes from 'prop-types'

const BookMark = ({ status, ...rest }) => {
  // console.log(status, 'status')
  return (
    <button { ...rest }>
      <i className={ 'bi bi-bookmark' + (status ? '-fill' : '') }></i>
    </button>
  )
}
BookMark.propTypes = {
  status: PropTypes.bool
}
export default BookMark
