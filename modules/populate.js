import { collect } from './collect.js';
const populateStorage = () => {
  const coll = new Collection();
  localStorage.setItem(
    'bookCollection',
    JSON.stringify({ bookColl: coll.books })
  );
};

export { populateStorage };
