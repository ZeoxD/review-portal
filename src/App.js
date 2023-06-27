import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { useAuthContext } from './hooks/useAuthContext'

// styles & images
import './App.css';

//pages & components
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup"
import Navbar from "./components/Navbar";
import Dashboard from "./pages/dashboard/Dashboard";
import Explore from "./pages/explore/Explore";
import Preview from "./pages/preview/Preview";
import Create from "./pages/dashboard/Create";
import Visit from './pages/visit/Visit';

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
              <Route exact path="/" element = { user ? <Dashboard/> : <Navigate to="/preview"/> } />
              <Route path="/explore" element = { user ? <Explore/> : <Navigate to="/preview"/> } />
              <Route path="/achievements" element = { user ? <Create/> : <Navigate to="/preview"/> } />
              <Route path="/preview" element = { !user ? <Preview/> : <Navigate to="/"/> } />
              <Route path="/visit/:id" element = { user ? <Visit /> : <Navigate to="/preview"/> } />
            </Routes>
          </div>
        </BrowserRouter>
      }
    </div>
  );
}

export default App;