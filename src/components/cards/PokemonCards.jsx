function PokemonCards({ pokemons, handleClick }) {
  if (pokemons.length === 0) return <p>Loading...</p>;
  const list = pokemons.map((pokemon) => (
    <div key={pokemon.id} onClick={handleClick} className="pokemons">
      <img src={pokemon.image} alt={pokemon.name} />
      <p>{pokemon.name}</p>
    </div>
  ));

  return <div className="pokemon-cards">{list}</div>;
}

export default PokemonCards;
