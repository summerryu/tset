import React, { useState } from 'react'
import Header from "./Header"
import Footer from "./Footer"
import { useParams } from 'react-router-dom'

function Detail(props) {
    //app.js에서 라우터 설정 시    /:no  <-- 매개변수 이름이랑 똑같이 작명해서 사용해야함
    let {no} = useParams();
    
  /* 웹브라우저 주소창에 있는 url parameter에 들어간 값에 따라
     태그에 출력되는 데이터값이 다르게 나와야 상세페이지를 표현할 수 있음
     url parameter 어떻게 사용 할 수 있을까? useParams()  <--- 주소창에 붙여준 데이터값 출력
  */
  return (
    <>
        <Header members={props.members}></Header>
        <div id="container">
            {/*주소창에 보내준 데이터값을 배열 순번으로 사용 */}
            <div>{props.members[no].name}</div>
            <div>{props.members[no].phone}</div>
            <img src={props.members[no].imgs} />
        </div>
        <Footer></Footer>
    </>
  )
}

export default Detail