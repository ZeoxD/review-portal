import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Login from "./pages/login/Login";
import Header from "./pages/navbar/Header";
import Dashboard from "./pages/dashboard/Dashboard";
import Explore from "./pages/explore/Explore";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element = {<Login/>} />
          <Route path="/home" element = {<> <Header home="active" explore=""/> <Dashboard/> </>} />
          <Route path="/explore" element = {<> <Header home="" explore="active"/> <Explore/> </>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;