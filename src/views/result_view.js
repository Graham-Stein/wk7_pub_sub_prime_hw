const PubSub = require('../helpers/pub_sub.js')

const ResultView = function () {

};

ResultView.prototype.displayResult = function (result) {
  const resultElement = document.querySelector("#result");
  resultElement.textContent = `This is ${result} a prime number.`
};
