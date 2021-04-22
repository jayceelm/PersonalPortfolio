import { senators } from "../data/senators.js";
import { representatives } from "../data/representatives.js";

const congressGrid = document.querySelector(".congressGrid");
const stateButton = document.querySelector("#state");

function populateCongressGrid(simpleList) {
  simpleList.forEach((person) => {
    let personDiv = document.createElement("div");
    //personDiv.className = 'figureDiv'//
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
      state: person.state,
      imgURL: `https://www.govtrack.us/static/legislator-photos/${person.govtrack_id}-100px.jpeg`,
    };
  });
}

populateCongressGrid(getSimplifiedPeople(representatives));

/* const demButton = document.querySelector("#democrats");

demButton.addEventListener("click", () => {
  showDemocrats();
});

function showDemocrats() {
  const dems = representatives.map((rep) => {
    let smallDem = {};
    if (rep.party === "D") {
      smallDem.id = rep.id;
      smallDem.name = "${rep.first_name} ${rep.last_name}";
    }
    return smallDem;
  });
  console.log(dems);
}

//const repButton = document.querySelector('.republicans')//
//const indButton = document.querySelector('.independents')// */
