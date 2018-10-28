const assert = require('assert');
const sumOfOther = require('./src/sumOfOther.js');
const make = require('./src/make.js');
const recursion = require('./src/recursion.js');

describe('sumOfOther', () => {
    it('1', () => {
      const solutions = sumOfOther([2, 3, 4, 1]);
      assert.deepEqual(solutions, [8, 7, 6, 9]);
    });
    
    it('2', () => {
      const solutions = sumOfOther([1, 2, 3, 4]);
      assert.deepEqual(solutions, [9, 8, 7, 6]);
    });

    it('3', () => {
        const solutions = sumOfOther([5, 7, 3, 4, 2, 9]);
        assert.deepEqual(solutions, [25, 23, 27, 26, 28, 21]);
      });
});

function sum(a, b) {
    return a + b;
}

function mul(a, b) {
    return a * b;
}

describe('make', () => {
    it('1', () => {
      const solutions = make(2, 3)(4)(5)(sum);
      assert.deepEqual(solutions, 14);
    });
    
    it('2', () => {
      const solutions = make(1)(2, 3)(4)(sum);
      assert.deepEqual(solutions, 10);
    });

    it('3', () => {
        const solutions = make(5)(2)(3)(sum);
        assert.deepEqual(solutions, 10);
    });

    it('4', () => {
        const solutions = make(2, 2, 2)(2, 2, 2)(1)(mul);
        assert.deepEqual(solutions, 64);
    });

    it('5', () => {
        const solutions = make(3, 2, 2, 1)(3, 4)(2)(mul);
        assert.deepEqual(solutions, 288);
    });

    it('6', () => {
        const solutions = make(4, 3, 2, 1)(mul);
        assert.deepEqual(solutions, 24);
    });
});

let tree = {"value":100,"left":{"value":90,"left":{"value":70},"right":{"value":99}},"right":{"value":120,"left":{"value":110},"right":{"value":130}}};
let tree1 = {"value":100,"left":{"value":90,"left":{"value":70},"right":{"value":99},"center":{"value":100,"right":{"value":777}}},"right":{"value":120,"left":{"value":110},"right":{"value":130}},"center":{"value":80,"left":{"value":60},"right":{"value":55}}};
let tree2 = {"value":100,"left":{"value":90,"left":{"value":70},"right":{"value":99,"right":{"value":120,"left":{"value":110},"right":{"value":130}}},"center":{"value":100,"right":{"value":777} }},"right":{"value":120,"left":{"value":110},"right":{"value":130}},"center":{"value":80,"left":{"value":60},"right":{"value":55}}};

describe('recursion', () => {
    it('1', () => {
        const solutions = recursion(tree);
        assert.deepEqual(solutions, [[100], [90, 120], [70, 99, 110, 130]]);
    });

    it('2', () => {
        const solutions = recursion(tree1);
        assert.deepEqual(solutions, [[100], [90, 120, 80], [70, 99, 100, 110, 130, 60, 55], [777]]);
    });

    it('3', () => {
        const solutions = recursion(tree2);
        assert.deepEqual(solutions, [[100], [90, 120, 80], [70, 99, 100, 110, 130, 60, 55], [120,777], [110, 130]]);
    });
});