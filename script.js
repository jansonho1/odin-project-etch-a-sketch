let totalWidth = 400;

function createGrid(numSquares) {
    const container = document.querySelector('#container');
    const boxWidth = totalWidth/numSquares;
    const borderWidth = boxWidth*0.05;
    for(let i = 0; i < numSquares*numSquares; i++) {
        const newGridBox = document.createElement('div');
        newGridBox.classList.add('gridbox');
        newGridBox.style.width = boxWidth.toString() + 'px';
        newGridBox.style.height = boxWidth.toString() + 'px';
        newGridBox.style.borderWidth = borderWidth.toString() + 'px';
        console.log(totalWidth/numSquares);
        newGridBox.addEventListener('mouseenter', (event) => {
            event.target.style.backgroundColor = 'indigo';
        });
        container.appendChild(newGridBox);
    }
}

console.log(createGrid(4));