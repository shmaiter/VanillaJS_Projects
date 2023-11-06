let menuBtn = document.querySelector(".menu");
let middleContent = document.querySelector(".middle");

menuBtn.addEventListener("click", () => {
  middleContent.classList.toggle("showContent");
});
