const PubSub = require('../helpers/pub_sub.js')

const ResultView = function () {

};

ResultView.prototype.displayResult = function (result) {
  const resultElement = document.querySelector("#result");
  resultElement.textContent = `${result}`
};

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('PrimeChecker:result', (event) => {
    console.log("In result view, event is:", event);
    const primeCheckStatement = event.detail;
    this.displayResult(primeCheckStatement);
  });
};

module.exports = ResultView;
