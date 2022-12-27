const root = document.documentElement; //Targets root html

/* Theme */
const theme = 'theme';
const dataTheme = 'data-theme';
const themeTab = '.theme-tab';
const switcherBtn = '.switcher-btn';
const dark = 'dark';
const light = 'light';
const open = 'open';
const active = 'active';
const toggleTheme = document.querySelector(themeTab);
const switcher = document.querySelectorAll(switcherBtn);
const currentTheme = localStorage.getItem(theme);

// Portfolio Variables
const searchBox = document.querySelector('#search');
const dataFilter = '[data-filter]';
const portfolioData = '[data-item]';
const filterLink = document.querySelectorAll(dataFilter);
const portfolioItems = document.querySelectorAll(portfolioData);


/* Modal variables */
const modalOpen = '[data-open]';
const modalClose = '[data-close]';
const isVisible = 'is-visible'
const openModal = document.querySelectorAll(modalOpen);
const closeModal = document.querySelectorAll(modalClose);

/* Theme functions */
// 'toggle helpers'
const setActive = (elm, selector) => {
    if (document.querySelector(`${selector}.${active}`) !== null) 
        document.querySelector(`${selector}.${active}`).classList.remove(active);
    elm.classList.add(active);
}

const setTheme = (val) => {
    if(val === dark) {
        root.setAttribute(dataTheme, dark);
        localStorage.setItem(theme, dark);
    } else {
        root.setAttribute(dataTheme, light);
        localStorage.setItem(theme, light);
    }
}

if (currentTheme) {
    root.setAttribute(dataTheme, currentTheme);
    switcher.forEach((btn) => btn.classList.remove(active));
    currentTheme === dark 
        ? switcher[1].classList.add(active) 
        : switcher[0].classList.add(active);  
}

// 'toggle tab_open/close panel'
toggleTheme.addEventListener('click', function() {
    const tab = this.parentElement.parentElement;
    !tab.className.includes(open) 
        ? tab.classList.add(open) 
        : tab.classList.remove(open); 
});

// 'toggle active button and theme'
for (const elm of switcher) {
    elm.addEventListener('click', function() {
        const toggle = this.dataset.toggle;
        setActive(elm, switcherBtn);
        setTheme(toggle);
    })
}

// search functionality
searchBox.addEventListener('keyup', (e) => {
    const searchInput = e.target.value.toLowerCase().trim();
    portfolioItems.forEach((card) => {
        card.dataset.item.includes(searchInput)
            ? card.style.display = 'block'
            : card.style.display = 'none'; 
    })
});

// 'toggle active class on portfolio-nav links'
for (const link of filterLink) {
    link.addEventListener('click', function() {
        setActive(link, '.filter-link');
        const filter = this.dataset.filter;
        portfolioItems.forEach((card) => {
            if (filter === 'all') card.style.display = 'block';
            else if (card.dataset.item === filter) card.style.display = 'block';
            else card.style.display = 'none';
        });
    });
}

/* Full Site Modal functions */
// 'open buttons'
for (const elm of openModal){
    elm.addEventListener('click', function() {
        const modalId = this.dataset.open;
        document.getElementById(modalId).classList.add(isVisible);
    })
}

// 'close buttons'
for (const elm of closeModal){
    elm.addEventListener('click', function() {
        this.parentElement.parentElement.parentElement.classList.remove(isVisible);
    })
}

// 'modal closure'
document.addEventListener('click', (e) => {
    console.log(e.target, document.querySelector('.modal.is-visible'));
    if (e.target === document.querySelector('.modal.is-visible')) {
        document.querySelector('.modal.is-visible').classList.remove(isVisible);
    }
});

document.addEventListener('keyup', (e) => {
    console.log(e.key);
    if (e.key === 'Escape') {
        document.querySelector('.modal.is-visible').classList.remove(isVisible);
    }
});