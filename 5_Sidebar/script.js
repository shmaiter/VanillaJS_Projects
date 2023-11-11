let menuBtn = document.querySelector(".menu");
let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector(".close");

menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("showContent");
  menuBtn.classList.toggle("rotate");
  menuBtn.classList.toggle("shaking");
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.toggle("hideContent");
  sidebar.classList.remove("showContent");
});
