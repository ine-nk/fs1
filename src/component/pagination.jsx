import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'

const Pagination = ({ pageSize, itemCount, onPageChange, currentPage }) => {
  const pageCount = Math.ceil(itemCount / pageSize)
  // console.log('pageCount= ', pageCount)
  const pages = _.range(1, pageCount + 1)
  // console.log('Pagination pages=', pages)
  // console.log('Pagination currentPage', currentPage)
  // if (currentPage > pageCount) {  onPageChnge(pageCount) }
  // if (pageCount === 1) return null

  const handlePageIncrement = (currentPage) => {
    currentPage++
    // console.log('handlePageIncrement currentPage', currentPage)

    onPageChange(currentPage)
  }

  const handlePageDecrement = (currentPage) => {
    currentPage--
    // console.log('handlePageDecrement currentPage', currentPage)
    onPageChange(currentPage)
  }

  if (pageCount < currentPage) {
    currentPage = pageCount
    onPageChange(currentPage)
  }
  if (pageCount === 1) return null
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        <li className={ 'page-item ' + (currentPage === 1 ? 'disabled' : '') }>
          <a
            className="page-link"
            aria-label="Previous"
            onClick={ () => handlePageDecrement(currentPage) }
          >
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        { pages.map((page) => (
          <li key={ page } className={ 'page-item ' + (page === currentPage ? 'active' : '') }>
            <a className="page-link" onClick={ () => onPageChange(page) }>
              { page }
            </a>
          </li>
        )) }
        <li className={ 'page-item ' + (currentPage === pageCount ? 'disabled' : '') }>
          <a
            className="page-link"
            aria-label="Next"
            onClick={ () => handlePageIncrement(currentPage) }
          >
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  )
}
Pagination.propTypes = {
  pageSize: PropTypes.number.isRequired,
  itemCount: PropTypes.number.isRequired,
  onPageChange: PropTypes.func,
  currentPage: PropTypes.number.isRequired
}

export default Pagination
