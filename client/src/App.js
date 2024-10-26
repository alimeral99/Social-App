import "./App.css";
import Feed from "./Components/Feed/Feed";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Widget from "./Components/Widget/Widget";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="app-body">
        <Sidebar />

        <Feed />
      </div>

      {/* <Widget /> */}
    </div>
  );
}

export default App;
