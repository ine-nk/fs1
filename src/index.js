import React from 'react'
import Api from './App'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'
// import Users from './component/users'
// import  bootstrap from 'bootstrap'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Api />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
// <Users />
