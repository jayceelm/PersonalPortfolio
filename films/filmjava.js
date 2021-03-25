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

