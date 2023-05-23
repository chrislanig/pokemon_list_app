let pokemonRepository = (function () {
    let pokemonList = [];
  
    function add(pokemon) {
      pokemonList.push(pokemon);
    }
  
    function getAll() {
      return pokemonList;
    }
  
    return {
      add: add,
      getAll: getAll
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



/*for (let i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i].height > 6) {
        document.write(pokemonList[i].name + ' (height: ' + (pokemonList[i].height) + ')' + '- wow, that is a large pokemon.' + ' <br>');
    }
    else {
        document.write(pokemonList[i].name + ' (height: ' + (pokemonList[i].height) + ')<br>');
    }
}*/

pokemonList.forEach(function(pokemon){
    document.write(pokemon.name + "'s height is " + pokemon.height + " and its ability is " + pokemon.types + ". ");
});