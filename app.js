// import functions and grab DOM elements
import { pokemonData } from './data.js';
import { refreshPoke, findById } from './utils.js';

const radioButtons = document.querySelectorAll('input');
const capture = document.querySelector('#capture-button');
const result = document.querySelector('.result');
// const capturedPokemon = document.querySelector('rando-pokemon');


// initialize states
const pokemon = pokemonData.slice();
const captured = document.querySelector(':checked');
const encounteredPokemon = document.querySelectorAll('input');

let capturedPoke = 0;
let encounteredPoke = 0; 

let encounteredPokeArray = [];
let capturedPokeArray = [];
// On page Load have Pokemon randomized
refreshPoke();

// set event listeners to upddate state and DOM



capture.addEventListener('click', () => {
    capturedPoke++;
    encounteredPoke++;
    encounteredPoke++;
    encounteredPoke++;

    for (let i = 0; i < radioButtons.length; i++) {
        radioButtons[i].addEventListener('change', (e) => {
            e.preventDefault();
            
            let currentSelection = e.target.value;  
            if (currentSelection) {
                findById(currentSelection);
            }
            // const currentCapture = findById(pokemonData, currentSelection);
            // result.textContent = `Congratulations! You captured a flippin ${currentCapture}.`;
            // capturedPokeArray.push(currentCapture);

            // if (radioButtons[0].name === undefined) {
            //     encounteredPokeArray.push({ name: radioButtons[0].name, encountered: 1, captured: 0 });
            // } else { 
            //     radioButtons[0].name.encountered++;
            // }

            // if (radioButtons[1].name === undefined) {
            //     encounteredPokeArray.push({ name: radioButtons[1].name, encountered: 1, captured: 0 });
            // } else { 
            //     radioButtons[1].name.encountered++;
            // }

            // if (radioButtons[2].name === undefined) {
            //     encounteredPokeArray.push({ name: radioButtons[2].name, encountered: 1, captured: 0 });
            // } else { 
            //     radioButtons[2].name.encountered++;
            // }
    
        });
    }

    refreshPoke();
    
    console.log(encounteredPokeArray);
    console.log(capturedPokeArray);
});


