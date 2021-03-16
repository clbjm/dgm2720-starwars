import {
    people
} from '../data/people.js';

const mainElement = document.querySelector('#main')

const mainHeader = document.createElement('header')
const maleButton = document.createElement('button')
maleButton.textContent = 'male characters'
mainHeader.appendChild(maleButton)

maleButton.addEventListener('click', () => {
    populateDOM(maleCharacters)
})
const othersButton = document.createElement('button')
othersButton.textContent = 'Other characters'
mainHeader.appendChild(othersButton)
othersButton.addEventListener('click', () => {
    populateDOM(otherCharacters)
})
const femaleButton = document.createElement('button')
femaleButton.textContent = 'female characters'
mainHeader.appendChild(femaleButton)
femaleButton.addEventListener('click', () => {
    populateDOM(femaleCharacters)
})
document.body.insertBefore(mainHeader, mainElement)
const maleCharacters = people.filter(person => person.gender === 'male')
const femaleCharacters = people.filter(person => person.gender === 'female')
const noneButton = document.createElement('button')
noneButton.textContent = 'none characters'
mainHeader.appendChild(noneButton)
noneButton.addEventListener('click', () => {
    populateDOM(noneCharacters)
})
const noneCharacters = people.filter(person => person.gender === 'none')

// populateDOM(maleCharacters)
// populateDOM(femaleCharacters)
// populateDOM(noneCharacters)
// populateDOM(naCharacters)
const otherCharacters = people.filter(person => {
    if (person.gender === 'n/a' || 
    person.gender === 'hermaphodite') {
        return person
    }
})

function populateDOM(characters) {
    removeChildren(mainElement)
characters.forEach((person) => {
const charfigure = document.createElement('figure')
const charImg = document.createElement('img')
let charNum = getLastNumber(person.url)
charImg.src = `https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg`
const charCaption = document.createElement('figcaption')
charCaption.textContent = person.name

charfigure.appendChild(charImg)
charfigure.appendChild(charCaption)

mainElement.appendChild(charfigure)
})
}
function getLastNumber(url) {
    let end = url.lastIndexOf('/')
    let start = end - 2
    if (url.charAt(start) === '/') {
        start++
    }
    return url.slice(start, end)
}
function removeChildren(container) {
while(container.firstChild) {
    container.removeChild(container.firstChild)
}
}