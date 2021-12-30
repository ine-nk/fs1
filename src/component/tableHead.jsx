import React from 'react'
import PropTypes from 'prop-types'
// import SortArrow from './sortArrow'

const TableHead = ({ selectedSort, onSort, columns }) => {
  const handleSort = (item) => {
    console.log('handleSort = (item) => ', item)
    if (selectedSort.path === item) {
      onSort({ ...selectedSort, order: selectedSort.order === 'asc' ? 'desc' : 'asc' })
      // console.log(' ??? sortBy.path === ', item)
      // console.log('selectedSort=>', selectedSort)
    } else {
      onSort({ path: item, order: 'asc' })
    }
  }
  const RenderSortArrow = (selectedSort, currentPath) => {
    if (selectedSort.path === currentPath) {
      if (selectedSort.order === 'asc') {
        return <i className="bi bi-caret-down-fill " ></i>
      } else {
        return < i className="bi bi-caret-up-fill" ></i>
      }
    } return null
  }
  return (
    <thead>
      <tr className="table-secondary">
        { Object.keys(columns).map((column) => (
          <th key={ column }
            onClick=
            {
              columns[column].path
                ? () => handleSort(columns[column].path)
                : undefined
            }
            { ...{ role: columns[column].path && 'button' } }
            scope="col">{ columns[column].name } { RenderSortArrow(selectedSort, columns[column].path) }
          </th>
        )) }
      </tr >
    </thead >
  )
}
TableHead.propTypes = {
  onSort: PropTypes.func.isRequired,
  selectedSort: PropTypes.object.isRequired,
  columns: PropTypes.object.isRequired
}
export default TableHead
