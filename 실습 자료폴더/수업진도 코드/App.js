import { Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage"
import ShopPage from "./components/ShopPage"
import Detail from  "./components/Detail"
import { useState } from "react";

function App() {
  let [testData,testDataSet] = useState([{
    name:"우리집 사장님",
    phone:"010-1111-2222",
    imgs:require("./img/pic2_1.png")
  },{
    name:"너희집 사장님",
    phone:"010-2222-3333",
    imgs:require("./img/pic2_2.png")
  }]);
  
  let [testNumber,testNumberSet] = useState(60);
  let [testString,testStringSet] = useState("집에가고 싶다.");
  { /* props properties (속성) 태그에 속성명을 지정해서 원하는 데이터값을 자식컴포넌트에게 전달할 때 사용
       넘겨준 데이터값을 자식컴포넌트에서 수정할 수 없음 (읽기 전용)
*/}
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<MainPage members={testData}></MainPage>}></Route>
            {/*데이터값 전달 방법 -> 하위 컴포넌트 -> 하위 컴포넌트 */}
            <Route path="/shop" element={<ShopPage members={testData}></ShopPage>}></Route>
            <Route path="/detail/:no" element={<Detail members={testData}></Detail>}></Route>
            <Route path="*" element={<div>페이지를 찾을 수 없습니다.</div>}></Route>
            { /* 위의 route 경로에 작성한 /  /shop  /detail/1   <-- 해당하지 않은 나머지 것들 */}
        </Routes>
    </div>
  );
}

export default App;
