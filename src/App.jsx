import { useState, useEffect } from 'react';
import './App.css';
import { random } from 'lodash';
import fetchPokemon from './components/data';
// import image1 from './Pokemon IDs/1.png';
// import image2 from './Pokemon IDs/2.png';
// import image3 from './Pokemon IDs/3.png';

function App() {
  const [score, setScore] = useState(0);
  const [display, setDisplay] = useState([]);
  const [pokemon, setPokemon] = useState([]);
  const pokemonCount = 5;

  // data.sprites.front_default;

  const randomIdGenerator = random(1, 3);

  const shuffleArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    const getPokemons = async () => {
      setPokemon(shuffleArray(await fetchPokemon(pokemonCount)));
    };
    getPokemons();
    console.log(pokemon, 'poke');
  }, []);

  // useEffect(() => {
  //   for (let i = 1; i <= pokemonCount; i++) {
  //     fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         const name = data.name;
  //         const image = data.sprites.front_default;
  //         const id = data.id;
  //         setPokemon([...pokemon, [name, image, id]]);
  //         console.log(pokemon, 'yolo');
  //         console.log(id);
  //         console.log(image);
  //         console.log(name);
  //       });
  //   }
  // }, []);

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
            <img src={pokemon} alt="" />
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
