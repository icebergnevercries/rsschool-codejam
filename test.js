const assert = require('assert');
const sumOfOther = require('./src/sumOfOther.js');

describe('sumOfOther', () => {
    it('1', () => {
      const solutions = sumOfOther([2, 3, 4, 1]);
      assert.deepEqual(solutions, [8, 7, 6, 9]);
    });
    
    it('2', () => {
      const solutions = sumOfOther([1, 2, 3, 4]);
      assert.deepEqual(solutions, [9, 8, 7, 6]);
    });

    it('2', () => {
        const solutions = sumOfOther([5, 7, 3, 4, 2, 9]);
        assert.deepEqual(solutions, [25, 23, 27, 26, 28, 21]);
      });
});