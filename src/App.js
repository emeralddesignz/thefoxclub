import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import GameBox from './components/GameBox/GameBox';

function App() {
  return (
    <div class="w-4/5 mx-auto">
      <Navbar />
      <GameBox />
      {/* Other components or content */}
    </div>
  );
}

export default App;
