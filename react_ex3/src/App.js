import { useState } from "react";
import "./style/main.scss"
import Tabs from "./components/Tabs";
import Slide from "./components/Slide";




function App() {
  /* 상태값 담는 변수이름, 상태값 변경하는 함수이름 */
  let [count,countSet] = useState(0)
  /* html 태그 쪽에서 이벤트를 걸거나 텍스트 내용을 출력하거나 속성값을 설정하거나
    { } <- 내부에서 작업함
  */
//  let [day,daySet]  useState("오늘은 먼요일");
 let [toggle,toggleSet] = useState(false);
 // button 두개 따로 만들기 -> 1/수요일 2/모름
  
  return (
    <div className="App">
      <div className="test">
        <button className="minus" onClick={function(){ (count <=1)? countSet() : countSet(count-=1) }}>빼기</button>
        <button className="plus" onClick={function(){(count >= 10)? countSet(10) : countSet(count+=1)}}>더하기</button>
      </div>
      <div className="days">
        <div className={(toggle) ? "popup show" : "popup"}>팝업 화면창</div>
        <button className="on" onClick={function(){ toggleSet(true)}}>팝업창on</button>
        <button className="off" onClick={function(){ toggleSet(false)}}>팝업창off</button>
      </div>
      <Tabs/>
      <Slide/>
    </div>
  );
}

export default App;
