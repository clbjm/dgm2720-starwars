import {films} from '../data/films.js';
import {people} from '../data/people.js';
import {planets} from '../data/planets.js';
import {species} from '../data/species.js';
import {starships} from '../data/starships.js';
import {vehicles} from '../data/vehicles.js';



console.log(films);

let filmOne = document.querySelector('#film1');
let filmTwo = document.querySelector('#film2');

filmOne.textContent = films[2].title
filmTwo.textContent = films[1].title

for (var i = 0; i < films.length; i++) {
    console.log(films[i]);
}