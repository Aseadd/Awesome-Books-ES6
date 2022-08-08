import { populateStorage } from './populate.js';
//import { collection } from './Collection.js';
const removeFromColl = (data) => {
  //const coll = new collection();
  const arr = data.getAttribute('data-value').split('-');
  books = books.filter((item) => item.title + item.author !== arr[0] + arr[1]);
  populateStorage();
};
