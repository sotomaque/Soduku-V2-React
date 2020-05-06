import { GRID } from 'typings';

/**
 * function to check if grid is full
 * 
 * @param grid 9x9 Soduku Grid
 */
function checkGrid(grid: GRID): boolean {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (grid[i][j] === 0) {
                return false;
            }
        }
    }

    return true;
}

export default checkGrid;