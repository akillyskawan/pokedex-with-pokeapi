const pokeApi = {}

pokeApi.findPokemon =  (pokemonName) => {
    
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((response) => response.json())
    .then((response)=> getData(response))
    .then((response)=>  showData())

    function getData(pokemonData) {
        pokemon.id = pokemonData.id
        pokemon.name = pokemonData.name
        pokemon.type = pokemonData.types.map((pokemonData)=> pokemonData.type.name)
        pokemon.foto = pokemonData.sprites.other['showdown'].front_default
        return pokemon
    }
}

