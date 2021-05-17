import RawPokeData from './poke.js';
// import functions and grab DOM elements
const radio1 = document.querySelector('#poke-1');
const radio2 = document.querySelector('#poke-2');
const radio3 = document.querySelector('#poke-3');
const img1 = document.querySelector('#poke-img-1');
const img2 = document.querySelector('#poke-img-2');
const img3 = document.querySelector('#poke-img-3');
const button = document.querySelector('#throw');


// set event listeners 
button.addEventListener('click', () =>{

});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

function getRandomPokemon() {
    const randomIndex = Math.floor(Math.random() * RawPokeData.length);
    const randomPokemom = RawPokeData[randomIndex];
    return randomPokemom;
}

function renderThreePokemon() {
    
}