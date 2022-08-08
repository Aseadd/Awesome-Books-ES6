const inputTitle = document.getElementById('title');
const inputAuthor = document.getElementById('author');
const submitBtn = document.querySelector('.add-btn');
export class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}
