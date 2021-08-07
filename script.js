let gridSize = 16;

const gridContainer = document.querySelector('#grid-container');

// Set the size of the squares
gridContainer.style.gridTemplateRows = "repeat(" + gridSize + ", 30px)";
gridContainer.style.gridTemplateColumns = "repeat(" + gridSize + ", 30px)";

let divArr = [[]];

// Create and append divs
for (let i = 1; i <= gridSize; i++) {
    divArr[i] = document.createElement('div')
    for (let j = 1; j <= gridSize; j++) {
        divArr[i][j] = document.createElement('div');
        divArr[i][j].classList.add('square')
        //divArr[i][j].classList.add('row-' + i);
        //divArr[i][j].classList.add('col-' + j);
        divArr[i][j].style.gridRowStart = i;
        divArr[i][j].style.gridColumnStart = j;
        //divArr[i][j].textContent = i + " " + j;
        gridContainer.appendChild(divArr[i][j]);
    }
}

//Add a class which set backround color to black
function colorBlack() {
    this.classList.add('blackFilled');
}

function clearGrid(elems) {
    elems.forEach(elem => elem.style.backgroundColor = 'white');
}

// Select all squares and add them an Event Listener
const squares = document.querySelectorAll('.square');
squares.forEach(square => square.addEventListener('mouseenter', colorBlack));
//squares.forEach(square => square.addEventListener('mouseleave', colorBlack));

const clr_btn = document.querySelector('#clr-btn');
clr_btn.addEventListener('click', clearGrid(squares));
