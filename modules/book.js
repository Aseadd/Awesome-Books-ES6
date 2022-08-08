import { Collect } from './collect';
import { populateStorage } from './populate.js';
const inputTitle = document.getElementById('title');
const inputAuthor = document.getElementById('author');
const submitBtn = document.querySelector('.add-btn');
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

const coll = new Collect();

submitBtn.addEventListener('click', () => {
  coll.add(new Book(inputTitle.value, inputAuthor.value));
});

export { Book };
