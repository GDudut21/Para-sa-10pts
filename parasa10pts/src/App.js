
import './App.css';

function App() {
  const name = <h1>"Giron"</h1>
  const age = <h2>21</h2>
  const email = <h2>giron@.edu.ph</h2>
  const user =(<div>
    {name}
    {age}
    {email}
    </div>);
  }
  return (
    <div className="App">
     {name}
     {age}
     {email}
    </div>
  );

export default App;
