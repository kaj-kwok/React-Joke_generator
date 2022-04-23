import './App.css';
import useRandomJoke from "./hooks/getJoke.js"
import axios from 'axios';

function App() {

  const { value, getJoke } = useRandomJoke();
  console.log(value)

  return (
    <div className="App">
      <h5>{value}</h5>
      <button onClick={() => getJoke()}>New Joke</button>
    </div>
  );
}

export default App;
