
import Detail from "./components/Detail";
import Header from "./components/Header";
import './style/detail.scss'
import List from "./components/List";



function App() {
  return (
    <div className="App">
      <Header />
      <Detail />
      <div className="sub">
          <List />
      </div>
    </div>
  );
}

export default App;
