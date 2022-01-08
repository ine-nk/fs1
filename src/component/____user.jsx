import React from 'react'
import BookMark from './bookmark'
import Quality from './quality'
import PropTypes from 'prop-types'

const User = ({
  _id,
  name,
  profession,
  qualities,
  completedMeetings,
  rate,
  onDelete,
  onToggleBookmark,
  bookmark
}) => {
  // console.log('id: ', _id, ' из User')
  return (
    <tr key={ _id } className="table-secondary">
      <th>{ name }</th>
      <td>{ profession.name }</td>
      <td>
        { qualities.map((item) => (
          <Quality key={ item._id } { ...item } />
        )) }
      </td>
      <td>{ completedMeetings }</td>
      <td>{ rate } / 5</td>
      <td className="text-center">
        <BookMark status={ bookmark } onClick={ () => onToggleBookmark(_id) } />
      </td>
      <td>
        <button className="btn btn-sm btn-danger" onClick={ () => onDelete(_id) }>
          Удалить
        </button>
      </td>
    </tr>
  )
}
User.propTypes = {
  _id: PropTypes.string,
  name: PropTypes.string,
  profession: PropTypes.object,
  qualities: PropTypes.array,
  completedMeetings: PropTypes.number,
  rate: PropTypes.number,
  onDelete: PropTypes.func,
  onToggleBookmark: PropTypes.func,
  bookmark: PropTypes.bool
}

export default User
