import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Packages from './pages/Packages';
import Header from './components/Header'; // Correct the import path if needed
import './global.css'; // Import the global stylesheet

function App() {
  const [openNavigation, setOpenNavigation] = useState(false);

  return (
    <Router>
      {/* Passing state and updater to Header */}
      <Header openNavigation={openNavigation} setOpenNavigation={setOpenNavigation} />
      
      <Routes>
        {/* Passing the openNavigation state to Home */}
        <Route path="/" element={<Home openNavigation={openNavigation} />} />
        <Route path="/packages" element={<Packages />} />
      </Routes>
    </Router>
  );
}

export default App;
