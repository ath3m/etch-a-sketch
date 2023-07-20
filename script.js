const grid = document.querySelector('.grid')
let squares = 16

function createSquare() {
    const square = document.createElement('div')
    square.classList.add('box')
    return square
}

function createBoard(squareCount) {
    grid.setAttribute('style',`grid-template-columns: repeat(${squareCount}, 2fr); grid-template-rows: repeat(${squareCount}, 2fr);`)
    for(let i=0; i<squareCount * squareCount; i++) {
        grid.appendChild(createSquare())
    }
}

grid.addEventListener('mouseover', function(e) {
    if (e.target.matches('.box')) {
        e.target.classList.add('hover')
    }
});

const btnClear = document.querySelector('.clear')
btnClear.addEventListener('click', () => {
    grid.replaceChildren([])
    createBoard(squares)
})

const btnResize = document.querySelector('.resize')
btnResize.addEventListener('click', () => {
    user_input = prompt("Enter number of squares: ")
    grid.replaceChildren([])
    createBoard(squares = user_input == null ? squares : user_input)
    console.log(squares)
})




//Initial board with 16x16 squares
createBoard(squares)