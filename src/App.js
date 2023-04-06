import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Login from "./components/Login";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element = {<Login/>} />
          <Route exact path="/home" element = {<> <Header/> <Home/> </>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
