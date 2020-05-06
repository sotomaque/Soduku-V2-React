/**
 * Random Sodoku Grid Index in 0-8 Range
 */
function getRandomIndex() {
    return Math.floor(Math.random() * Math.floor(9));
}

export default getRandomIndex;