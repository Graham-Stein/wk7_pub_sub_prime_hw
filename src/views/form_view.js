
const FormView = function () {

};

FormView.prototype.bindEvents = function () {
  const form = document.querySelector('#prime-checker-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputNumber = event.target[0].value;
    console.log("input number:", inputNumber);
  });
};

module.exports = FormView;
