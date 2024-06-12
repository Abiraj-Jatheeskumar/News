import React from "react";
import Sidebar from "./components/Sidebar";
import Newsfeed from "./pages/Newsfeed";
import Home from './pages/Home';
import Addride from './pages/Addride';
import Currentride from './pages/Currentride';
import './App.css';
import { BrowserRouter, Routes, Route ,Navigate} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="dashboard">
        <Sidebar />
        <div className="content">
         
          <Routes>
          <Route path="/" element={<Navigate to="/newsfeed" replace />} />
            <Route path="/newsfeed" element={<Newsfeed />} />
            <Route path="/home" element={<Home />} />
            <Route path="/addride" element={<Addride />} />
            <Route path="/currentride" element={<Currentride />} />
          </Routes>
        </div>
      </div>
      
    </BrowserRouter>
    
  );
}

export default App;
