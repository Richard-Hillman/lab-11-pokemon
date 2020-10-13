// import functions and grab DOM elements
import { pokemonData } from './data.js';
import { getRandomPokemon } from './utils.js';

const radioButtons = document.querySelectorAll('input');
const images = document.querySelectorAll('label > img');
const capture = document.querySelector('#capture-button');



// initialize states
const pokemon = pokemonData.slice();
let capturedPoke = 0;
let encounteredPoke = 0; 

let encounteredPokeArray = [];
let missedPokemonArray = [];

// set event listeners to upddate state and DOM


capture.addEventListener('click', () => {
    capturedPoke++;
    encounteredPoke++;
    encounteredPoke++;
    encounteredPoke++;
    refreshPoke();
});


function refreshPoke() {

    let pokeOne = getRandomPokemon(pokemonData);
    let pokeTwo = getRandomPokemon(pokemonData);
    let pokeThree = getRandomPokemon(pokemonData);

    while (pokeOne.id === pokeTwo.id) {
        pokeOne = getRandomPokemon(pokemonData);
    }

    while (pokeTwo.id === pokeThree.id) {
        pokeTwo = getRandomPokemon(pokemonData);
    }

    while (pokeThree.id === pokeOne.id) {
        pokeThree = getRandomPokemon(pokemonData);
    }

    radioButtons[0].value = pokeOne.id;
    images[0].src = pokeOne.url_image;


    radioButtons[1].value = pokeTwo.id;
    images[1].src = pokeTwo.url_image;


    radioButtons[2].value = pokeThree.id;
    images[2].src = pokeThree.url_image;
}

refreshPoke();