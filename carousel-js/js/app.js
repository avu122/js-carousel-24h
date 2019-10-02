var slideIndex, carouselSlide, carouselImages, bubble;

function initSlides() {
    slideIndex = 0;
    carouselSlide = document.getElementsByClassName("carousel-img");
    carouselSlide[slideIndex].style.opacity = 1;
    bubble = [];
    var bubbles = document.getElementById("bubbles"), i;
    for (i = 0; i < carouselSlide.length; i++) {
        let b = document.createElement('span');
        b.classList.add('bubble');
        bubbles.appendChild(b);
        b.setAttribute("onclick", "switchImg(" + i + ")");
        bubble.push(b);
    };
    bubble[slideIndex].classList.add("active");
}

initSlides();

function newSlide(n) {
    switchImg(slideIndex + n);
}

function switchImg(n) {
    var i;
    var current, next;
    var moveSlideAnimClass = {
        forCurrent: "",
        forNext: ""
    };
    if (n > slideIndex) {
        if (n >= carouselSlide.length) { n = 0; }
        moveSlideAnimClass.forCurrent = "leftCurrentSlide";
        moveSlideAnimClass.forNext = "nextSlide";
    } else if (n < slideIndex) {
        if (n < 0) { n = carouselSlide.length - 1; }
        moveSlideAnimClass.forCurrent = "rightCurrentSlide";
        moveSlideAnimClass.forNext = "prevSlide";
    }

    if (n != slideIndex) {
        next = carouselSlide[n];
        current = carouselSlide[slideIndex];
        for (i = 0; i < carouselSlide.length; i++) {
            carouselSlide[i].className = "carousel-img";
            carouselSlide[i].style.opacity = 0;
            bubble[i].classList.remove("active");
        }
        current.classList.add(moveSlideAnimClass.forCurrent);
        next.classList.add(moveSlideAnimClass.forNext);
        bubble[n].classList.add("active");
        slideIndex = n;
    }
}

var timer = null;
function setTimer() {
    timer = setInterval(function () {
        newSlide(1);
    }, 5000);
}
setTimer();

