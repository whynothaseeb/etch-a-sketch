function random(num) {
  return Math.floor(Math.random() * (num + 1));
}

function makeGrid(rows, cols) {
  const container = document.querySelector(".container");
  container.innerHTML = ""; // clear previous grid

  for (let i = 0; i < rows; i++) {
    const row = document.createElement("div");
    row.className = "row";
    container.appendChild(row);

    for (let j = 0; j < cols; j++) {
      const col = document.createElement("div");
      col.className = "column";

      row.appendChild(col);

      col.addEventListener("mouseenter", () => {
        const r = random(255);
        const g = random(255);
        const b = random(255);
        const rndCol = `rgb(${r}, ${g}, ${b})`;
        col.style.backgroundColor = rndCol;
      });
    }
  }
}



makeGrid(16, 16);

function adjustGrid(){
  let input = prompt("Enter number of rows: ")
  if (input === null) {
    return;
  }
  if (input > 100 || input < 1 || input === "") {
    alert("Please enter a number between 1 and 100");
    return;
  }
  const container = document.querySelector(".container");
  container.innerHTML = "";
  makeGrid(input, input);
}
const btn = document.querySelector("#btn");

btn.addEventListener("click" , adjustGrid)

const clr = document.querySelector("#clr");

clr.onclick = () => {
  const container = document.querySelector(".container")
  container.innerHTML = "";
}
