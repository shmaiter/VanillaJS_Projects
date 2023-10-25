import { reviews } from "./db.js";

let profilePhoto = document.querySelector("#person-img");
let name = document.querySelector(".name");
let job = document.querySelector(".job");
let text = document.querySelector(".text");
let surpriseBtn = document.querySelector(".surprise");

function randomReview() {
  let randomNum = Math.floor(Math.random() * 4);
  return reviews[randomNum];
}

function modifyCardContent(review) {
  profilePhoto.src = review.img;
  name.textContent = firstLetterToUpperCase(review.name);
  job.textContent = review.job.toUpperCase();
  text.textContent = review.text;
}

function firstLetterToUpperCase(str) {
  let wordsArray = str.split(" ");
  let newString = wordsArray
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.substring(1);
    })
    .join(" ");
  return newString;
}

window.addEventListener("load", () => {
  modifyCardContent(randomReview());
});

surpriseBtn.addEventListener("click", () => {
  modifyCardContent(randomReview());
});
