import React from 'react'
import { RouterAPI } from 'dva'
import { Router, Route } from 'dva/router'
import A from './pages/A'
import B from './pages/B'
export default (router: RouterAPI) => {
  const { history } = router
  return (
    <Router history={history}>
      <div className='container'>
        <header>
          <h3>请选择页面</h3>
          <ul className='header'>
            <li onClick={() => {history.push('/a')}}>A</li>
            <li onClick={() => {history.push('/b')}}>B</li>
          </ul>
        </header>
        <div className='content'>
          <Route path="/a" component={A} />
          <Route path="/b" component={B} />
        </div>
      </div>
    </Router>
  )
}