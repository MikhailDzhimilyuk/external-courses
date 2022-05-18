let res = 0;

function resNew() {
  fetch('https://jsonplaceholder.typicode.com/todos').then(() => {res = 500});
}

function calc() {
  this.add = function(x) {
    if (!isNaN(x)) res += x;
    return this;
  };
  
  this.subtract = function(x) {
    if (!isNaN(x)) res -= x;
    return this;
  };

  this.divide = function(x) {
    if ((!isNaN(x)) && (x !== 0)) res /= x;
    return this;
  };
  
  this.multiply = function(x) {
    if (!isNaN(x)) res *= x;
    return this;
  };

  this.reset = function() {
    res = 0;
    return this;
  };

  this.setState = function(x) {
    res = x;
    return this;
  };

  this.fetchData = function(callback) {
    callback();
    return this;
  };

  this.getResult = function() {
    return res;
  };
}

let Calculator = new calc();
