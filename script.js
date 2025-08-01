'use strict';

const addEventOnElem = function (elements, eventType, callback) {
    for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener(eventType, callback);
    }
}

const $header = document.querySelector('[data-header]');
const $navbar = document.querySelector('[data-navbar]');
const $navToggler = document.querySelectorAll('[data-nav-toggler]');
const $overlay = document.querySelector('[data-overlay]');
const $dropdownToggler = document.querySelector('[data-dropdown-toggler]');
const $dropdown = document.querySelector('[data-dropdown]');
const $cartToggler = document.querySelector('[data-cart-toggler]');
const $cartModal = document.querySelector('[data-cart-modal]');

const toggleNavbar = function () {
    $navbar.classList.toggle('active');
    $overlay.classList.toggle('active');
    document.body.classList.toggle('active');
}

addEventOnElem($navToggler, 'click', toggleNavbar);
const toggleElem = function (elem) {
    elem.classList.toggle('active');
}

$dropdownToggler.addEventListener('click', function () {
    toggleElem($dropdown);
});

$cartToggler.addEventListener('click', function () {
    toggleElem($cartModal);
});

const activeHeader = function () {
    window.scrollY > 50 ? $header.classList.add('active') : $header.classList.remove('active');
}

window.addEventListener('scroll', activeHeader);

const $sliderContainers = document.querySelectorAll('[data-slider-container]');

function sliderInitial($sliderContainer) {
    const $slider = $sliderContainer.querySelector('[data-slider]');
    const $prevBtn = $sliderContainer.querySelector('[data-prev-btn]');
    const $nextBtn = $sliderContainer.querySelector('[data-next-btn]');

    function nextSlide() {
    $slider.appendChild($slider.firstElementChild);
    }
    $nextBtn.addEventListener('click', nextSlide);

    function prevSlide() {
    $slider.prepend($slider.lastElementChild);
    }
    $prevBtn.addEventListener('click', prevSlide);

    let autoSlideIntervalId;

    function autoSlide() {
    autoSlideIntervalId = setInterval(function () {
        nextSlide();
    }, 2000);
    }

    autoSlide();

    function deleteAutoSliding() {
    clearInterval(autoSlideIntervalId);
    }

    $slider.addEventListener('mouseover', deleteAutoSliding);
    $prevBtn.addEventListener('mouseover', deleteAutoSliding);
    $nextBtn.addEventListener('mouseover', deleteAutoSliding);


    $slider.addEventListener('mouseout', autoSlide);
    $prevBtn.addEventListener('mouseout', autoSlide);
    $nextBtn.addEventListener('mouseout', autoSlide);
}

for (let i = 0; i < $sliderContainers.length; i++) {
    sliderInitial($sliderContainers[i]);
}