import { BOND_DATA } from "./DATA.js";

const app = document.querySelector("#app");

// app.innerHTML =
//   "<div class='cards-container'>" +
//   BOND_DATA.map((data) => {
//     return (
//       "<div class='cards'>" +
//       "<span>" +
//       data.finalCost +
//       "</span>" +
//       "<span>" +
//       data.description +
//       "</span>" +
//       "</div>"
//     );
//   }).join("") +
//   "</div>";

const fetchedURL = `https://jsonplaceholder.typicode.com/users`;

function getData(url) {
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((jsonData) => {
      console.log(jsonData);
      app.innerHTML =
        "<div class='cards-container'>" +
        jsonData
          .map((data) => {
            return (
              "<div class='card'>" +
              `<div class="card__top">` +
              `<img 
              src='https://robohash.org/${data.id}?set=set2&aize=180x180' />` +
              `</div>` +
              `<div class="card__bottom">` +
              "<p>" +
              data.email +
              "</p>" +
              "<p>" +
              data.name +
              "</p>" +
              `</div>` +
              "</div>"
            );
          })
          .join("") +
        "</div>";
    })
    .catch((error) => {
      console.log("This is an error", error);
    });
}

getData(fetchedURL);
