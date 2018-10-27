const assert = require('assert');
const sumOfOther = require('./src/sumOfOther.js');
const make = require('./src/make.js');

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