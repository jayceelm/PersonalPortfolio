import { senators } from "../data/senators.js";
import { representatives } from "../data/representatives.js";

const demButton = document.querySelector("#democrats");

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
//const indButton = document.querySelector('.independents')//
