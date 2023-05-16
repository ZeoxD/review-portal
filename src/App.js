import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Login from "./pages/login/Login";
import Home from "./pages/home/Home"
import Navbar from "./components/navbar/Navbar";
import Dashboard from "./pages/dashboard/Dashboard";
import Explore from "./pages/explore/Explore";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element = {<Home/>} />
          <Route path="/login" element = {<Login/>} />
          <Route path="/home" element = {<> <Navbar home="active" explore=""/> <Home/> </>} />
          <Route path="/explore" element = {<> <Navbar home="" explore="active"/> <Explore/> </>} />
          <Route path="/dashboard" element = {<> <Navbar home="active" explore=""/> <Dashboard/> </>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;