// import functions and grab DOM elements
import { pokemonData } from './data.js';
import { getRandomPokemon } from './utils.js';

const radioButtons = document.querySelectorAll('input');
const images = document.querySelectorAll('label > img');
const travel = document.querySelector('#move');
const capture = document.querySelector('#capture-button');



// initialize state
const pokemon = pokemonData.slice();
let capturedPoke = 0;
let encounteredPoke = 0;
const missedPokemon = [];

// set event listeners to update state and DOM

// let ashesPicked;

// radioButtons.forEach();

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