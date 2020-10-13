// import functions and grab DOM elements
import { pokemonData } from './data.js';
import { refreshPoke } from './utils.js';


const capture = document.querySelector('#capture-button');
const capturedPokemon = document.querySelector('rando-pokemon');


// initialize states
const pokemon = pokemonData.slice();

let capturedPoke = 0;
let encounteredPoke = 0; 

let encounteredPokeArray = [];
let missedPokemonArray = [];

// set event listeners to upddate state and DOM

refreshPoke();


capture.addEventListener('click', () => {
    capturedPoke++;
    encounteredPoke++;
    encounteredPoke++;
    encounteredPoke++;
    refreshPoke();
    
});


