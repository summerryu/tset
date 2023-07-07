import React, { useState } from 'react'



function Detail() {
    let [count,countSet] = useState(1)
    let [mainBox,setmainBox] = useState(
        {
            imgs:require("../img/Ballantines.png"),
            title:"Ballantines",
            price:50000,
            count:1,
            priceText: "무이자할부 | 카드 자세히보기",
            event:"이벤트 | 무료배송; 하단 상세페이지 참조",
            textone:"택배배송 | 2500원(주문시 결제) 개인택배사 이용",
            texttwo:"30,000원 이상 구매시 무료 / 제주 추가 3000원, 제주 외 도서지역 추가"
        }
    )
  return (
    <div id="container">
        <div className='center'>
            <div className='main'>
                <div className='left'>
                    <img src={mainBox.imgs}/>
                </div>
                <div className='right'>
                    <h2>{mainBox.title}</h2>
                    <h3>{mainBox.price}<span>원</span></h3>
                    <p>{mainBox.priceText}</p>
                    <p>{mainBox.event}</p>
                    <p>{mainBox.textone}</p>
                    <p>{mainBox.texttwo}</p>
                    <div className='btns'>
                        {/* <button className='prev' onClick={() => {(count == 99)? countSet(99) : countSet(++count)}}>+</button> */}
                        <button className='prev' onClick={()=>{
                            let mainBoxClone = {...mainBox}
                            mainBoxClone.count-=1
                            setmainBox(mainBoxClone);
                        }}></button>
                            <span>{mainBox.count * count }</span>
                        {/* <button className='next' onClick={() => {(count == 1)? countSet(1) : countSet(--count)}}>-</button> */}
                        <button className='next' onClick={()=>{
                            let mainBoxClone = {...mainBox}
                            mainBoxClone.count+=1
                            setmainBox(mainBoxClone)
                        }}></button>
                    </div>
                    <p>총 상품 금액</p><span>{mainBox.price * mainBox.count}</span>
                    <div className='subbtn'>
                        <button>장바구니</button>
                        <button>주문하기</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Detail