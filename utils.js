export function getRandomPokemon(someArray) {
    const index = Math.floor(Math.random() * someArray.length);
    return someArray[index];
}