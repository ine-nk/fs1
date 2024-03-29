import React from 'react'
import PropTypes from 'prop-types'
import BookMark from './bookmark'
import QualitiesList from './qualitiesList'
import Table from './table'
import { Link } from 'react-router-dom'

const UsersTable = ({ users, onSort, selectedSort, onToggleBookmark, onDelete, ...rest }) => {
  const columns = {
    name: {
      path: 'name',
      name: 'Имя',
      component: (user) => <Link
        to={ `/users/${user._id}` } > { user.name }</Link>
    },
    professions: { path: 'profession.name', name: 'Профессия' },
    qualities: { name: 'Качества', component: (user) => <QualitiesList qualities={ user.qualities } /> },
    completedMeetings: { path: 'completedMeetings', name: 'Встретился, раз' },
    rate: { path: 'rate', name: 'Оценка' },
    bookmark: {
      path: 'bookmark',
      name: 'Избранное',
      component: (user) => (<BookMark
        status={ user.bookmark }
        onClick={ () => onToggleBookmark(user._id) } />)
    },
    delete: {
      component: (user) => (
        <button className="btn btn-sm btn-danger" onClick={ () => onDelete(user._id) }>
          Удалить
        </button>
      )
    }
  }

  return (
    <Table
      onSort={ onSort }
      selectedSort={ selectedSort }
      columns={ columns }
      data={ users }
    />

  )
}
UsersTable.propTypes = {
  users: PropTypes.array.isRequired,
  onSort: PropTypes.func.isRequired,
  selectedSort: PropTypes.object.isRequired,
  onToggleBookmark: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default UsersTable
