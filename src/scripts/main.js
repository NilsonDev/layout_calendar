'use strict';
import './src/scripts/main.scss';

document.addEventListener('DOMContentLoaded', () => {
  const days = document.querySelectorAll('.calendar__day');
  days.forEach((day, i) => {
    day.textContent = i + 1;
    day.addEventListener('click', () => {
      day.classList.toggle('calendar__day--active');
    });
  });
});

