// generates html elements to render game
const renderLife = (gameArr, gameSize) => {
  const gameContainer = document.getElementById('game-container');
  const oldGame = document.getElementById('game');
  const game = document.createElement('div');
  game.id = 'game';
  game.className = 'container';

  for (let rowIndex = 0; rowIndex < gameSize; rowIndex++) {
    const row = document.createElement('div');
    row.className = 'row';

    for (let colIndex = 0; colIndex < gameSize; colIndex++) {
      const pixel = document.createElement('div');
      if (gameArr[rowIndex][colIndex] === 1) {
        pixel.className = 'pixel alive';
      } else {
        pixel.className = 'pixel dead';
      } 
      row.appendChild(pixel);
    }
    game.appendChild(row);
  }

  if (oldGame) {
    gameContainer.replaceChild(game, oldGame);
  } else {
    gameContainer.appendChild(game);
  }
  
}

export default renderLife;