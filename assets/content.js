const submit = document.getElementById('submit')

submit.addEventListener('click', getpokemon)

document.addEventListener('keypress', function(event) { 
    
    if (event.key === 'Enter') { 
        getpokemon()
    } 
})

function getpokemon() {
    let pokemon_name = document.getElementById('input')
    pokemon_name.focus()
    pokeApi.findPokemon(pokemon_name.value.toLowerCase())
}

function showData() {
    const pokemon_id = document.getElementById("pokemon_id")
    const pokemon_name = document.getElementById("pokemon_name")
    const pokemon_img = document.getElementById("pokemon_img")
    
    pokemon_id.innerHTML = `#${pokemon.id}`
    pokemon_name.innerHTML = pokemon.name
    pokemon_img.src = pokemon.foto

    const type_1 = document.getElementById("type_1")
    const type_2 = document.getElementById("type_2")

    if(pokemon.type.length <= 1) {
        type_1.innerHTML = pokemon.type[0]
        type_2.style.display = "none"
        type_1.className = pokemon.type[0]
    } else {
        type_2.style.display = "block"
        type_1.innerHTML = pokemon.type[0]
        type_2.innerHTML = pokemon.type[1]
        type_1.className = pokemon.type[0]
        type_2.className = pokemon.type[1]
    }


}