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
        </ul>
        <div class="tabCont">
            {
                tabCont.map(function(item,index){
                    return(
                        <div key={index} className={(tabNumber === index) ? "show" : ""}>{item}</div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Tabs