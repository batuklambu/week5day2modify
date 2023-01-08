// Menu data structure

var menuLinks = [
  { text: 'about', href: '/about' },
  {
    text: 'catalog',
    href: '#',
    subLinks: [
      { text: 'all', href: '/catalog/all' },
      { text: 'top selling', href: '/catalog/top' },
      { text: 'search', href: '/catalog/search' },
    ],
  },
  {
    text: 'orders',
    href: '#',
    subLinks: [
      { text: 'new', href: '/orders/new' },
      { text: 'pending', href: '/orders/pending' },
      { text: 'history', href: '/orders/history' },
    ],
  },
  {
    text: 'account',
    href: '#',
    subLinks: [
      { text: 'profile', href: '/account/profile' },
      { text: 'sign out', href: '/account/signout' },
    ],
  },
];

// Task 1.0

let mainEl = document.querySelector('main');
mainEl.style.backgroundColor = 'var(--main-bg)';
mainEl.innerHTML = '<h1>SEI Rocks!</h1>';
mainEl.classList.add('flex-ctr');

// Task 2.0

let topMenuEl = document.getElementById('top-menu');
topMenuEl.style.height = '100%';
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
topMenuEl.classList.add('flex-around');

// Task 3.0

// for (let i in menuLinks) {
//   a = document.createElement('a');
//   a.setAttribute('href', 'menuLinks[i].href');
//   a.textContent = menuLinks[i].text;
//   topMenuEl.append(a);
// }

for (let key in menuLinks) {
  //   console.log(key);
  //   console.log(menuLinks[key]);
  a = document.createElement('a');
  a.setAttribute('href', 'menuLinks[key].href');
  a.textContent = menuLinks[key].text;
  topMenuEl.appendChild(a);
}

// Task 4.1,4.2,4.3,4.4,4.5

let subMenuEl = document.getElementById('sub-menu');
subMenuEl.style.height = '100%';
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
subMenuEl.classList.add('flex-around');
subMenuEl.style.position = 'absolute';
subMenuEl.style.top = '0';

// Task 5.1
// Select and cache the all of the <a>elements inside of topMenuElin a variable named topMenuLinks.
// Declare a global showingSubMenuvariable and initialize it to false;

let topMenuLinks = document.querySelectorAll('nav a');
topMenuLinks.forEach((a) => {
  console.log(a.textContent);
});

var showingSubMenu = false;

// Task  5.2

topMenuEl.addEventListener('click', function (evt) {
  evt.preventDefault();
  // if ((evt = 'a')) {
  //   console.log(evt.textContent);
  // } else {
  //   return;
  // }
  // Task 5.3

  if ((evt.target = document.querySelector('.active'))) {
    evt.target.classList.remove('active');
    showingSubMenu = false;
    subMenuEl.style.top = '0';
    return;
  }

  // Task 5.4
  topMenuLinks.forEach((a) => {
    a.classList.remove('active');
  });

  // Task 5.5

  if ((evt.target = document.querySelector('.active'))) {
    evt.target.classList.add('active');
  }

  // subMenuEl.textContent = '';
  let links = [];

  // Task 5.8

  menuLinks.forEach((a) => {
    if (a.text === evt.target.textContent) {
      if (a.hasOwnProperty('subLinks')) {
        if ((showingSubMenu = true)) {
          function buildSubMenu(links) {
            subMenuEl.textContent = '';

            a.subLinks.forEach(function (link) {
              let a1 = document.createElement('a');
              a1.setAttribute('href', link.href);
              a1.textContent = link.text;
              subMenuEl.style.top = '100%';
              links.push(a1);
            });
            subMenuEl.style.top = '100%';
            console.log('hi', links);
            links.forEach(function (e) {
              console.log(e);
            });
            links.forEach((link) => subMenuEl.append(link));
            //or try this:
            //   subMenuEl.append(...links);
            //console.log(subMenuEl)
          }
        } else {
          showingSubMenu = false;
          subMenuEl.style.top = '0px';
        }
        buildSubMenu(links); //task 5.7
      }
    }
  });
  //  Task 6.4
  if (evt.target.text === 'about') {
    console.log('hi', evt.target.text);
  }
  mainEl.innerHTML = `<h1>${evt.target.text}</h1>`;
});

// Task 6.0,6.1,6.2

subMenuEl.addEventListener('click', function (evt) {
  evt.preventDefault();
  showingSubMenu = false;
  subMenuEl.style.top = '0';
  topMenuLinks.forEach((a) => {
    a.classList.remove('active');
    evt.target.classList.remove('active');
    console.log(evt.target.textContent);
  });

  mainEl.innerHTML = `<h1>${evt.target.text}</h1>`;
});
