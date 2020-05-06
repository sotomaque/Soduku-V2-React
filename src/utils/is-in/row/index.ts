import { GRID, NUMBERS } from 'typings';

interface IInput {
    grid: GRID
    row: number
    value: NUMBERS
}

/**
 * function that returns True if value is cannot be entered into an input square
 * because it already exists in that squares row
 * 
 * @param input Object with 9x9 Soduku Grid, row index, desired input value
 */
function isInRow({ grid, row, value}: IInput): boolean {
    return grid[row].includes(value);
}

export default isInRow;