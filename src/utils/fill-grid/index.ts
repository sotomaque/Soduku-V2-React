import { GRID, NUMBERS } from 'typings';
import { identifySquare, isInRow, isInCol, isInSquare, shuffle } from 'utils';

const gridExample: GRID = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
];

const numbers: NUMBERS[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/**
 * A backgracking / recursive function to check all possible
 * combinations of numbers until a solution is found
 *
 * @param grid 9x9 SODUKU grid
 */
function fillGrid(grid: GRID) {
  let row = 0;
  let col = 0;

  for (let i = 0; i < 81; i++) {
    row = Math.floor(i / 9);
    col = i % 9;

    if (grid[row][col] === 0) {
      // do stuff
      shuffle(numbers);

      for (let value of numbers) {
          if (!isInRow({ grid, row, value })) {
            if (!isInCol({ grid, col, value })) {
                const square = identifySquare({ grid, row, col })
                if (!isInSquare({ square, value })) {

                }
                // .... if this is case

                // ...
                grid[row][col] = value;
                // check grid if it is full; if yes, stop and return
                // otherwise we run fillGrid(grid)
            }
          }
      }
      break;
    }
  }
}

export default fillGrid;
