import { Collection } from './book.js';
import { navAdd, navList, navContact } from './event.js';

export default function display(data) {
  if (this) {
    const div = document.createElement('div');
    div.className = 'book-wraper';
    div.innerHTML = `<h3>"${data.title}" by ${data.author}</h3>
                    <button data-value="${data.title}-${data.author}" type="button" class ="remove-button">Remove</button>`;
    bookSection.appendChild(div);
  }
}
