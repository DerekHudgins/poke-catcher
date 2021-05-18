import { findById } from '../utils.js';
import pokemon from './poke.js';

export function mungeCaptured(pokemonArray) {
    // YOUR CODE HERE
    const results = [];
    for (let poke of pokemonArray) {
        results.push(poke.captured);
    } 
    return results;
}
export function mungeEncounter(pokemonArray) {
    // YOUR CODE HERE
    const results = [];
    for (let poke of pokemonArray) {
        results.push(poke.encounterd);
    } 
    return results;
}

export function mungeNames(pokemonArray) {
    // YOUR CODE HERE
    const results = [];

    for (let poke of pokemonArray) {
        const data = findById(pokemon, poke.id);
        results.push(data.pokemon);
    }
    return results;
}

export function mungeColor(pokemonArray) {
    const results = [];

    for (let poke of pokemonArray) {
        const data = findById(pokemon, poke.id);
        results.push(data.color_1);
    }
    return results;
}
