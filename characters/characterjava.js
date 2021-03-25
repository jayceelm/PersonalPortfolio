import { people } from '../data/people.js'
import { removeChildren, getLastNumber } from '../utils/index.js'

const mainContent = document.querySelector('main')

const mainHeader = document.createElement('header')

document.body.insertBefore(mainHeader, mainContent)

//all button
const allButton = document.createElement('button')
allButton.textContent = 'All Characters'
allButton.addEventListener('click', () => populateDOM(people))

// male button 
const maleButton = document.createElement('button')
maleButton.textContent = 'Male Characters'
maleButton.addEventListener('click', () => populateDOM(maleCharacters))

//female button
const femaleButton = document.createElement('button')
femaleButton.textContent = 'Female Characters'
femaleButton.addEventListener('click', () => populateDOM(femaleCharacters))

// nonbinary button
const nonbinaryButton = document.createElement('button')
nonbinaryButton.textContent = 'Non-binary Characters'
nonbinaryButton.addEventListener('click', () => populateDOM(nonbinaryCharacters))

//worst button
const worstButton = document.createElement('button')
worstButton.textContent = 'Worst Character'
worstButton.addEventListener('click', () => populateDOM(worstCharacter))

// page reset
const refreshButton = document.createElement('button')
refreshButton.textContent = 'Reset'
refreshButton.addEventListener('click', () => location.reload())

// append
mainHeader.appendChild(allButton)
mainHeader.appendChild(maleButton)
mainHeader.appendChild(femaleButton)
mainHeader.appendChild(nonbinaryButton)
mainHeader.appendChild(worstButton)
mainHeader.appendChild(refreshButton)

// people filters
const maleCharacters = people.filter(person => person.gender === 'male')
const femaleCharacters = people.filter(person => person.gender === 'female')
const nonbinaryCharacters = people.filter(person => {
    if (person.gender === 'n/a' || person.gender === 'none' || person.gender === 'hermaphrodite') {
        return person
    }
}) 
const worstCharacter = people.filter(person => person.name === 'Anakin Skywalker')

console.log(maleCharacters)
console.log(femaleCharacters)
console.log(nonbinaryCharacters)

// functions

function populateDOM(characters) {
    removeChildren(mainContent)
    characters.forEach(person => {
        const charFigure = document.createElement('figure')
        const charImg = document.createElement('img')
        let charNum = getLastNumber(person.url)
        charImg.src = `https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg`
        const charCaption = document.createElement('figcaption')

        charCaption.textContent = person.name

        charFigure.appendChild(charImg)
        charFigure.appendChild(charCaption)
        mainContent.appendChild(charFigure)
    })
}

