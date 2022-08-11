
const submit = document.querySelector("button").addEventListener('click', createPromise);
const inputDelay = document.querySelector('[name="delay"]');
const inputDelayStep = document.querySelector('[name="delay"]');
const inputAmount = document.querySelector('[name="delay"]');

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    reject('error')
  }
}
let p = new Promise((resolve, reject) => {

});
