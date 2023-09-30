import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import 'flatpickr/dist/themes/dark.css';

const currentDate = new Date();
const startButton = document.querySelector('button');
const days = document.querySelector('span[data-days]');
const hours = document.querySelector('span[data-hours]');
const minutes = document.querySelector('span[data-minutes]');
const seconds = document.querySelector('span[data-seconds]');

startButton.disabled = true;

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: currentDate,
  minuteIncrement: 1,
  onClose(selectedDates) {
    let firstDate = selectedDates[0];
    if (firstDate < currentDate) {
      window.alert('Please choose a date in the future');
      //   return;
    }
    if (firstDate > currentDate) {
      startButton.disabled = false;
      const dateDifference = firstDate.getTime() - currentDate.getTime();
      const countDown = convertMs(dateDifference);

      console.log('difference', countDown);
      console.log(hours);
      //   return;
    }
  },
};

flatpickr('#datetime-picker', options);
