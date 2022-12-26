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

/* Modal variables */
const modalOpen = '[data-open]';
const modalClose = '[data-close]';
const isVisible = 'is-visible'
const openModal = document.querySelectorAll(modalOpen);
const closeModal = document.querySelectorAll(modalClose);

/* Theme functions */
// 'toggle helpers'
const setActive = (elm, selector) => {
    document.querySelector(`${selector}.${active}`) !== null 
        ? document.querySelector(`${selector}.${active}`).classList.remove(active)
        : elm.classList.add(active);
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
        this.parentElement.parentElement.classList.remove(isVisible);
    })
}