import React from 'react'
import Header from "./Header"
import MainContainer from "./MainContainer"
import Footer from "./Footer"
//컴포넌트가 만들어질 때는 반드시 하나의 부모태그로 끝내야함
//의미없는 태그이 싫은 경우  이름이 없는 상태의 태그로 작업가능
function MainPage(props) {

  return (
    <>
        <Header members={props.members}></Header>
        <MainContainer></MainContainer>
        <Footer></Footer>
    </>
  )
}

export default MainPage