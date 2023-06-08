const pokemonRepository = (() => {

  const pokemonList = [];
  const apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  const init = () => {
    loadList().then(() =>{
      getAll().forEach((pokemon) => {
        addListItem(pokemon);
      });
    });
  }

  const add = (pokemon) => {
    if (
      typeof pokemon === "object" 
      && "name" in pokemon
    ) {
      pokemonList.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
  }

  const getAll = () => {
    return pokemonList;
  }

  const addListItem = (pokemon) => {
    const pokeList = document.querySelector(".pokemon-list");
    const listPokemon = document.createElement("li");
    const button = document.createElement("button");

    button.addEventListener('click', (event) => {
      showDetails(pokemon);
    });

    button.innerText = pokemon.name;
    
    button.classList.add("button-class", "btn", "btn-light","btn-link");

    listPokemon.appendChild(button);

    pokeList.appendChild(listPokemon);
  }

  async function loadList() {
    try {
      const response = await fetch(apiUrl);
      const json = await response.json();

      json.results.forEach((item) => {
        add({
          name: capitalizeFirstLetter(item.name),
          detailsUrl: item.url
        });
      });
    } catch (e) {
      console.error(e);
    }
  }

  const loadDetails = async (item) => {
    try {
      const response = await fetch(item.detailsUrl);
      const details = await response.json();

      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;

    } catch (e) {
      console.error(e);
    }
  }


  const showDetails = (pokemon) => {
    loadDetails(pokemon).then(() => {

      let modal = document.querySelector(".modal");

      if(modal){
        modal.innerHTML = '';
      } else {
        modal = document.createElement("div");
        modal.classList.add('modal');
      }

      const closeBtn = document.createElement("button");
      closeBtn.classList.add('close');
      closeBtn.innerText = '\u2715';

      closeBtn.addEventListener('click', (event) => {
        closeModal(event);
      })

      const img = document.createElement("img");
      img.src = pokemon.imageUrl;

      const name = document.createElement("h2");
      name.innerText = pokemon.name;

      const height = document.createElement("p");
      height.innerText = 'Height: ' + pokemon.height + ' ft';

      modal.append(closeBtn);
      modal.append(img);
      modal.append(name);
      modal.append(height);


    const body = document.querySelector("body");


    body.addEventListener('click', (event) => {
      const modal = document.querySelector(".modal");

      if(
        modal
        && !modal.contains(event.target)
      ) {
        closeModal(event);
      }
    })

    body.addEventListener('keydown', (event) => {
      if(event.key === 'Escape') {
        closeModal(event);
      }
    })

    body.append(modal);

    });
  }

  const closeModal = () => {
    const modal = document.querySelector(".modal");
    modal.remove();
  }

  const capitalizeFirstLetter = (word) => {
    const firstLetter = word.charAt(0).toUpperCase();
    const everythingElse = word.slice(1);

    return firstLetter + everythingElse;
  }

  return {
    init: init
  };
})();

pokemonRepository.init();