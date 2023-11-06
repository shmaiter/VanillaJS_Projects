import { reviews } from "./db.js";

let currentReview = {};

window.addEventListener("load", () => {
  modifyCardContent(randomReview());
});

let profilePhoto = document.querySelector("#person-img");
let name = document.querySelector(".name");
let job = document.querySelector(".job");
let text = document.querySelector(".text");
let surpriseBtn = document.querySelector(".surprise");
let leftBtn = document.querySelector(".signals").firstElementChild;
let rightBtn = document.querySelector(".signals").lastElementChild;

rightBtn.addEventListener("click", () => {
  let reviewIndex = currentReview.id - 1;
  if (reviewIndex == 3) {
    console.log("New Index: " + 0);
    modifyCardContent(reviews[0]);
  } else {
    console.log("New Index: " + (reviewIndex + 1));
    modifyCardContent(reviews[reviewIndex + 1]);
  }
});

leftBtn.addEventListener("click", () => {
  let reviewIndex = currentReview.id - 1;
  if (reviewIndex == 0) {
    console.log("New Index: " + (reviews.length - 1));
    modifyCardContent(reviews[reviews.length - 1]);
  } else {
    console.log("New Index: " + (reviewIndex - 1));
    modifyCardContent(reviews[reviewIndex - 1]);
  }
});

function randomReview() {
  let randomNum = Math.floor(Math.random() * 4);
  return reviews[randomNum];
}

function modifyCardContent(review) {
  currentReview = review;
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

surpriseBtn.addEventListener("click", () => {
  modifyCardContent(randomReview());
});
