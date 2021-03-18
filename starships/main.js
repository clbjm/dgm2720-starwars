import {starships} from '../data/starships.js'


const nav = document.querySelector('nav')
const navList = document.querySelector('.navList')
const shipView = document.querySelector('.shipView')

function populateNav(starships) {
    starships.forEach(starship => {
        let listItem = document.createElement('li')
        listItem.textContent = starship.name

        navList.appendChild(listItem)
    })
}

function populateShipView(shipData) {
    let shipImage = document.createElement('img')
    shipImage.src = `https://starwars-visualguide.com/assets/img/starships/${shipImage}.jpg`
    shipView.appendChild(shipImage)
}
console.log(starships)

populateNav(starships)
populateShipView(starships)