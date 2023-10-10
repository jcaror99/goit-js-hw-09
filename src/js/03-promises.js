import Notiflix from 'notiflix';

const form = document.querySelector('.form');

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

const submitData = e => {
  e.preventDefault();
  const firstDelayInput = document.querySelector('input[name="delay"]');
  const firstDelay = parseInt(firstDelayInput.value);
  const stepDelayinput = document.querySelector('input[name="step"]');
  const stepDelay = parseInt(stepDelayinput.value);
  const amountInput = document.querySelector('input[name="amount"]');
  const amount = parseInt(amountInput.value);

  for (let i = 1; i <= amount; i++) {
    createPromise(i, i === 1 ? firstDelay : firstDelay + stepDelay * (i - 1))
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      })
      .finally(() => {
        console.log(`promise`);
      });
  }
};

form.addEventListener('submit', submitData);
