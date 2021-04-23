const pokeGrid = document.querySelector(".pokeGrid");
const sortButton = document.querySelector(".sortPoke");
const addButton = document.querySelector(".addPoke");

sortButton.addEventListener("click", () => {
  sortPage();
});

class Pokemon {
  constructor(name, height, weight, type) {
    this.name = name;
    this.height = height;
    this.weight = weight;
    this.type = type;
  }
}

addButton.addEventListener("click", () => {
  let pokeName = prompt("What's the Pokemon's name?");
  let pokeHeight = prompt("Height");
  let pokeWeight = prompt("Weight");
  let pokeType = prompt("Type");
  let newPokemon = new Pokemon(pokeName, pokeHeight, pokeWeight, pokeType);
  populatePokeCard(newPokemon);
});

async function getAPIData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

function sortPage() {
  getAPIData(`https://pokeapi.co/api/v2/pokemon?limit=50`).then(
    async (data) => {
      for (const singlePokeCard of data.results) {
        await getAPIData(singlePokeCard.url).then((pokeData) =>
          populatePokeCard(pokeData)
        );
      }
    }
  );
}

function populatePokeCard(singlePokeCard) {
  let pokeScene = document.createElement("div");
  pokeScene.className = "scene";
  let pokeCard = document.createElement("div");
  pokeCard.className = "card";
  pokeCard.addEventListener("click", () => {
    pokeCard.classList.toggle("is-flipped");
  });

  pokeCard.appendChild(populateCardFront(singlePokeCard));
  pokeCard.appendChild(populateCardBack(singlePokeCard));
  pokeScene.appendChild(pokeCard);
  pokeGrid.appendChild(pokeScene);
}

function populateCardFront(pokemon) {
  let pokeFront = document.createElement("div");
  pokeFront.className = "card__face card__face--front";
  let frontLabel = document.createElement("p");
  frontLabel.textContent = [pokemon.name, pokemon.id];
  let frontImage = document.createElement("img");
  frontImage.src = `images/${getImageFileName(pokemon)}.png`;
  pokeFront.appendChild(frontImage);
  pokeFront.appendChild(frontLabel);
  return pokeFront;
}

function populateCardBack(pokemon) {
  let pokeBack = document.createElement("div");
  pokeBack.className = "card__face card__face--back";
  let backLabel = document.createElement("p");
  backLabel.textContent = [`Weight: ${pokemon.weight.length}`, `Height: ${pokemon.height.length}`,`Moves: ${pokemon.moves.length}`];
  // I realize this is not correctly executed. The height and weight show up when it's just the two, but once I add//
  // any third element only it works //
  pokeBack.appendChild(backLabel);
  return pokeBack;
}

function getImageFileName(pokemon) {
  if (pokemon.id < 10) {
    return `00${pokemon.id}`;
  } else if (pokemon.id > 9 && pokemon.id < 100) {
    return `0${pokemon.id}`;
  }
}
