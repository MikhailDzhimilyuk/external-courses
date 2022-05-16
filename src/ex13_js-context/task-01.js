let res = 0;

function resNew() {
  fetch('https://jsonplaceholder.typicode.com/todos').then(() => {res = 500});
}

function calc(){
  let called = '';

  function method(val) {
    return method[called](val);
  }

  method.add = function add(x) {
    if (!isNaN(x)) res += x;
    called = 'add';
    return this;
  };
  
  method.subtract = function(x) {
    if (!isNaN(x)) res -= x;
    called = 'subtract';
    return this;
  };

  method.divide = function(x) {
    if ((!isNaN(x)) && (x !== 0)) res /= x;
    called = 'divide';
    return this;
  };
  
  method.multiply = function(x) {
    if (!isNaN(x)) res *= x;
    called = 'multiply';
    return this;
  };

  method.reset = function() {
    res = 0;
    called = 'reset';
    return this;
  };

  method.setState = function(x) {
    res = x;
    called = 'setState';
    return this;
  };

  method.fetchData = function(callback) {
    called = 'fetchData';
    callback();
    return this;
  };

  method.getResult = function() {
    return res;
  };

  return method;
}
