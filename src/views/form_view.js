const PubSub = require('../helpers/pub_sub.js')

const FormView = function () {

};

FormView.prototype.bindEvents = function () {
  const form = document.querySelector('#prime-checker-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputNumber = event.target[0].value;
    console.log("input number is: ",inputNumber);
    PubSub.publish('FormView:number-submitted', inputNumber);
  });
};

module.exports = FormView;
