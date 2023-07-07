import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div id="header">
        <h1><Link to="/">로고</Link></h1>
        <ul>
            <li><Link to="/sub1">서브페이지1로</Link></li>
            <li><Link to="/sub2">서브페이지2로</Link></li>
            <li>menu3</li>
        </ul>
    </div>
  )
}

export default Header