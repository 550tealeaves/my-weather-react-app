import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather defaultCity="Savannah" />
      </header>
      <footer>
        <small>
          Project coded by Nastasia Pollas and is{" "}
          <a
            href="https://github.com/550tealeaves/my-weather-react-app"
            target="blank"
          >
            open-source code on Github
          </a>{" "}
          and{" "}
          <a href="https://confident-northcutt-07eba8.netlify.app/" target="blank">
            hosted by Netlify
          </a>
        </small>
      </footer>
    </div>
  );
}

