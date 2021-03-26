import { films } from '../data/films.js'
import { getLastNumber } from '../utils/index.js'

/* let itemOne = document.querySelector('#movie1')
let itemTwo = document.querySelector('#movie2')
let itemThree = document.querySelector('#movie3')

itemOne.textContent = films[2].title
itemTwo.textContent = films[1].title
itemThree.textContent = films[4].title

console.log(films[0].title) */

let movieList = document.querySelector('.movieList')

for (let i = 0; i < films.length; i++) {
    const foundFilm = films.find(film => getLastNumber(film.url) === (i + 1))
    let figure = document.createElement('figure')
    let newImage = document.createElement('img')
    let figCaption = document.createElement('figcaption')
    newImage.src =`https://starwars-visualguide.com/assets/img/films/${i + 1}.jpg`
    figCaption.textContent = foundFilm.title

    figure.appendChild(newImage)
    figure.appendChild(figCaption)
    movieList.appendChild(figure)

}

function addStarField(element, numStars) {
    element.style.setProperty('background-color', 'black')
    for (let i = 0; i < numStars; i++) {
        let star = document.createElement('div')
        star.style.setProperty('width', '1px')
        star.style.setProperty('height', '1px')
        star.style.setProperty('background-color', 'aliceblue')
        let xy = getRandomPosition()
        star.style.left = `${xy[0]}px`
        star.style.top = `${xy[1]}px`
        star.style.setProperty('position', 'absolute')
        element.appendChild(star)
    }
}

function getRandomPosition() {
    let y = document.body.scrollHeight
    let x = document.body.scrollWidth
    let randomY = Math.floor(Math.random() * y)
    let randomX = Math.floor(Math.random() * x)
    return [randomX, randomY]
}

addStarField(document.querySelector('body'), 900)