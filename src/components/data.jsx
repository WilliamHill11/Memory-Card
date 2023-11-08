const fetchPokemon = (count) => {
  const pokemons = [];

  for (let i = 1; i <= count; i++) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const name = data.name;
        const image = data.sprites.front_default;
        const id = data.id;
        console.log(id);
        console.log(image);
        console.log(name);
        pokemons.push({ name, image, id });
      });
  }
  return pokemons;
};

export default fetchPokemon;
