const slides = document.querySelectorAll('.review-item');
const buttons = document.querySelectorAll('.slide-ctrl-container button');

let current = Math.floor(Math.random() * slides.length);
let next = current < slides.length - 1 ? current + 1 : 0;
let prev = current > 0 ? current - 1 : slides.length - 1;

console.log('prev', prev);
console.log('current', current);
console.log('next', next);



const dummySlides = [
    // slide 0
    // slide 1 - prev
    // slide 2 - current [next] = current + 1
    // slide 3 - current 
]