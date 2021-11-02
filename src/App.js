import Weather from "./Weather";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather defaultCity="Savannah" />
      </header>
    </div>
  );
}

export default App;
