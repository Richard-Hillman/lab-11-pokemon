export function getRandomPokemon(someArray) {
    const index = Math.floor(Math.random() * someArray.length);
    return someArray[index];
    
}

export function removeById(someId) {
    for (let i = 0; i < remainingPokemon.length; i++) {
        if (someId === remainingPokemon[i]) {
            remainingPokemon.splice(i, 1);
        }
    }
}

