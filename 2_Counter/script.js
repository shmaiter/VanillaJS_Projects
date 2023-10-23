let count = 0;

let value = document.querySelector("p");
let btns = document.getElementsByTagName("button");
// let btns = document.querySelectorAll(".btn");

// NOTE:
// getElementsByTagName returns a --> HTMLCollection
// querySelectorAll return a --> NodeList
// It's important to understand the previous because each of them
// uses different methods. For example HTMLCollections allow to iterate
// through its collection with a "for...of", but, doesn't allow to
// use a "forEach()". Instead, NodeList does allow to implement a
// "forEach()" over their elements.

console.log(btns);

function checkSymbol() {
  if (count < 0) {
    value.style.color = "red";
  } else if (count > 0) {
    value.style.color = "green";
  } else {
    value.style.color = "black";
  }
}

for (const btn of btns) {
  btn.addEventListener("click", (e) => {
    // console.log(e.currentTarget.classList);
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      --count;
    } else if (styles.contains("increase")) {
      ++count;
    } else {
      count = 0;
    }
    checkSymbol();
    value.textContent = count;
  });
}
