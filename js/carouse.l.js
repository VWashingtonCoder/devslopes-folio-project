const slides = document.querySelectorAll('.review-item');
const buttons = document.querySelectorAll('.slide-ctrl-container button');

let current = Math.floor(Math.random() * slides.length);
let next = current < slides.length - 1 ? current + 1 : 0;
let prev = current > 0 ? current - 1 : slides.length - 1;

const dummySlides = [
    // slide 0
    // slide 1 - prev
    // slide 2 - current [next] = current + 1
    // slide 3 - current 
]

/* create eventListener for prev/next  */
// goToNext()
// goToPrev()
// updateIndexes(param)
// updateCSS();

// -- decide how to call prev/next
// -- update variables
// --- [current] = newIndex
// --- [next] = current + 1 : 0
// --- [prev] = current - 1 : length - 1
// update the css

const goToIndex = (idx) => {
    current = idx;
    next = idx < slides.length - 1 ? idx + 1 : 0;
    prev = idx > 0 ? idx - 1 : slides.length - 1;
}

const goToNext = () => current < slides.length - 1 ? goToIndex(current + 1) : goToIndex(0);
const goToPrev = () => current > 0 ? goToIndex(current - 1) : goToIndex(slides.length - 1);

for (let i = 0; i < buttons.length; i += 1) {
    buttons[i].addEventListener('click', () => i === 0 ? goToPrev() : goToNext());
}

