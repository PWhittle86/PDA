var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

// - calculator.clearClick()

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('has a sample test', function(){
    assert.equal(true, true)
  })

  it('can add', function(){
    calculator.previousTotal = 5;
    calculator.add(5);
    assert.equal(calculator.runningTotal, 10);
  })

  it('can subtract', function(){
    calculator.previousTotal = 10;
    calculator.subtract(5);
    assert.equal(calculator.runningTotal, 5);
  })

  it('can multiply', function(){
    calculator.previousTotal = 5;
    calculator.multiply(3);
    assert.equal(calculator.runningTotal, 15);
  })

  it('can divide', function(){
    calculator.previousTotal = 10;
    calculator.divide(2);
    assert.equal(calculator.runningTotal, 5);
  })

  it('can accept numbers with numberclick', function(){
    calculator.numberClick(5);
    assert.equal(calculator.runningTotal, 5);
  })

  it('can concatenate using numberclick', function(){
    calculator.previousTotal = 0;
    calculator.numberClick(5);
    calculator.numberClick(5);
    assert.equal(calculator.runningTotal, 55);
  })

  it('resets runningTotal on numberclick if newTotal is true', function(){
    calculator.previousTotal = 100;
    calculator.newTotal = true;
    calculator.numberClick(5);
    assert.equal(calculator.runningTotal, 5);
  })

  it('performs operation on previous total if another operator clicked', function(){
    calculator.previousTotal = 10;
    calculator.add(5);
    calculator.operatorClick('+');
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, 30);
  })

  it('can chain multiple operations together', function(){
    calculator.previousTotal = 10;
    calculator.add(5);
    calculator.operatorClick('+');
    calculator.operatorClick('*');
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, 900);
  })

  it('can reset runningTotal via clearClick', function(){
    calculator.runningTotal = 50;
    calculator.clearClick();
    assert.equal(calculator.runningTotal, 0);
  })

  it('can clear operators and totals via clearclick', function(){
    calculator.previousOperator = '-';
    calculator.previousTotal = '10';
    calculator.runningTotal = 0;
    calculator.clearClick();
    assert.equal(calculator.previousTotal, null);
    assert.equal(calculator.previousOperator, null);
  })

});
