import React from 'react'
import PropTypes from 'prop-types'
const GroupList = ({ items, valueProperty, contentProperty, onItemsSelect, selectedItem }) => {
  // console.log(items, 'items from GroupList')
  // console.log(Object.keys(items))
  console.log('items is Array? ', Array.isArray(items))
  if (!Array.isArray(items)) {
    return (
      <ul className="list-group">
        { Object.keys(items).map((item) =>
          <li key={ items[item][valueProperty] }
            className={ 'list-group-item list-group-item-action list-group-item-info' +
              (items[item] === selectedItem ? ' active' : '') }
            onClick={ () => onItemsSelect(items[item]) }
            role='button'
          >
            { items[item][contentProperty] }</li>) }
      </ul>
    )
  }
  return (
    <ul className="list-group">
      { items.map((item) =>
        <li key={ item[valueProperty] }
          className={ 'list-group-item list-group-item-action list-group-item-info' +
            (item === selectedItem ? ' active' : '') }
          onClick={ () => onItemsSelect(item) }
          role='button'
        >
          { item[contentProperty] }</li>) }
    </ul>
  )
}
GroupList.defaultProps = {
  valueProperty: '_id',
  contentProperty: 'name'
}
GroupList.propTypes = {
  items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  valueProperty: PropTypes.string.isRequired,
  contentProperty: PropTypes.string.isRequired,
  onItemsSelect: PropTypes.func,
  selectedItem: PropTypes.object
}

export default GroupList
