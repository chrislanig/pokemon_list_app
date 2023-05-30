let pokemonRepository = (function () {
  let pokemonList = [];

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  function showDetails(pokemon) {
    console.log(pokemon);
  }

  function addListItem(pokemon){
    let pokeList = document.querySelector(".pokemon-list");
    let listPokemon = document.createElement("li");
    button.addEventListener('click', function (event) {
      showDetails(pokemon);
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listPokemon.appendChild(button);
    pokeList.appendChild(listPokemon);
    });
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };
})();

let pokemonList = [
{ name: 'Bulbasaur',
height: 7,
types: ['grass', 'poison'] },
{ name: 'Charmander',
height: 6,
types: ['fire'] },

{ name: 'Squirtle',
height: 5,
types: ['water'] },
];

pokemonRepository.getAll().forEach(function(pokemon){
  pokemonRepository.addListItem(pokemon);

  /*let pokeList = document.querySelector(".pokemon-list");
  let listPokemon = document.createElement("li");
  let button = document.createElement("button");
  button.innerText = pokemon.name;
  button.classList.add("button-class");
  listPokemon.appendChild(button);
  pokeList.appendChild(listPokemon);*/

  
  //document.write(pokemon.name + "'s height is " + pokemon.height + " and its ability is " + pokemon.types + ". ");
});