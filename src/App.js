import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Login from "./components/Login";
import Header from "./components/Header";
import Home from "./components/Home";
import Explore from "./components/Explore";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element = {<Login/>} />
          <Route exact path="/home" element = {<> <Header home="active" explore=""/> <Home/> </>} />
          <Route exact path="/explore" element = {<> <Header home="" explore="active"/> <Explore/> </>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
