import { planets } from '../data/planets.js'
import { getLastNumber, removeChildren } from '../utils/index.js'

const planet = document.querySelector('planet')
const planetView = document.querySelector('.planetView')
const planetList = document.querySelector('.planetList')
const nav = document.querySelector('nav')


function populateNav(planets) {
    planets.forEach(planet => {
        let anchorWrap = document.createElement('a')
        anchorWrap.href = '#'
        anchorWrap.addEventListener('click', () => populatePlanetView(planet))
        let planetItem = document.createElement('li')
        planetItem.textContent = planet.name

        anchorWrap.appendChild(planetItem)
        planetList.appendChild(anchorWrap)
    })
}
function populatePlanetView(planetData) {
    removeChildren(planetView)
    let planetNum = getLastNumber(planetData.url)
    let planetImage = document.createElement('img')
    planetImage.src = `https://starwars-visualguide.com/assets/img/planets/${planetNum}.jpg`
    planetImage.addEventListener('error', (err) => {
        alert("oops! we are searching the galaxy for your planet")
        planetImage.hidden = true
    })
    planetView.appendChild(planetImage)
}
populateNav(planets)
