import { useState, useEffect } from 'react';
import './App.css';
import { random } from 'lodash';
// import image1 from './Pokemon IDs/1.png';
// import image2 from './Pokemon IDs/2.png';
// import image3 from './Pokemon IDs/3.png';

function App() {
  const [score, setScore] = useState(0);
  const [display, setDisplay] = useState([]);
  const [pokemon, setPokemon] = useState([
    {
      name: '',
      id: '',
      imageUrl: '',
    },
  ]);

  // data.sprites.front_default;

  const randomIdGenerator = random(1, 3);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${randomIdGenerator}/`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        let name = data.name;
        console.log(name);
      });
  });

  return (
    <div className="App">
      <div className="title">
        <h1>Pokemon Memory Card</h1>
        <button>Click me</button>
        <div className="score-board">
          <h2>Score: </h2>
          <h2>High Score: </h2>
        </div>
        <div className="pokemons">
          <div className="pokemon-cards">
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${randomIdGenerator}.png`}
              alt=""
            />
          </div>
          <div className="pokemon-cards">
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${randomIdGenerator}.png`}
              alt=""
            />
          </div>
          <div className="pokemon-cards">
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${randomIdGenerator}.png`}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
