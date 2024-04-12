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
  for (let i = 0; i < size * size; i++) {
    let div = document.createElement("div");
    // squares.classList.add("square");
    div.classList.add("gridItem");
    container.appendChild(div);
    let squares = document.querySelectorAll(".gridItem");
    squares.forEach((square) => {
      square.addEventListener("mouseover", function () {
        const randomColorNumber = Math.floor(Math.random() * colors.length);
        const bgcolor = colors[randomColorNumber];
        container.style.setProperty("--bg", bgcolor);
        square.classList.add("hoveredItem");
      });
      div.addEventListener("click", function () {
        const randomColorNumber = Math.floor(Math.random() * colors.length);
        const bgcolor = colors[randomColorNumber];
        this.style.backgroundColor = bgcolor;
      });
    });
  }
}
// function createGrid(size) {
//   let gridSize = 960; // Container width
//   let itemSize = gridSize / size;
//   container.style.width = `${gridSize}px`;
//   for (let i = 0; i < size * size; i++) {
//     let div = document.createElement("div");
//     div.style.width = `${itemSize}px`;
//     div.style.height = `${itemSize}px`;
//     div.classList.add("gridItem");
//     div.addEventListener("mouseover", function () {
//       this.style.backgroundColor = "black";
//     });
//     container.appendChild(div);
//   }
// }
// document.addEventListener("DOMContentLoaded", function () {
//   createGrid(16); // Initial 16x16 grid

//   document
//     .getElementById("gridSizeButton")
//     .addEventListener("click", function () {
//       let newSize = prompt("Enter new grid size (up to 100):");
//       newSize = parseInt(newSize);
//       if (newSize > 0 && newSize <= 100) {
//         while (gridContainer.firstChild) {
//           gridContainer.removeChild(gridContainer.firstChild);
//         }
//         createGrid(newSize);
//       } else {
//         alert("Please enter a number between 1 and 100.");
//       }
//     });
// });
