import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import PropsTypes from 'prop-types'
import api from '../api'
import QualitiesList from './qualitiesList'

const UserPage = ({ userId }) => {
  const [user, SetUser] = useState()
  const history = useHistory()

  const handleClick = () => {
    history.push('/users')
  }
  useEffect(() => {
    api.users.getById(userId).then((data) => SetUser(data))
  })
  user && console.log(user)
  // const id = userId
  if (user) {
    return (<div className='m-5'>
      <h5>_id: { userId }</h5>
      <h1>{ user.name }</h1>
      <h2>Профессия: { user.profession.name }</h2>
      <QualitiesList qualities={ user.qualities } />
      <h2>количество встреч: { user.completedMeetings }</h2>
      <h2>рейтинг: { user.rate }</h2>
      <button type="button" className="btn btn-secondary" onClick={ handleClick }>Все пользователи</button>
    </div>)
  } else {
    return <h2 className='m-3'>... loading user</h2>
  }
}
UserPage.propTypes = {
  userId: PropsTypes.string
}

export default UserPage
