document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid');
    const flagsLeft = document.querySelector('#flags-left')
    const width = 10
    let bombAmount = 20

    console.log(grid);

    //Create a Minesweeper Board

    function createBoard() {
        flagsLeft.innerHTML = bombAmount

        // shuffled game array with random bombs
        const bombArray = Array(bombAmount).fill('bomb');
        const emptyArray = Array(width * width - bombAmount).fill('vaild')
        console.log(emptyArray);

        for (let i = 0; i < width * width; i++) {
            const square = document.createElement('div')
            square.id = i
            grid.appendChild( square )
        }
    }
    createBoard()
})