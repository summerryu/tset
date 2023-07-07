import { Link, Route, Routes } from "react-router-dom";
import Maincontainer from "./components/Maincontainer";
import Subpage from "./components/Subpage";
import { useState } from "react";
import './style/style.scss';
import Detail from "./components/Detail";

function App() {
  let [componeData,componeDataSet] = useState(
    [
        {
            imgs:require("./img/bn_01.jpg"),
            price:29700,
            title:"바람 건조 휴대용 칫솔"
        },
        {
            imgs:require("./img/bn_02.jpg"),
            price:1655000,
            title:"센 멀티 에어컨"
        },
        {
            imgs:require("./img/bn_03.jpg"),
            price:359000,
            title:"젝터 미니빔 가정용"
        },
    ]
)
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Maincontainer page={componeData}></Maincontainer>}></Route>
        <Route path="/sub/:no" element={<Detail page={componeData}></Detail>}></Route>
      </Routes>
    </div>
  );
}

export default App;
