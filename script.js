let gridSize = 16;

const gridContainer = document.querySelector('#grid-container');

gridContainer.style.gridTemplateRows = "repeat(" + gridSize + ", 30px)";
gridContainer.style.gridTemplateColumns = "repeat(" + gridSize + ", 30px)";

let divArr = [[]];

for (let i = 1; i <= gridSize; i++) {
    console.log(i)
    divArr[i] = document.createElement('div')
    for (let j = 1; j <= gridSize; j++) {
        divArr[i][j] = document.createElement('div');
        divArr[i][j].classList.add('row-' + i);
        divArr[i][j].classList.add('col-' + j);
        divArr[i][j].style.gridRowStart = i;
        divArr[i][j].style.gridColumnStart = j;
        //divArr[i][j].textContent = i + " " + j;
        gridContainer.appendChild(divArr[i][j]);
    }
}

