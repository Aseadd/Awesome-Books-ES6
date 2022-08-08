import { DateTime } from './luxon.js';

const contTimeNDatUpdat = () => {
  const dateSection = document.querySelector('.date');
  const todayDate = DateTime.now();
  const humanReadable = todayDate.toLocaleString(DateTime.DATETIME_MED);
  dateSection.innerHTML = humanReadable;
  console.log(humanReadable);
};

export { contTimeNDatUpdat };
