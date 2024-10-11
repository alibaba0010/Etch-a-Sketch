const container = document.querySelector(".gridContainer");

const colors = [
  "midnightblue",
  "mintcream",
  "mistyrose",
  "moccasin",
  "navajowhite",
  "oldlace",
  "olivedrab",
  "orange",
  "orangered",
  "orchid",
  "palegoldenrod",
  "palegreen",
];

createGrid(16); // Initial 16x16 grid
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("gridSizeButton")
    .addEventListener("click", function () {
      let newSize = prompt("Enter new grid size (up to 100):");
      newSize = Number(newSize);
      if (!isNaN(newSize) && newSize > 0 && newSize <= 100) {
        while (container.firstChild) {
          container.removeChild(container.firstChild);
        }
        // container.innerHTML = "";
        createGrid(newSize);
      } else {
        alert("Please enter a number between 1 and 100.");
      }
    });
});
function createGrid(size) {
  const container = document.querySelector(".gridContainer");
  container.style.setProperty("--size", size);

  // Create a document fragment to hold all the new divs
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < size * size; i++) {
    const div = document.createElement("div");
    div.classList.add("gridItem");
    fragment.appendChild(div);
  }

  // Append all divs at once
  container.appendChild(fragment);

  // Add event listeners to the container using event delegation
  container.addEventListener("mouseover", handleMouseOver);
  container.addEventListener("click", handleClick);
}

function handleMouseOver(event) {
  if (event.target.classList.contains("gridItem")) {
    const randomColorNumber = Math.floor(Math.random() * colors.length);
    const bgcolor = colors[randomColorNumber];
    event.target.closest(".gridContainer").style.setProperty("--bg", bgcolor);
    event.target.classList.add("hoveredItem");
  }
}

function handleClick(event) {
  if (event.target.classList.contains("gridItem")) {
    const randomColorNumber = Math.floor(Math.random() * colors.length);
    const bgcolor = colors[randomColorNumber];
    event.target.style.backgroundColor = bgcolor;
  }
}
// function createGrid(size) {
//   const container = document.querySelector(".gridContainer");
//   container.style.setProperty("--size", size);
//   for (let i = 0; i < size * size; i++) {
//     let div = document.createElement("div");
//     // squares.classList.add("square");
//     div.classList.add("gridItem");
//     container.appendChild(div);
//     let squares = document.querySelectorAll(".gridItem");
//     squares.forEach((square) => {
//       square.addEventListener("mouseover", function () {
//         const randomColorNumber = Math.floor(Math.random() * colors.length);
//         const bgcolor = colors[randomColorNumber];
//         container.style.setProperty("--bg", bgcolor);
//         square.classList.add("hoveredItem");
//       });
//       div.addEventListener("click", function () {
//         const randomColorNumber = Math.floor(Math.random() * colors.length);
//         const bgcolor = colors[randomColorNumber];
//         this.style.backgroundColor = bgcolor;
//       });
//     });
//   }
// }
