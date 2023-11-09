import { capitalizeFirstLetter } from './utils';

const fetchPokemons = async (count) => {
  const pokemons = [];

  for (let i = 1; i <= count; i++) {
    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${i}`;
    const response = await fetch(pokemonUrl);
    const pokemon = await response.json();
    const id = pokemon.id;
    const name = capitalizeFirstLetter(pokemon.name);
    const image = pokemon.sprites.front_default;
    pokemons.push({ id, name, image });
  }

  return pokemons;
};

export default fetchPokemons;
