import React from 'react';
import { User } from './User.js';
import './App.css'; // Import the CSS file

function App() {
  const planets = [
    // ... (unchanged)
  ];

  return (
    <div className="App">
      {planets.map((planet, key) => {
        return (
          <User key={key} name={planet.planetName} isRockPlanet={planet.isRockPlanet} />
        );
      })}
    </div>
  );
}

export default App;