import { senators } from "../data/senators.js";
import { representatives } from "../data/representatives.js";

const congressGrid = document.querySelector(".congressGrid");
const demButton = document.querySelector('#democrats');
const repButton = document.querySelector('#republicans');
const indButton = document.querySelector(`#indeoendents`)
const stateButton = document.querySelector('#state');

demButton.addEventListener('click', () => {
  populateCongressGrid(filterCongressPeople(representatives, 'D'))
})

/*repButton.addEventListener('click', () => {
  populateCongressGrid(filterCongressPeople(representatives, 'R'))
})*/

/*indButton.addEventListener('click', () => {
  populateCongressGrid(filterCongressPeople(representatives, 'I'))
})*/

function populateCongressGrid(simpleList) {
  simpleList.forEach((person) => {
    let personDiv = document.createElement("div");
    let personFig = document.createElement("figure");
    let figImg = document.createElement("img");
    let figCaption = document.createElement("figcaption");

    figImg.src = person.imgURL;
    figCaption.textContent = person.name;

    personFig.appendChild(figImg);
    personFig.appendChild(figCaption);
    personDiv.appendChild(personFig);
    congressGrid.appendChild(personDiv);
  });
}

function getSimplifiedPeople(peopleList) {
  return peopleList.map((person) => {
    let middleName = person.middle_name ? ` ${person.middle_name}` : ``;
    return {
      name: `${person.first_name}${middleName} ${person.last_name}`,
      party: person.party,
      imgURL: `https://www.govtrack.us/static/legislator-photos/${person.govtrack_id}-100px.jpeg`,
    };
  });
}

const filterCongressPeople = (chamber, politicalParty) => {
  return getSimplifiedPeople(chamber).filter(member => member.party === politicalParty)
}

populateCongressGrid(getSimplifiedPeople(senators))
