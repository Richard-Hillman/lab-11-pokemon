// import functions and grab DOM elements
import { pokemonData } from './data.js';
import { refreshPoke, findById, setInLocalStorage } from './utils.js';
const radioButtons = document.querySelectorAll('input');


// const capturedPokemon = document.querySelector('rando-pokemon');
// const result = document.querySelector('.result');


// initialize states

// const captured = document.querySelector(':checked');

// let capturedPoke = 0;
// let encounteredPoke = 0; 

// let encounteredPokeArray = [];
// let capturedPokeArray = [];

let resultsArray = [];
let totalRounds = Number(10);
// On page Load have Pokemon randomized
refreshPoke();

// set event listeners to upddate state and DOM


// loop through
for (let i = 0; i < radioButtons.length; i++) {
    radioButtons[i].addEventListener('change', (e) => {

        // loop through all radio and count how many time its encountered a pokemon
        radioButtons.forEach((radio) => {

            const previouslyEncountered = findById(resultsArray, radio.value, 'pokeName');
          
            if (!previouslyEncountered) {
                const newPokemon = {
                    pokeName: radio.value,
                    encountered: 1,
                    captured: 0
                };
                // takes all three puts in results and pushes to encountered, listing everything seen
                resultsArray.push(newPokemon);
            } else {
                previouslyEncountered.encountered++;
            }    
        });    
        const selected = e.target.value; 
        let capturedPokeArray = findById(resultsArray, selected, 'pokeName');
      
        capturedPokeArray.captured++;
        
        totalRounds--;
        if (totalRounds <= 0) {
            window.location.href = './charts/index.html';
        }
        setInLocalStorage('RESULTS', resultsArray);
        refreshPoke();
    });
    
}    

// console.log(previouslyEncountered);
// console.log(capturedPokeArray);


    // capturedPoke++;
    // encounteredPoke++;
    // encounteredPoke++;
    // encounteredPoke++;
    // refreshPoke();



    //         radioButtons[i].addEventListener('change', (e) => {
    //             let currentSelection = e.target.value;      
    //             const capturePokemon = findById(currentSelection);
    //             capturedPokeArray.push(capturePokemon);
    //             console.log(capturePokemon)
    //         })
    // }
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
        

            


