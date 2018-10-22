
const PubSub = require('../helpers/pub_sub.js')

const PrimeChecker = function () {

};


PrimeChecker.prototype.checkIfPrime = function (number) {

  if (number <= 1) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

PrimeChecker.prototype.bindEvents = function () {
  PubSub.subscribe('FormView:number-submitted', (event) => {
    console.log("in primechecker this is:", this);
    console.log("in primechecker event is:", event);
    const inputNumber = event.detail;
    const result = this.checkIfPrime(inputNumber);
    PubSub.publish('PrimeChecker:result', result);
  });
};

module.exports = PrimeChecker;
