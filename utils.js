import { pokemonData } from './data.js';

export function getRandomPokemon(someArray) {
    const index = Math.floor(Math.random() * someArray.length);
    return someArray[index];
    
}

const radioButtons = document.querySelectorAll('input');
const images = document.querySelectorAll('label > img');

export function refreshPoke() {

    let pokeOne = getRandomPokemon(pokemonData);
    let pokeTwo = getRandomPokemon(pokemonData);
    let pokeThree = getRandomPokemon(pokemonData);

// while pokeone equals poketwo go back and do another getrandomPokemon
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

export function findById(someArray, someId) {
    for (let i = 0; i < someArray.length; i++) {
        const item = someArray[i];   
        if (item.id === someId) {
            return item;
        }
    }
}

export function getFromLocalStorage(key) {
    const retrievedKey = localStorage.getItem(key);
    return JSON.parse(retrievedKey);
}
    
   
export function setInLocalStorage(key, value) {
    const stringifiedItem = JSON.stringify(value);
    localStorage.setItem(key, stringifiedItem);   
}
    


const captured = document.querySelector(':checked')
