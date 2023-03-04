import { Route, Routes } from 'react-router-dom';
import './App.css';
import CallbackPage from './components/CallbackPage';
import GraphPage from './components/GraphPage';
import Navigation from './components/Navigation';
import NullPage from './components/NullPage';
import PrivacyPage from './components/PrivacyPage';
import Login from './components/Login';
import { useRef, useState, useEffect } from 'react';

function App() {
  const [hover, setHover] = useState("")
  const backgroundRef = useRef(null)

  const handleMouseEnter = (id) => {
    console.log("mouseEnter")
    setHover("background-hover")
  }

  const handleMouseExit = (id) => {
    setHover("")
    const currentRef = backgroundRef.current
  }

  const handleBar = (id) => {
    const currentRef = backgroundRef.current
    currentRef.dataset.active = id
    
  }
  const handleClick = (id) => {
    
  }
  return (
    <div id="background" className="App">
      <Navigation />
      <div className="content-container">
        <Routes>
          <Route path="/" element={<GraphPage handleMouseEnter={handleMouseEnter} handleMouseExit={handleMouseExit} handleBar={handleBar}/>} />
          <Route path="spotify-distribution/privacy-policy" element={<PrivacyPage />} />
          <Route path="spotify-distribution/callback" element={<CallbackPage />} />
          <Route path="/*" element={<NullPage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      <div ref={backgroundRef} id="background-img" className={`background ${hover}`}></div>
    </div>
  );
}

export default App;
