import React from 'react'
import { useParams } from 'react-router'
import UserPage from '../component/userPage'
import UsersList from '../component/usersList'

const Users = () => {
  const params = useParams()
  const { userId } = params
  return (<>
    { userId ? <UserPage userId={ userId } /> : <UsersList /> }
  </>)
}

export default Users
