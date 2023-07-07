import React, { useState } from 'react'

function Tabs() {
  //탭메뉴들 배열로 데이터 세팅
  //탭콘텐츠 데이터들 배열로 세팅
  //탭 순번값 세팅
  let [tabNumber,tabNumberSet] = useState(0); // 0,1,2,3
  let [tabMenus,tabMenuSet] = useState(["탭메뉴1","탭메뉴2","탭메뉴3","탭메뉴4"]);
  let [tabCont,tabContSet] = useState(["탭박스1","탭박스2","탭박스3","탭박스4"]);

  return (
    <div className="tabWrap">
        <ul className="tabMenu">
            {
                tabMenus.map(function(item,index){
                    return(
                        <li key={index} className={(tabNumber === index) ? "on" : ""} onClick={()=>{tabNumberSet(index)}}><a href="#">{item}</a></li>
                    )
                })
            }
            {/* <li className={(tabNumber === 0) ? "on" : ""} onClick={()=>{tabNumberSet(0)}}><a href="#">탭메뉴1</a></li>
            <li className={(tabNumber === 1) ? "on" : ""} onClick={()=>{tabNumberSet(1)}}><a href="#">탭메뉴2</a></li>
            <li className={(tabNumber === 2) ? "on" : ""} onClick={()=>{tabNumberSet(2)}}><a href="#">탭메뉴3</a></li>
            <li className={(tabNumber === 3) ? "on" : ""} onClick={()=>{tabNumberSet(3)}}><a href="#">탭메뉴4</a></li> */}
        </ul>
        <div class="tabCont">
            {
                tabCont.map(function(item,index){
                    return(
                        <div key={index} className={(tabNumber === index) ? "show" : ""}>{item}</div>
                    )
                })
            }
            {/* <div className={(tabNumber === 0) ? "show" : ""}>탭박스1</div>
            <div className={(tabNumber === 1) ? "show" : ""}>탭박스2</div>
            <div className={(tabNumber === 2) ? "show" : ""}>탭박스3</div>
            <div className={(tabNumber === 3) ? "show" : ""}>탭박스4</div> */}
        </div>
    </div>
  )
}

export default Tabs