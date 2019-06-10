/*
    0 represents a dead cell, 1 represents a live one
    
    From wikipedia (https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life):
    1. Any live cell with fewer than two live neighbours dies, as if by underpopulation.
    2. Any live cell with two or three live neighbours lives on to the next generation.
    3. Any live cell with more than three live neighbours dies, as if by overpopulation.
    4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
*/

const updateLife = (oldLife, gameSize) => {
    
    let newLife = new Array(gameSize); 

    for (let i = 0; i < gameSize; i++) {
        
        let row = new Array(gameSize);

        for (let j = 0; j < gameSize; j++) {
            
            const numNeighbors = sumNeighbors(i, j, oldLife, gameSize);

            // sets cell to 0 or 1 based on number of neighbors 
            row[j] = (numNeighbors < 2 || numNeighbors > 3) ? 0
                   : (numNeighbors === 3) ? 1
                   : oldLife[i][j];
        }
        newLife[i] = row;
    }
    return newLife;
};

// counts the number of live neighbors of a given cell
const sumNeighbors = (i, j, oldLife, gameSize) => {
    //let numNeighbors = 0;
    const numNeighbors = oldLife[(gameSize + i - 1) % gameSize][(gameSize + j - 1) % gameSize]
                       + oldLife[i][(gameSize + j - 1) % gameSize]
                       + oldLife[(i + 1) % gameSize][(gameSize + j - 1) % gameSize]
                       + oldLife[(gameSize + i - 1) % gameSize][j]
                       + oldLife[(i + 1) % gameSize][j]
                       + oldLife[(gameSize + i - 1) % gameSize][(j + 1) % gameSize]
                       + oldLife[i][(j + 1) % gameSize]
                       + oldLife[(i + 1) % gameSize][(j + 1) % gameSize];

    //adds up neighbors in all existing adjacent cells
    // if (i != 0) {
    //     if (j != 0) {
    //         numNeighbors += oldLife[i - 1][j - 1];
    //     }

    //     if (j != gameSize - 1) {
    //         numNeighbors += oldLife[i - 1][j + 1];
    //     }
    //     numNeighbors += oldLife[i - 1][j];
    // } 

    // if (i != gameSize - 1) {
    //     if (j != 0) {
    //         numNeighbors += oldLife[i + 1][j - 1];
    //     }

    //     if (j != gameSize - 1) {
    //         numNeighbors += oldLife[i + 1][j + 1];
    //     }
    //     numNeighbors += oldLife[i + 1][j];
    // } 

    // if (j != 0) {
    //     numNeighbors += oldLife[i][j - 1];
    // } 

    // if (j != gameSize - 1) {
    //     numNeighbors += oldLife[i][j + 1];
    // }

    return numNeighbors;
};

export default updateLife;