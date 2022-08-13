import Notiflix from 'notiflix';

const form = document.querySelector('.form').addEventListener('submit', onSubmitClick);
const inputDelay = document.querySelector('[name="delay"]');
const inputDelayStep = document.querySelector('[name="step"]');
const inputAmount = document.querySelector('[name="amount"]');

function createPromise(position, delay) { 
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
  return promise; 
};

function onSubmitClick(event) {
  event.preventDefault();
  let delay = +inputDelay.value;
  let step = +inputDelayStep.value;
  const amount = +inputAmount.value;

  for (let position = 1; position <= amount; position += 1){
    
     createPromise(position, delay)
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });

    delay+=step;
  };
  return;
};
