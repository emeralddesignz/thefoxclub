import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import GameBox from './components/GameBox/GameBox';
import LastSpinWinners from './components/LastSpinWinners/LastSpinWinners';

function App() {
  return (
    <div class="w-4/5 mx-auto">
      <Navbar />
      <div class="mt-5 gameboxlastspinner">
        <GameBox />
        <LastSpinWinners />
      </div>
      {/* Other components or content */}
    </div>
  );
}

export default App;
