import { Book } from './book.js';
import { Collect } from './collect.js';
const retrievebook = () => {
  const coll = new Collect();
  if (localStorage.getItem('bookCollection')) {
    const localBooks = JSON.parse(localStorage.getItem('bookCollection'));
    localBooks.bookColl.forEach((element) => {
      coll.add(new Book(element.title, element.author));
    });
  }
};

export { retrievebook };
