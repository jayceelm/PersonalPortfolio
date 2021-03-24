import { people } from '../data/people.js'

const mainContent = document.querySelector('main')

const mainHeader = document.createElement('header')

const maleButton = document.createElement('button')
maleButton.textContent = 'Male Characters'
maleButton.addEventListener('click', () => {
    populateDOM(maleCharacters)
})

const femaleButton = document.createElement('button')
femaleButton.textContent = 'Female Characters'
femaleButton.addEventListener('click', () => {
    populateDOM(femaleCharacters)
})

const nonbinaryButton = document.createElement('button')
nonbinaryButton.textContent = 'Non-binary Characters'
nonbinaryButton.addEventListener('click', () => {
    populateDOM(nonbinaryCharacters)
})

const refreshButton = document.createElement('button')
refreshButton.textContent = 'Reset'
refreshButton.addEventListener('click', () => {
    location.reload();
})

mainHeader.appendChild(maleButton)
mainHeader.appendChild(femaleButton)
mainHeader.appendChild(nonbinaryButton)
mainHeader.appendChild(refreshButton)
document.body.insertBefore(mainHeader, mainContent)


const maleCharacters = people.filter(person => person.gender === 'male')
const femaleCharacters = people.filter(person => person.gender === 'female')
const nonbinaryCharacters = people.filter(person => {
    if (person.gender === 'n/a' || person.gender === 'none') {
        return person
    }
}) 

console.log(maleCharacters)
console.log(femaleCharacters)
console.log(nonbinaryCharacters)

function populateDOM(characters) {
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

function getLastNumber(url) {
    let end = url.lastIndexOf('/')
    let start = end - 2
    if (url.charAt(start) === '/') {
        start++
    }
    return url.slice(start, end)
}