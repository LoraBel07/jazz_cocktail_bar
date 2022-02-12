import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Bar from "./Bar";
import Home from "./Home";
import Menu from "./Menu";
import Music from "./Music";


function App() {
  return (
    <Router>
      <nav>        
        <Link to="/" className="link name">Cat in Case</Link>
        <Link to="/" className="link">Home</Link>
        <Link to="/menu" className="link">Menu</Link> 
        <Link to="/music" className="link">Music</Link>
        <Link to="/bar" className="link">Bar</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/music" element={<Music />} />
        <Route path="/bar" element={<Bar />} />

      </Routes>
    </Router>
  )
}

export default App;
