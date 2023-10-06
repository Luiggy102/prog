const math = require('mathjs');

const mA = math.matrix([[1, 2], [3, 4], [5, 6]]);
const mB = math.matrix([[1,-1], [2,-2], [3,-3]]);

const matrixAdd = math.add(mA, mB);

console.log(matrixAdd);
