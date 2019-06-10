/*
    Generates life, where percentAlive is the expectation value of the 
    percent of inital cells that are alive. 
*/

const generateLife = (percentAlive, gameSize) => {

    const emptyArr = new Array(gameSize);
    const filledArr = emptyArr.fill([]);

    const life = filledArr.map(row => {
        const emptyRow = new Array(gameSize);
        const filledRow = emptyRow.fill(0);
        const lifeRow = filledRow.map(cell => {
            if (Math.random() < (percentAlive / 100)) {
                return 1;
            } else {
                return 0;
            }
        });
        return lifeRow
    });

    return life;
};

export default generateLife;