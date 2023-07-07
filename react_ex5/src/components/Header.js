import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Header(props) {
  console.log("헤더에 데이터 제대로 전달");
  console.log(props);
  return (
    <div id="header">
        <Link to="/">메인</Link>
        <Link to="/shop">샵페이지로</Link>
        <ul>
           {
              props.members.map(function(item,index){
                  return(
                    <li key={index}><Link to={`/detail/${index}`}>{item.name}</Link></li>
                  )
              })
           }
        </ul>
        상단영역입니다(공통요소)
    </div>
  )
}

export default Header