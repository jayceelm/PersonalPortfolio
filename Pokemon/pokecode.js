const pokeGrid = document.querySelector(".pokeGrid");
const sortButton = document.querySelector(".sortPoke");
const addButton = document.querySelector(".addPoke")

sortButton.addEventListener("click", () => {
    sortPage();
});

addButton.addEventListener("click", () => {
    let newPoke = prompt("What's the Pokemon's name?")
}
)

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
    frontLabel.textContent = pokemon.name;
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
    backLabel.textContent = `Weight: ${pokemon.weight.length}`
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
