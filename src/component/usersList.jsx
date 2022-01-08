import 'bootstrap/dist/css/bootstrap.min.css'
import { paginate } from '../utils/paginate'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import Pagination from './pagination'
import SearchStatus from './searchStatus'

import GroupList from './groupList'
import api from '../api'

import UsersTable from './usersTable'
import _ from 'lodash'

const UsersList = ({ ...rest }) => {
  // для users будем использовать алиас allUsers, а имя users будем использовать для страниц - вместо userCrop

  const [currentPage, setCurrentPage] = useState(1)
  // const [professions] = useState(api.professions.fetchAll())
  const [professions, setProfessions] = useState()
  const [selectedProf, setSelectedProf] = useState()
  const [sortBy, setSortBy] = useState({ path: 'name', order: 'asc' })
  useEffect(() => {
    api.professions.fetchAll().then((data) => setProfessions(data))
  }, [])

  // const [users, setUsers] = useState(api.users.fetchAll())
  const [users, setUsers] = useState()
  useEffect(() => {
    api.users.fetchAll().then((data) => {
      setUsers(data)
    })
  }, [])

  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user._id !== userId))
    // if (count <= pageSize) { setCurrentPage(1) }
  }

  const handleToggleBookmark = (id) => {
    console.log('handleToggleBookmark id= ', id)

    setUsers(
      users.map((user) => {
        if (user._id === id) {
          return { ...user, bookmark: !user.bookmark }
        }
        return user
      })
    )
  }

  // useEffect(() => {
  //   console.log(professions, 'professions')
  // }, [professions])

  const pageSize = 8
  // console.log('users \n', allUsers)

  // console.log(count, 'count')

  useEffect(() => {
    setCurrentPage(1)
  }, [selectedProf])

  const handlePageSize = (pageIndex) => {
    setCurrentPage(pageIndex)
  }

  const handleProfessionsSelect = (item) => {
    setSelectedProf(item)
    console.log(item)
  }

  const handleSort = (item) => {
    // логика сортировки была перенесена в userTable
    console.log('from users handleSort item', item)
    setSortBy(item)
    console.log('sortBy', sortBy)
  }
  //! делаем проверку = если  есть пользователи -то возвращаем код если нет - то loading
  if (users) {
    const filteredUsers = selectedProf
      ? users.filter((user) => (JSON.stringify(user.profession) === JSON.stringify(selectedProf)))
      : users

    console.log(filteredUsers, 'filteredUsers')
    // тут была переменная userCrop  стала users

    const count = filteredUsers.length

    const sortedUsers = _.orderBy(filteredUsers, [sortBy.path], [sortBy.order])

    const usersCrop = paginate(sortedUsers, currentPage, pageSize)

    // console.log(professions)
    const clearFilter = () => {
      setSelectedProf()
    }

    return (
      <div className=' d-flex p-2 m-3'>
        <div className='d-flex flex-column flex-shrink-0 m-2 '>
          { professions && <>
            <GroupList
              items={ professions }
              selectedItem={ selectedProf }
              // valueProperty='_id'
              // contentProperty='name'
              // перенесены в компонент как значения по умолчанию
              onItemsSelect={ handleProfessionsSelect } />
            <button className='btn btn-secondary mt-2' onClick={ clearFilter }>
              Очистить
            </button>
          </>
          }
        </div>
        <div className=' d-flex flex-column flex-grow-1'>
          <SearchStatus numberUsers={ count } />
          { count > 0 && (
            <>
              <UsersTable
                users={ usersCrop }
                onSort={ handleSort }
                selectedSort={ sortBy }
                onDelete={ handleDelete }
                onToggleBookmark={ handleToggleBookmark }
              />
              <div className="d-flex justify-content-center">
                <Pagination
                  itemCount={ count }
                  pageSize={ pageSize }
                  currentPage={ currentPage }
                  onPageChange={ handlePageSize }
                />
              </div>
            </>
          ) }
        </div>
      </div>
    )
  }
  return 'loading ...'
}
UsersList.propTypes = {
  users: PropTypes.array,
  count: PropTypes.number
  // allUsers: PropTypes.array
}

export default UsersList
