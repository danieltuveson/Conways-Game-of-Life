import generateLife from './generateLife.js';
import renderLife from './renderLife.js';
import updateLife from './updateLife.js';


const life = () => {
    
    const initSize = 50;
    const percentAlive = 10;
    const initLife = generateLife(percentAlive, initSize);
    sessionStorage.setItem('game', JSON.stringify(initLife));
    renderLife(initLife, initSize);

    const intervalId = setInterval(() => {
        const gameSize = 50;
        const oldLife = JSON.parse(sessionStorage.getItem('game'));
        const newLife = updateLife(oldLife, gameSize);

        renderLife(newLife, gameSize);
        sessionStorage.clear();
        sessionStorage.setItem('game', JSON.stringify(newLife));
    }, 300);
};

export default life;



