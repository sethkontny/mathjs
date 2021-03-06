// test squeeze
var assert = require('assert');
var math = require('../../../index.js'),
    squeeze = math.squeeze,
    size = math.size,
    matrix = math.matrix;

describe('squeeze', function() {

  it('should squeeze the given matrix', function() {
    m = math.ones(matrix([1,3,2]));
    assert.deepEqual(size(m), matrix([1,3,2]));
    assert.deepEqual(size(m.valueOf()), [1,3,2]);
    assert.deepEqual(size(squeeze(m)), matrix([3,2]));
    m = math.ones(matrix([1,1,3]));
    assert.deepEqual(size(m), matrix([1,1,3]));
    assert.deepEqual(size(squeeze(m)), matrix([3]));
    assert.deepEqual(squeeze(2.3), 2.3);
    assert.deepEqual(size(squeeze(math.range(1,6))), matrix([5]));
  });

});