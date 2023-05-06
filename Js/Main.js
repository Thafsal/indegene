// Scroll event to make header sticky
var header = document.getElementById('header');
window.addEventListener('scroll', function () {
    if (window.scrollY > 500) {
        header.classList.add('header-fixed');
    } else {
        header.classList.remove('header-fixed');
    }
});

// Click toggle event for menu hamburger
// Get the necessary elements
var hamburger = document.querySelector('.hamburger-menu');
var iconBar = document.querySelector('.menu-bar');
var navBarCollapse = document.querySelector('.nav-click');
hamburger.addEventListener('click', function () {
    iconBar.classList.toggle('active');
    navBarCollapse.classList.toggle('activeIn');
});




// Scroll event to make header sticky
var header = document.getElementById('header');
window.addEventListener('scroll', function () {
    if (window.scrollY > 500) {
        header.classList.add('header-fixed');
    } else {
        header.classList.remove('header-fixed');
    }
});


const carousel = document.querySelector('.testimonial-carousel');
const items = document.querySelector('.testimonial-items');
const itemWidth = document.querySelector('.testimonial-item').offsetWidth;
const prevButton = document.querySelector('.carousel-button-prev');
const nextButton = document.querySelector('.carousel-button-next');

let position = 0; // initial position of the carousel

// function to handle clicking on the "previous" button
function onPrevButtonClick() {
  position += itemWidth;
  if (position > 0) {
    position = -(items.children.length - 1) * itemWidth;
  }
  items.style.transform = `translateX(${position}px)`;
}

// function to handle clicking on the "next" button
function onNextButtonClick() {
  position -= itemWidth;
  if (position < -(items.children.length - 1) * itemWidth) {
    position = 0;
  }
  items.style.transform = `translateX(${position}px)`;
}

// add event listeners to the buttons
prevButton.addEventListener('click', onPrevButtonClick);
nextButton.addEventListener('click', onNextButtonClick);



