const slides = document.querySelectorAll('.review-item');
const buttons = document.querySelectorAll('.slide-ctrl-container button');

let current = Math.floor(Math.random() * slides.length);
let next = current < slides.length - 1 ? current + 1 : 0;
let prev = current > 0 ? current - 1 : slides.length - 1;

const updateSlides = () => {
    slides.forEach((slide) => {
        slide.classList.remove('active', 'prev', 'next');
    })
    slides[current].classList.add('active');
    slides[prev].classList.add('prev');
    slides[next].classList.add('next');
}

const goToIndex = (idx) => {
    current = idx;
    next = idx < slides.length - 1 ? idx + 1 : 0;
    prev = idx > 0 ? idx - 1 : slides.length - 1;
    updateSlides();
}

const goToNext = () => current < slides.length - 1 ? goToIndex(current + 1) : goToIndex(0);
const goToPrev = () => current > 0 ? goToIndex(current - 1) : goToIndex(slides.length - 1);

for (let i = 0; i < buttons.length; i += 1) {
    buttons[i].addEventListener('click', () => i === 0 ? goToPrev() : goToNext());
}

updateSlides();