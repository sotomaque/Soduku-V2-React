import { NUMBERS, SQUARE } from 'typings';

interface IInput {
    square: SQUARE
    value: NUMBERS
}

/**
 * function that returns true if value is already in desired square
 * 
 * @param input Object 3x3 Square
 */
function isInSquare({ square, value }: IInput): boolean {
    return [...square[0], ...square[1], ...square[2]].includes(value)
};

export default isInSquare;