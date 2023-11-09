import fetchPokemons from './utils/api';
import { useState, useEffect } from 'react';
import { shuffleArray } from './utils/utils';
import EndGame from './cards/EndGame';
import ScoreBoard from './cards/ScoreBoard';
import PokemonCards from './cards/PokemonCards';

function Main() {
  const POKEMONS_COUNT = 12;
  const [pokemons, setPokemons] = useState([]);
  const [bestScore, setBestScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [clickedPokemons, setClickedPokemons] = useState([]);

  useEffect(() => {
    const getPokemons = () => {
      fetchPokemons(POKEMONS_COUNT).then((pokemonData) => {
        const shuffledPokemons = shuffleArray(pokemonData);
        setPokemons(shuffledPokemons);
      });
    };
    getPokemons();
  }, []);

  const handleCardClick = (e) => {
    e.stopPropagation();
    const pokemonName = e.target.parentNode.lastChild.textContent;
    playRound(pokemonName);
    setPokemons(shuffleArray(pokemons));
  };

  const playRound = (pokemonName) => {
    if (clickedPokemons.includes(pokemonName)) {
      resetGame();
    } else {
      const newScore = currentScore + 1;
      if (newScore > bestScore) setBestScore(newScore);
      setCurrentScore(newScore);
      setClickedPokemons((prevState) => [...prevState, pokemonName]);
    }
  };

  const resetGame = () => {
    setClickedPokemons([]);
    setCurrentScore(0);
  };
  const playAgain = () => {
    resetGame();
    setBestScore(0);
  };

  return (
    <main>
      <ScoreBoard currentScore={currentScore} bestScore={bestScore} />
      {bestScore === POKEMONS_COUNT ? (
        <EndGame playAgain={playAgain} />
      ) : (
        <PokemonCards pokemons={pokemons} handleClick={handleCardClick} />
      )}
    </main>
  );
}

export default Main;
