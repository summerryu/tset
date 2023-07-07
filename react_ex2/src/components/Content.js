
// 데이터 바인딩
// 데이터 세팅 / 작성하는 태그에 내용 출력

import { useState } from "react"


function Content() {
    // 여기가 데이터 세팅 구간

    // 여기가 데이터 세팅구간 [데이터담을변수명,데이터수정함수명]
    // state [ 데이터 상태]

    let [testNumber,setTestNumber] = useState(
        [
        {
            title:"여름셔츠",
            price:35000,
            date:"2023-05-16",
            thumbnail:require("../imgs/bn_01.jpg")
        },
        {
            title:"여름운동화",
            price:20000,
            date:"2023-04-26",
            thumbnail:require("../imgs/bn_02.jpg")
        },
        {
            title:"여름 바지",
            price:15000,
            date:"2023-07-16",
            thumbnail:require("../imgs/bn_03.jpg")
        }]
    );

  return (
    <div className="Content1">
        {
            testNumber.map((item,idx)=>{
                return(
                    <div className="box" key={idx}>
                        <img src={item.thumbnail}/>
                        <h2>{item.title}</h2>
                        <p>{item.price}</p>
                        <span>{item.date}</span>
                    </div>
                )
            })
        }
    </div>
   
  )
}

export default Content