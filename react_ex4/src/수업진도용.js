import { useState } from "react";

function App() {
  // 배열 및 객체의 상태값을 변경하려면? -> 클릭 or 마우스 올리기
  // state값을 복사본만들고 변수에 담아줌. -> [...배열이름]
  // 복사본 데이터값을 수정합니다
  // 복사본 배열 또는 객체를 state 세팅 했을때 옆에 있는 함수명으로 전달해서 원본을 바꾼다.
  let [testArray,testArraySet] = useState(
    ["월요일","화요일","수요일","목요일"]
  );
  let [testObj,testObjSet] = useState({
      name:"김길동",
      birth:"9999-12-31",
      age:5300
  });
  let [testData,testDataSet] = useState(
    [
      {
        title:"토니워커 300세",
        count:1,
        price:15000
      },
      {
        title:"비타 500세",
        count:1,
        price:30000
      },
    ]
  )

  return (
    <div className="App">
      <button className="=btn1" onClick={()=>{
        // 전개연산자로 원본 복사
        let testArrayClone = [...testArray];
        testArrayClone[0] = "안녕";
        testArrayClone[1] = "나는";
        testArrayClone[2] = "여름";
        testArrayClone[3] = "이야";
        testArraySet(testArrayClone);
              }}>배열값 수정</button>
      <button className="=btn2" onClick={()=>{
          let testObjClone = {...testObj}
      }}>객체값 수정</button>
    
      {
      testData.map((data,idx)=>{
        return(
            <div>
              <div key={idx}>{data.title}</div>
              <div key={idx}>{data.count}</div>
              <div key={idx}>{data.price * data.count}</div>
              
              <button onClick={()=>{
                  let testDataClone = [...testData]
                  testDataClone[idx].count+=1
                  testDataSet(testDataClone)
                }}>증가
              </button>
                <button onClick={()=>{
                  let testDataClone = [...testData]
                  testDataClone[idx].count-=1
                  testDataSet(testDataClone)
                }}>감소
                </button>
            </div>
        )
      })
    }
    </div>
  );
}

export default App;
