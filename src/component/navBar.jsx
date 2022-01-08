import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (<div>
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link className="nav-link " aria-current="page" to="/">Main</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/login">Login</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/users">Users</Link>
      </li>
    </ul>
  </div>)
}

export default NavBar
