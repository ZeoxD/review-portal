import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import {useAuthContext} from './hooks/useAuthContext'

// styles & images
import './App.css';

//pages & components
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup"
import Home from "./pages/home/Home"
import Navbar from "./components/Navbar";
import Dashboard from "./pages/dashboard/Dashboard";
import Explore from "./pages/explore/Explore";
import Preview from "./pages/preview/Preview";

function App() {
  const { user, authIsReady } = useAuthContext()

  return (
    <div className="App">
      { authIsReady &&
        <BrowserRouter>
          <div className="container">
            <Navbar />
            <Routes>
              <Route path="/login" element = { !user ? <Login/> : <Navigate to="/"/> } />
              <Route path="/signup" element = { !user ? <Signup/> : <Navigate to="/"/> } />
              <Route path="/home" element = { user ? <Home/> : <Navigate to="/preview"/> } />
              <Route path="/explore" element = { user ? <Explore/> : <Navigate to="/preview"/> } />
              <Route path="/preview" element = { !user ? <Preview/> : <Navigate to="/"/> } />
              <Route exact path="/" element = { user ? <Dashboard/> : <Navigate to="/preview"/> } />
            </Routes>
          </div>
        </BrowserRouter>
      }
    </div>
  );
}

export default App;