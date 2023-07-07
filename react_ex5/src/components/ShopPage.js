import React from 'react'
import Header from "./Header"
import ShopContainer from "./ShopContainer"
import Footer from "./Footer"

function ShopPage(props) {

  return (
    <>
        <Header members={props.members}></Header>
        <ShopContainer></ShopContainer>
        <Footer></Footer>
    </>
  )
}

export default ShopPage