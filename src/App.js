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
        <div className="container">
          <Navbar />
          <Routes>
            <Route path="/login" element = {<Login/>} />
            <Route exact path="/" element = {<Home/>} />
            <Route path="/explore" element = {<Explore/>} />
            <Route path="/dashboard" element = {<Dashboard/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;