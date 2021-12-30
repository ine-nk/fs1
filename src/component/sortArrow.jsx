import React from 'react'
import PropTypes from 'prop-types'
const SortArrow = ({ order }) => {
  let sortArrow = null
  // console.log('SortArrow ->', 'order', order)
  if (order === 'asc') {
    sortArrow = <i className="bi bi-caret-down-fill " ></i>
  } else {
    sortArrow = < i className="bi bi-caret-up-fill" ></i>
  }

  return (<span >
    { sortArrow }
  </span >
  )
}
SortArrow.propTypes = {
  order: PropTypes.string
}

export default SortArrow
