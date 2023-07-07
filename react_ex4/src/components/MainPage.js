import React from 'react'
import Header from './Header'
import Footer from './Footer'

// 메인페이지 중간영역을 별도의 컴포넌트로 만들어서 불러올 수 있음
// scss, css 하나의 파일에 모든 페이지의 디자인 작업을 넣을 수 있음
// 컴포넌트 별로 따로따로 css
function MainPage() {
  return (
    <div id="wrapper">
        <Header></Header>
        <div id="container">
            메인 중간영역
        </div>
        <Footer></Footer>        
    </div>
  )
}

export default MainPage