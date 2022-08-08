import { Collect } from './collect.js';
const populateStorage = () => {
  const coll = new Collect();
  localStorage.setItem(
    'bookCollection',
    JSON.stringify({ bookColl: coll.books })
  );
};

export { populateStorage };
