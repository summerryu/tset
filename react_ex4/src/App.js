import React from 'react'
import { Routes , Route} from 'react-router-dom'
import MainPage from './components/MainPage'
import SubPage1 from './components/SubPage1'
import SubPage2 from './components/SubPage2'


function App() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<MainPage></MainPage>}></Route>
            <Route path="/sub1" element={<SubPage1></SubPage1>}></Route>
            <Route path="/sub2" element={<SubPage2></SubPage2>}></Route>
        </Routes>
    </div>
  )
}

export default App