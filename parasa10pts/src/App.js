
import './App.css';
import { User } from "./User.js";

function App () {
  const plants = [
    {planetName: "Mercury", isRockPlanet: true},
    {planetName: "Venus", isRockPlanet: true},
    {planetName: "Earth", isRockPlanet: true},
    {planetName: "Mars", isRockPlanet: true},
    {planetName: "Jupiter", isRockPlanet: false},
    {planetName: "Saturn", isRockPlanet: false},
    {planetName: "Neptune", isRockPlanet: false},
    {planetName: "Uranus", isRockPlanet: false},
    {planetName: "Pluto", isRockPlanet: true},
  ];
  
  return (
    <div className="App">
      {planets.map((planet, key) => {
        return <User key={key} name={planet.planetName} isRockPlanet={planet.isRockPlanet} />;
      })}
    </div>
  );
}

export default App;
