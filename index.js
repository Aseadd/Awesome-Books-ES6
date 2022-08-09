/* eslint-disable max-classes-per-file */
import * as Collect from './modules/collect.js';
import * as Book from './modules/book.js';
import { DateTime } from './luxon.js';

const navAdd = document.querySelector('#add-new');
const navList = document.querySelector('#list');
const navContact = document.querySelector('#contact');
const booksWindow = document.querySelector('.books-section');
const addWindow = document.querySelector('.add-books');
const contactWindow = document.querySelector('.contact-section');

navAdd.addEventListener('click', (evt) => {
  evt.preventDefault();
  addWindow.classList.remove('toggle');
  booksWindow.classList.add('toggle');
  contactWindow.classList.add('toggle');
  document.getElementById('cont-nav').style.color = 'black';
  document.getElementById('list-nav').style.color = 'black';
  document.getElementById('add-nav').style.color = 'blue';
});

navList.addEventListener('click', (evt) => {
  evt.preventDefault();
  booksWindow.classList.remove('toggle');
  addWindow.classList.add('toggle');
  contactWindow.classList.add('toggle');
  document.getElementById('cont-nav').style.color = 'black';
  document.getElementById('list-nav').style.color = 'blue';
  document.getElementById('add-nav').style.color = 'black';
});

navContact.addEventListener('click', (evt) => {
  evt.preventDefault();
  contactWindow.classList.remove('toggle');
  booksWindow.classList.add('toggle');
  addWindow.classList.add('toggle');
  document.getElementById('cont-nav').style.color = 'blue';
  document.getElementById('list-nav').style.color = 'black';
  document.getElementById('add-nav').style.color = 'black';
});

const todayDate = DateTime.now();
const humanReadable = todayDate.toLocaleString(DateTime.DATETIME_MED);
const dateSection = document.querySelector('.date');
dateSection.textContent = `${humanReadable}`;
