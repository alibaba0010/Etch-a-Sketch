document.addEventListener("DOMContentLoaded", function () {
  createGrid(16); // Initial 16x16 grid

  document
    .getElementById("gridSizeButton")
    .addEventListener("click", function () {
      let newSize = prompt("Enter new grid size (up to 100):");
      newSize = parseInt(newSize);
      if (newSize > 0 && newSize <= 100) {
        while (gridContainer.firstChild) {
          gridContainer.removeChild(gridContainer.firstChild);
        }
        createGrid(newSize);
      } else {
        alert("Please enter a number between 1 and 100.");
      }
    });
});

function createGrid(size) {
  const container = document.getElementById("gridContainer");
  let gridSize = 960; // Container width
  let itemSize = gridSize / size;
  container.style.width = `${gridSize}px`;
  for (let i = 0; i < size * size; i++) {
    let div = document.createElement("div");
    div.style.width = `${itemSize}px`;
    div.style.height = `${itemSize}px`;
    div.classList.add("gridItem");
    div.addEventListener("mouseover", function () {
      this.style.backgroundColor = "black";
    });
    container.appendChild(div);
  }
}
