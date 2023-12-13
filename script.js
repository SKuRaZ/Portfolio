const dynamicText = document.querySelector("h3 span-2");
const words = ["Youtuber", "Designer", "Developer", "Gamer"];

// Variables to track the position and deletion status of the word
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop-blinking");

    if (!isDeleting && charIndex < currentWord.length) {
        // If condition is true, type the next character
        charIndex++;
        setTimeout(typeEffect, 200);
    } else if (isDeleting && charIndex > 0) {
        // If condition is true, remove the previous character
        charIndex--;
        setTimeout(typeEffect, 100);
    } else {
        // If word is deleted then switch to the next word
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blinking");
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1200);
    }
}

typeEffect();


// coding with nick
// vars
'use strict'
var testim = document.getElementById("testim"),
    testimDots = Array.prototype.slice.call(document.getElementById("testim-dots").children),
    testimcontent = Array.prototype.slice.call(document.getElementById("testim-content-Cr").children),
    testimleftArrow = document.getElementById("left-arrow"),
    testimRightArrow = document.getElementById("right-arrow"),
    testimSpeed = 4500,
    currentSlide = 0,
    currentActive = 0,
    testimTimer
    ;
// coding with nick
window.onload = function () {

    // Testim Script
    function playSlide(slide) {
        for (var k = 0; k < testimDots.length; k++) {
            testimcontent[k].classList.remove("active");
            testimcontent[k].classList.remove("inactive");
            testimDots[k].classList.remove("active");
        }
        if (slide < 0) {
            slide = currentSlide = testimcontent.length - 1;
        }
        if (slide > testimcontent.length - 1) {
            slide = currentSlide = 0;
        }
        if (currentActive != currentSlide) {
            testimcontent[currentActive].classList.add("inactive");
        }
        testimcontent[slide].classList.add("active");
        testimDots[slide].classList.add("active");

        currentActive = currentSlide;

        clearTimeout(testimTimer);
        testimTimer = setTimeout(function () {
            playSlide(currentSlide += 1);
        }, testimSpeed)
    }
// coding with nick
    testimleftArrow.addEventListener("click", function () {
        playSlide(currentSlide -= 1);
    })
    testimRightArrow.addEventListener("click", function () {
        playSlide(currentSlide += 1);
    })

    for (var l = 0; l < testimDots.length; l++) {
        testimDots[l].addEventListener("click", function () {
            playSlide(currentSlide = testimDots.indexOf(this));
        })
    }
    playSlide(currentSlide);

}
// coding with nick

var w = window.innerWidth,
    h = window.innerHeight,
    canvas = document.getElementById('test'),
    ctx = canvas.getContext('2d'),
    rate = 60,
    arc = 100,
    time,
    count,
    size = 7,
    speed = 10,
    parts = new Array,
    values = ['0', '1', ';</>', '</>', '</>', 'console.log("Hello, world!");', 'if (condition) {', 'for (var i = 0; i < 10; i++) {', 'function myFunction() {'];
var mouse = { x: 0, y: 0 };

canvas.setAttribute('width', w);
canvas.setAttribute('height', h);

function create() {
  time = 0;
  count = 0;

  for(var i = 0; i < arc; i++) {
    parts[i] = {
      x: Math.ceil(Math.random() * w),
      y: Math.ceil(Math.random() * h),
      toX: Math.random() * 5 - 1,
      toY: Math.random() * 2 - 1,
      value: values[Math.floor(Math.random() * values.length)],
      size: Math.random() * size
    }
  }
}

function particles() {
  ctx.clearRect(0, 0, w, h);
  canvas.addEventListener('mousemove', MouseMove, false);

  for(var i = 0; i < arc; i++) {
    var li = parts[i];
    
    var distanceFactor = DistanceBetween(mouse, parts[i]);
    var fontSizeMultiplier = window.innerWidth >= 668 ? Math.max(Math.min(15 - (distanceFactor / 10), 10), 1) : 1;

    ctx.font = li.size * fontSizeMultiplier + 'px Arial';
    ctx.fillStyle = 'black';

    ctx.fillText(li.value, li.x, li.y);

    li.x = li.x + li.toX * (time * 0.05);
    li.y = li.y + li.toY * (time * 0.05);

    if (li.x > w) {
      li.x = 0; 
    }
    if (li.y > h) {
      li.y = 0; 
    }
    if (li.x < 0) {
      li.x = w; 
    }
    if (li.y < 0) {
      li.y = h; 
    }
  }

  if (time < speed) {
    time++;
  }

  setTimeout(particles, 1000 / rate);
}

function MouseMove(e) {
  mouse.x = e.layerX;
  mouse.y = e.layerY;
}

function DistanceBetween(p1, p2) {
  var dx = p2.x - p1.x;
  var dy = p2.y - p1.y;
  return Math.sqrt(dx * dx + dy * dy);
}

create();
particles();


// loader

document.addEventListener("DOMContentLoaded", function() {
  // Hide the loader when the DOM is fully loaded
  document.getElementById("loader-1").style.display = "none";
});

