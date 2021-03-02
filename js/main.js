import {films} from '../data/films.js';
import {people} from '../data/people.js';
import {planets} from '../data/planets.js';
import {species} from '../data/species.js';
import {starships} from '../data/starships.js';
import {vehicles} from '../data/vehicles.js';


let filmList = document.querySelector('#filmList')


for (let i = 0; i < films.length; i++) {
    console.log(`the loop counter is: ${i} while the film episode id is: ${films[i].episode_id}`)
    let filmItem = document.createElement(`li`)
    filmItem.textContent = films[i].title
    filmList.appendChild(filmItem)
}
function getLastNumber(url) {
    
}