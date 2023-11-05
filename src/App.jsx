// import { useState } from 'react';
import './App.css';
import { random } from 'lodash';

function App() {
  const fetchPokemon = () => {
    const randomIdGenerator = random(1, 3);
    fetch(`https:pokeapi.co/api/v2/pokemon/${randomIdGenerator}/`)
      .then((res) => res.json())
      .then((data) => console.log(data.name));
  };

  return (
    <div className="App">
      <div className="title">
        <h1>Pokemon Memory Card</h1>
        <button onClick={fetchPokemon}>Click me</button>
        <h2>{}</h2>
      </div>
    </div>
  );
}

export default App;
