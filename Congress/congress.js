import { senators } from "../data/senators.js";
import { representatives } from "../data/representatives.js";
import { removeChildren } from "../utils/index.js";

const congressGrid = document.querySelector(".congressGrid");
const demButton = document.querySelector("#democrats");
const repButton = document.querySelector("#republicans");
const indButton = document.querySelector("#independents");

republicansButton.addEventListener("click", () => {
  populateCongressDiv(filterCongressPeople(representatives, "R"));
});

function populateCongressDiv(simplifiedList) {
  removeChildren(congressGrid);
  simplifiedList.forEach((person) => {
    let personDiv = document.createElement("div");
    personDiv.className = "figureDiv";
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
      id: person.id,
      name: `${person.first_name}${middleName} ${person.last_name}`,
      imgURL: `https://www.govtrack.us/static/legislator-photos/${person.govtrack_id}-100px.jpeg`,
      party: person.party,
    };
  });
}

const filterCongressPeople = (chamber, politicalParty) => {
  return getSimplifiedPeople(chamber).filter(
    (member) => member.party === politicalParty
  );
};

populateCongressDiv(getSimplifiedPeople(senators));
