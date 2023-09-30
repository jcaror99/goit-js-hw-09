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

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
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
      return;
    }
    if (firstDate > currentDate) {
      startButton.disabled = false;
      const dateDifference = firstDate.getTime() - currentDate.getTime();
      const {
        days: daysDif,
        hours: hoursDif,
        minutes: minutesDif,
        seconds: secondsDif,
      } = convertMs(dateDifference);

      daysDif < 10
        ? (days.textContent = addLeadingZero(daysDif))
        : (days.textContent = daysDif.toString());
      hoursDif < 10
        ? (hours.textContent = addLeadingZero(hoursDif))
        : (hours.textContent = hoursDif.toString());
      minutesDif < 10
        ? (minutes.textContent = addLeadingZero(minutesDif))
        : (minutes.textContent = minutesDif.toString());
      secondsDif < 10
        ? (seconds.textContent = addLeadingZero(secondsDif))
        : (seconds.textContent = secondsDif.toString());

      console.log('difference', daysDif, hoursDif, minutesDif, secondsDif);
    }
  },
};

flatpickr('#datetime-picker', options);
