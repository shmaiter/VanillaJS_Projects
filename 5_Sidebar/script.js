let menuBtn = document.querySelector(".menu");
let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector(".close");

window.addEventListener("resize", () => {
  let currentWindowSize = window.innerWidth;
  if (currentWindowSize < 800 && menuBtn.classList.contains("rotate")) {
    console.log("Is rotated");
    menuBtn.style.display = "none";
  } else {
    menuBtn.style.display = "block";
  }
});

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("rotate");
  menuBtn.classList.toggle("shaking");
  sidebar.classList.toggle("hideContent");
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.toggle("hideContent");
  menuBtn.classList.toggle("rotate");
  menuBtn.classList.toggle("shaking");
});
