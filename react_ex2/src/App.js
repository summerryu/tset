// import logo from './logo.svg';
import './style/main.scss'; // sass 파일 연결 [변환 과정없어도 가능]
import Content from './components/Content';

// 컴포넌트 작업시 감싸는 부모는 하나로 구성되어있어야함.
// 컴포넌트 이름 작명시 앞글자 하나만 대문자로 구성
// css작업은 파일을 따로 만든 후 작업 후 import 구문으로 해당 컴포넌트에 연결해서 사용
// 경로 설정시 현재 작업하고 있는 컴포넌트 파일 기준으로 찾음
// scss 작업은 따로 변환 필요없이 css 작업하는것처럼 동일하게 import 시키면 끝


// 데이터 세팅 / 바인딩 [연결]
// 태그 여러개 만들어야 할 때 -> 반복문 작업



function App() {
  return (
    <div className="App">
      <div id="header">
        <div className="center">
          <img src="./img/bn_01.jpg" />
          <img src="./img/bn_02.jpg" />
        </div>
      </div>
      <Content></Content>
    </div>
  );
}

export default App;
