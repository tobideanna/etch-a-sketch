console.log("Hello World");

const container = document.querySelector("#container");

createGrid(16);


const squares = document.querySelectorAll(".square");

squares.forEach((square) => {
    square.addEventListener("mouseenter", () => {
        square.style.backgroundColor = "black";
    });
});

function createGrid(size) {
    clearGrid();
    const squareSize = Math.floor(1750 / size) - 4;
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        container.appendChild(square);
        square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = "black";
        });
    }
}

const resizeButton = document.querySelector("#resize-button");
resizeButton.addEventListener("click", () => {
    let size = prompt("Enter the number of squares per side for the new grid");
    if (size >= 100 || size <= 1) {
        alert("Invalid input! Grid size set to 16x16.");
        size = 16;
        clearGrid();
        createGrid(size);
    } else {
        clearGrid();
        createGrid(size);
    }
});

function clearGrid() {
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.remove();
    });
}

const resetButton = document.querySelector("#reset-button")
resetButton.addEventListener("click", () => {
    clearGrid()
    createGrid(16)
})