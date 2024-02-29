import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
    .then(res => res.json())
    .then(pokemons => setPokemons(pokemons))
  }, []);

  function handleSearchBar(event) {
    setSearch(event.target.value)
  }

  function handleAddPokemon(newPokemon) {
    const updatePokemons = [...pokemons, newPokemon];
    setPokemons(updatePokemons);
  }

  const displayPokemon = pokemons.filter(pokemon => {
    if(search.length > 0) {
      return pokemon.name.startsWith(search);
    }
    return true;
  })

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPokemon={handleAddPokemon}/>
      <br />
      <Search onSearchChange={handleSearchBar}/>
      <br />
      <PokemonCollection pokemons={displayPokemon}/>
    </Container>
  );
}

export default PokemonPage;
