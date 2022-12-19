//! UI Script

//+ Get Elements
const root = document.documentElement;
const toggle = document.getElementById('toggle');
const changeToggle = document.getElementById('change-toggle');
const darkToggleSettings = document.getElementById('dark-btn');
const expandButton = document.getElementById('expand-btn');
const expandSideButton = document.getElementById('expand-side');
const expandSideButtonIcon = document.getElementById('expand-side-icon');
const container = document.getElementById('container');
const removeBook = document.getElementById('delete');

//+ background switch

let wallpaper = document.getElementById('bg-btn');
let wallpaperToggle = 'gradient';
wallpaper.onclick = function () {
  if (wallpaperToggle == 'gradient') {
    document.body.style.background =
      'linear-gradient(to right, #16222a, #3a6073)';
    wallpaperToggle = 'image';
    console.log('image');
    wallpaper.innerHTML = 'toggle_on';
  } else {
    document.body.style.background = '';
    wallpaper.innerHTML = 'toggle_off';
    wallpaperToggle = 'gradient';
    console.log('gradient');
  }
};

//+ expand button
let currentSize = 'mini';

let expandFunction = function () {
  if (currentSize == 'mini') {
    container.style.setProperty('width', '100vw');
    container.style.setProperty('height', '100vh');
    currentSize = 'expanded';
    expandButton.innerHTML = 'toggle_on';
    expandSideButtonIcon.innerHTML = 'close_fullscreen';
    console.log('expanded');
  } else {
    container.style.setProperty('width', '500px');
    container.style.setProperty('height', '650px');
    currentSize = 'mini';
    expandButton.innerHTML = 'toggle_off';
    expandSideButtonIcon.innerHTML = 'open_in_full';
    console.log('mini');
  }
};

expandButton.onclick = function () {
  expandFunction();
};

expandSideButton.onclick = function () {
  expandFunction();
};

//+ Dark Mode Toggle

let nightModeFunction = function () {
  if (currentMode == 'light') {
    changeToggle.innerHTML = 'dark_mode';
    darkToggleSettings.innerHTML = 'toggle_on';
    currentMode = 'dark';
    root.style.setProperty('--container-bg', 'rgba(0, 0, 0, 0.644)');
    root.style.setProperty('--sidebar-bg', 'rgba(0, 0, 0, 0.15)');
    root.style.setProperty('--btn-icon-color', 'rgba(255, 255, 255, 0.65)');
    root.style.setProperty(
      '--btn-icon-color-hover',
      'rgb(255, 255, 255) !important'
    );
    root.style.setProperty(
      '--btn-bg-color-hover',
      'rgb(0, 0, 0 0.479) !important'
    );
    root.style.setProperty('--newlol', '0px 0px 5px rgba(0, 0, 0, 0.2)');
    root.style.setProperty(
      '--sidebar-btn-shadow-hover',
      '0px 1px 5px rgba(0, 0, 0, 0.205)'
    );
    root.style.setProperty('--book-shadow', 'rgba(0, 0, 0, 0.479)');
    root.style.setProperty(
      '--book-shadow-hover',
      '0px 3px 10px rgba(0, 0, 0, 0.205)'
    );
    root.style.setProperty(
      '--border-color',
      'border: 1px solid rgba(0, 0, 0, 0.281)'
    );
    root.style.setProperty('--medium-btn-bg-color', 'rgba(0, 0, 0, 0.322)');
    root.style.setProperty('--input-place-color', 'rgba(255, 255, 255, 0.5)');
    root.style.setProperty(
      '--input-textarea-color',
      'rgba(255, 255, 255, 0.75)'
    );
    root.style.setProperty('--input-focus-color', 'rgba(145, 145, 145, 0.38)');
    root.style.setProperty('--input-box-color', 'rgba(145, 145, 145, 0.25)');
    root.style.setProperty('--page-heading-color', 'rgba(255, 255, 255, 0.75)');
    root.style.setProperty('--backdrop-opacity', '35%');
    console.log('dark mode enabled');
  } else {
    changeToggle.innerHTML = 'light_mode';
    darkToggleSettings.innerHTML = 'toggle_off';
    currentMode = 'light';
    root.style.setProperty('--container-bg', 'rgba(255, 255, 255, 0.644)');
    root.style.setProperty('--sidebar-bg', 'rgba(255, 255, 255, 0.15)');
    root.style.setProperty('--btn-icon-color', 'rgba(0, 0, 0, 0.65)');
    root.style.setProperty('--btn-icon-color-hover', 'rgb(0, 0, 0) !important');
    root.style.setProperty(
      '--btn-bg-color-hover',
      'rgb(255, 255, 255 0.479) !important'
    );
    root.style.setProperty('--newlol', '0px 0px 5px rgba(105, 105, 105, 0.2)');
    root.style.setProperty(
      '--sidebar-btn-shadow-hover',
      '0px 1px 5px rgba(105, 105, 105, 0.205)'
    );
    root.style.setProperty('--book-shadow', 'rgba(0, 0, 0, 0.479)');
    root.style.setProperty(
      '--book-shadow-hover',
      '0px 3px 10px rgba(31, 31, 31, 0.205)'
    );
    root.style.setProperty(
      '--border-color',
      'border: 1px solid rgba(0, 0, 0, 0.281)'
    );
    root.style.setProperty(
      '--medium-btn-bg-color',
      'rgba(255, 255, 255, 0.322)'
    );
    root.style.setProperty('--input-place-color', 'rgba(0, 0, 0, 0.5)');
    root.style.setProperty('--input-textarea-color', 'rgba(0, 0, 0, 0.75)');
    root.style.setProperty('--input-focus-color', 'rgba(145, 145, 145, 0.38)');
    root.style.setProperty('--input-box-color', 'rgba(145, 145, 145, 0.25)');
    root.style.setProperty('--page-heading-color', 'rgba(0, 0, 0, 0.75)');
    root.style.setProperty('--backdrop-opacity', '60%');
    console.log('light mode enabled');
  }
};

let currentMode = 'light';
toggle.onclick = function () {
  nightModeFunction();
};

darkToggleSettings.onclick = function () {
  nightModeFunction();
};

//+ change page UI

const pageButtons = document.querySelectorAll('[data-page-target]');

pageButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const openPage = document.querySelector('.add-active');
    const newPage = document.querySelector(button.dataset.pageTarget);
    closePage(openPage, newPage);
  });
});

function closePage(openPage, newPage) {
  if (openPage === null) {
    console.log('null');
  } else {
    openPage.classList.remove('add-active');
    newPage.classList.add('add-active');
  }
}

//! Books Library

let myLibrary = [
  {
    title: 'Version Control',
    author: 'Dexter Palmer',
    pages: '513',
    cover: 'photos/Book-Covers/version control.jpeg',
    date: 'Not Read',
    status: 'unread',
  },
  {
    title: 'When The Doves Disappeared',
    author: 'Sofi Oksanen',
    pages: '340',
    cover: 'photos/Book-Covers/wtdd.jpeg',
    date: 'Not Read',
    status: 'unread',
  },
  {
    title: 'The Illuminati',
    author: 'Unknown',
    pages: '200',
    cover: 'photos/Book-Covers/the illuminati.jpeg',
    date: 'Not Read',
    status: 'unread',
  },
  {
    title: 'We All Love The Beautiful Girls',
    author: 'Joanne Proulx',
    pages: '294',
    cover: 'photos/Book-Covers/waltbg.jpeg',
    date: 'Not Read',
    status: 'unread',
  },

  {
    title: 'Unbecoming',
    author: 'Rebecca Scherm',
    pages: '233',
    cover: 'photos/Book-Covers/u.webp',
    date: 'Not Read',
    status: 'unread',
  },
  {
    title: 'The Stargaze Sister',
    author: 'Carrie Brown',
    pages: '353',
    cover: 'photos/Book-Covers/tss.jpeg',
    date: 'Not Read',
    status: 'unread',
  },
  {
    title: 'A Bad Character',
    author: 'Deepti Kapoor',
    pages: '258',
    cover: 'photos/Book-Covers/abc.jpeg',
    date: 'Not Read',
    status: 'unread',
  },
  {
    title: 'Satin Island',
    author: 'Tom McCarthy',
    pages: '152',
    cover: 'photos/Book-Covers/si.jpg',
    date: 'Not Read',
    status: 'unread',
  },
  {
    title: 'Esthers Inheritance',
    author: 'Sándor Márai',
    pages: '161',
    cover: 'photos/Book-Covers/esthers inher.jpeg',
    date: 'Not Read',
    status: 'unread',
  },
  {
    title: 'Human Acts',
    author: 'Han Kang',
    pages: '208',
    cover: 'photos/Book-Covers/human acts.jpeg',
    date: 'Not Read',
    status: 'unread',
  },
  {
    title: 'Killing Commendatore',
    author: 'Haruki Murakami',
    pages: '512',
    cover: 'photos/Book-Covers/killing commendatore.jpeg',
    date: 'Not Read',
    status: 'unread',
  },
  {
    title: 'Design As Art',
    author: 'Bruno Munari',
    pages: '223',
    cover: 'photos/Book-Covers/Design as Art.jpeg',
    date: 'Not Read',
    status: 'unread',
  },
  {
    title: 'Sphinx',
    author: 'Anne F. Garréta',
    pages: '152',
    cover: 'photos/Book-Covers/ag.jpeg',
    date: 'Not Read',
    status: 'unread',
  },
  {
    title: 'Tony and Susan',
    author: 'Austin Wright',
    pages: '299',
    cover: 'photos/Book-Covers/na.jpeg',
    date: 'Not Read',
    status: 'unread',
  },

  {
    title: 'Dracula',
    author: 'Bram Stoker',
    pages: '412',
    cover: 'photos/Book-Covers/dracula.jpeg',
    date: 'Not Read',
    status: 'unread',
  },
  {
    title: 'The Immoralist',
    author: 'Andre Gide',
    pages: '113',
    cover: 'photos/Book-Covers/the immortalist.jpeg',
    date: 'Not Read',
    status: 'unread',
  },
  {
    title: 'The Psychology of Imagination',
    author: 'Jean-Paul Sartre',
    pages: '241',
    cover: 'photos/Book-Covers/psychology of imagination.jpeg',
    date: 'Not Read',
    status: 'unread',
  },
];

//! Add Books To Library

class Book {
  constructor(title, author, pages, cover, date, status) {
    (this.title = title),
      (this.author = author),
      (this.pages = pages),
      (this.cover = cover),
      (this.date = date),
      (this.status = status);
  }
}

const AddBookToLibrary = (title, author, pages, cover, date, status) => {
  myLibrary.push(new Book(title, author, pages, cover, date, status));
};

console.log(myLibrary);

//! submit page functionality

const titleInput = document.getElementById('title-input');
const authorInput = document.getElementById('author-input');
const pagesInput = document.getElementById('pages-input');
const coverInput = document.getElementById('cover-input');
const readStatus = document.getElementsByName('read-unread');
const submitBook = document.getElementById('submit-book');
const insideShelf = document.getElementById('shelf-inside');
const recentShelf = document.getElementById('recent-shelf');

submitBook.onclick = function () {
  if (
    titleInput.value !== '' &&
    authorInput.value !== '' &&
    pagesInput.value !== ''
  ) {
    let selected = document.querySelector('input[name="read-unread"]:checked');
    let currentStatus = 'unread';
    if (selected.value === 'read') {
      currentStatus = new Date().toLocaleDateString();
    }
    AddBookToLibrary(
      titleInput.value,
      authorInput.value,
      pagesInput.value,
      coverInput.value,
      currentStatus,
      selected.value
    );
    clearBookInputs();
    console.log(myLibrary);
    removeAllChildNodes(insideShelf);
    myLibrary.forEach((book) => {
      addCoverToShelf(book.cover, myLibrary.indexOf(book));
    });
  }
};

//+ clear new book page

const clearBookInputs = function () {
  titleInput.value = '';
  authorInput.value = '';
  pagesInput.value = '';
  coverInput.value = '';
};

//+ add new book cover to shelf
const addCoverToShelf = function (newCover, data) {
  const newBookCover = document.createElement('img');
  newBookCover.className = 'book';
  newBookCover.src = newCover;
  newBookCover.setAttribute('data-index', data);
  insideShelf.insertBefore(newBookCover, insideShelf.firstChild);
};

//+ add new book cover to recent shelf

const addCoverRecentToShelf = function (newCover, data) {
  const newBookCover = document.createElement('img');
  newBookCover.className = 'recent-book';
  newBookCover.src = newCover;
  newBookCover.setAttribute('data-index', data);
  recentShelf.insertBefore(newBookCover, recentShelf.firstChild);
};

//+ function to remove all books
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

//+ on load function to refresh shelf

removeAllChildNodes(insideShelf);
myLibrary.forEach((book) => {
  addCoverToShelf(book.cover, myLibrary.indexOf(book));
});

//! book page

let bookProfileIndex = document.querySelectorAll('.book');
const bookProfileAuthor = document.getElementById('book-profile-author');
const bookProfilePages = document.getElementById('book-profile-pages');
const bookProfileDate = document.getElementById('book-profile-date');
const bookProfileTitle = document.getElementById('book-profile-title');
const bookProfileCover = document.getElementById('book-profile-cover');
const bookProfileBackdrop = document.getElementById('book-profile-backdrop');
const deleteBookButton = document.getElementById('delete-book-btn');
const bookProfileStatus = document.getElementById('book-profile-status');

document.addEventListener('click', (e) => {
  if (e.target.matches('.book')) {
    console.log('book ' + e.target.getAttribute('data-index') + ' clicked');
    currentIndex = e.target.getAttribute('data-index');
    const openPage = document.querySelector('.add-active');
    const bookPage = document.getElementById('book-page');
    closePage(openPage, bookPage);
    //@ set book info
    bookProfileTitle.innerHTML = myLibrary[currentIndex].title;
    bookProfileAuthor.innerHTML = myLibrary[currentIndex].author;
    bookProfilePages.innerHTML = myLibrary[currentIndex].pages;
    bookProfileDate.innerHTML = myLibrary[currentIndex].date;
    bookProfileCover.src = myLibrary[currentIndex].cover;
    bookProfileBackdrop.src = myLibrary[currentIndex].cover;
    //@ delete button
    deleteBookButton.onclick = function () {
      console.log('deleted book at ' + currentIndex);
      delete myLibrary[currentIndex];
      e.target.remove();
      console.log(myLibrary);
      const openPage = document.querySelector('.add-active');
      const newPage = document.getElementById('shelf-page');
      closePage(openPage, newPage);
    };
    //@ get read status
    if (myLibrary[currentIndex].status == 'read') {
      bookProfileStatus.innerHTML = 'turned_in';
    } else if (myLibrary[currentIndex].status === 'unread') {
      bookProfileStatus.innerHTML = 'turned_in_not';
    }
    //@ change read status
    bookProfileStatus.onclick = function () {
      if (myLibrary[currentIndex].status === 'read') {
        console.log('marked unread');
        bookProfileStatus.innerHTML = 'turned_in_not';
        myLibrary[currentIndex].status = 'unread';
        myLibrary[currentIndex].date = 'Not Read';
        bookProfileDate.innerHTML = 'Not Read';
      } else if (myLibrary[currentIndex].status === 'unread') {
        console.log('marked read');
        bookProfileStatus.innerHTML = 'turned_in';
        myLibrary[currentIndex].status = 'read';
        myLibrary[currentIndex].date = new Date().toLocaleDateString();
        bookProfileDate.innerHTML = new Date().toLocaleDateString();
      }
    };
  }
});

//+ user page functions

const booksLogged = document.getElementById('books-logged');
const joinDate = document.getElementById('joined-date');
const userButton = document.getElementById('user');

joinDate.innerHTML = 'Joined: ' + new Date().toLocaleDateString();

userButton.onclick = function () {
  booksLogged.innerHTML =
    'Books Logged: ' +
    myLibrary.reduce(function (prev, curr) {
      return typeof curr !== 'undefined' ? prev + 1 : prev;
    }, 0);
  removeAllChildNodes(recentShelf);
  let recentShelfArray = myLibrary.slice(-3);
  recentShelfArray.forEach((book) => {
    addCoverRecentToShelf(book.cover, myLibrary.indexOf(book));
  });
};
