import { GRID, NUMBERS } from 'typings';

interface IInput {
    grid: GRID
    col: number
    value: NUMBERS
}

/**
 * function that returns True if value is cannot be entered into an input square
 * because it already exists in that squares column
 * 
 * @param input Object with 9x9 Soduku Grid, column index, desired input value
 */
function isInCol({ grid, col, value}: IInput): boolean {
    
    for (let i = 0; i < 9; i++) {
        if (value === grid[i][col]) {
            return true;
        }
    }

    return false;
}

export default isInCol;