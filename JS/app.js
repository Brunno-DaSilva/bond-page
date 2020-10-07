import { BOND_DATA, getData } from "./DATA.js";

const app = document.querySelector("#app");

app.innerHTML =
  "<div class='cards-container'>" +
  BOND_DATA.map((data) => {
    return (
      "<div class='cards'>" +
      "<span>" +
      data.finalCost +
      "</span>" +
      "<span>" +
      data.description +
      "</span>" +
      "</div>"
    );
  }).join("") +
  "</div>";

console.log(getData());
