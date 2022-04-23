import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [value, setValue] = useState('')

  useEffect(() => {
    const getJoke = () => {
      axios.get('http://api.icndb.com/jokes/random')
        .then(obj => setValue(obj.data.value.joke))
        .catch()
    }

    getJoke()
  }, [])


  return (
    <div className="App">
      <h5>{value}</h5>
    </div>
  );
}

export default App;
