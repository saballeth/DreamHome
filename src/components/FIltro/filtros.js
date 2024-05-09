const menuItems = document.querySelector('#menu-items');

const items = [
    { text: 'Item 1', checked: false },
    { text: 'Item 2', checked: false },
    { text: 'Item 3', checked: false },
];

menuItems.innerHTML = ''; // Clear the menu items

items.forEach((item, index) => {
    const newItem = document.createElement('li');
    newItem.classList.add('menu-item');
    newItem.innerHTML = `
        <input type="checkbox" id="menu-item-${index}" ${item.checked? 'checked' : ''}>
        <label for="menu-item-${index}">${item.text}</label>
    `;
    menuItems.appendChild(newItem);
});
const searchButton = document.getElementById('search-button');
const menu = document.querySelector('.menu');
let menuOpen = false;

searchButton.addEventListener('click', () => {
  if (menuOpen) {
    menu.style.display = 'none';
    menuOpen = false;
  } else {
    menu.style.display = 'block';
    menuOpen = true;
  }
});


const searchButton2 = document.getElementById('search-button-2');

const menu2 = document.querySelector('.menu-2');

let menuOpen2 = false;


searchButton2.addEventListener('click', () => {

  if (menuOpen2) {

    menu2.style.display = 'none';

    menuOpen2 = false;

  } else {

    menu2.style.display = 'block';

    menuOpen2 = true;

  }

});

const searchButton3 = document.getElementById('search-button-3');

const menu3 = document.querySelector('.menu-3');

let menuOpen3 = false;


searchButton3.addEventListener('click', () => {

  if (menuOpen3) {

    menu3.style.display = 'none';

    menuOpen3 = false;

  } else {

    menu3.style.display = 'block';

    menuOpen3 = true;

  }

});
