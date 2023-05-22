import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup"
import Home from "./pages/home/Home"
import Navbar from "./components/Navbar";
import Dashboard from "./pages/dashboard/Dashboard";
import Explore from "./pages/explore/Explore";
import Preview from "./pages/preview/Preview";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="container">
          <Navbar />
          <Routes>
            <Route path="/login" element = {<Login/>} />
            <Route path="/signup" element = {<Signup/>} />
            <Route path="/home" element = {<Home/>} />
            <Route path="/explore" element = {<Explore/>} />
            <Route path="/preview" element = {<Preview/>} />
            <Route exact path="/" element = {<Dashboard/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;