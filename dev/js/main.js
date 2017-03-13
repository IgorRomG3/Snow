// FOR FIXED NAVBAR
var mainNav = document.getElementById('navbar'),
  lightLogo = document.getElementsByClassName('logo-light')[0],
  darkLogo = document.getElementsByClassName('logo-dark')[0];

window.addEventListener("scroll", setFixedNav);

function setFixedNav() {
  if (window.pageYOffset > 58) {
    mainNav.classList.add('fixed');
    lightLogo.style.display = "none";
    darkLogo.style.display = "block";
  } else if (window.pageYOffset < 58) {
    mainNav.classList.remove('fixed');
    lightLogo.style.display = "block";
    darkLogo.style.display = "none";
  }
}

// FOR HEADER DOWN BUTTON
var downBtn = document.getElementsByClassName('header-down-btn')[0],
  downBtnLocation = downBtn.getBoundingClientRect().bottom + window.pageYOffset;

downBtn.onclick = function () {
  // window.scrollTo(downBtnLocation,660);
  var offset = 0;
  var target = 660;
  var t = setInterval(function () {
    window.scrollTo(downBtnLocation, offset);
    offset = offset + 10;
    if (offset >= target) {
      clearInterval(t);
    }
  }, 10);
}

//NUMBERS

var numContainer = document.getElementsByClassName('donelist')[0];
var num = document.getElementsByClassName('numbers');
var countNum = document.getElementsByClassName('counting');
var numContainerLocation = numContainer.getBoundingClientRect().top + window.pageYOffset;
var offset1 = 0;
var offset2 = 0;
var offset3 = 0;
var offset4 = 0;
window.addEventListener("scroll", getCountingClass);

function getCountingClass() {
  if (window.pageYOffset > 900) {
    for (var i = 0; i < num.length; i++) {
      num[i].classList.add('counting');
    }
  }
}
if (num[0].classList.contains('counting')) {
  // var numOne = setInterval(function () {
  //   var target = 548;
  //   offset1 += 1;
  //   if (offset1 >= target) {
  //     clearInterval(numOne);
  //   }
  //   countNum[0].innerHTML = offset1;
  // }, 12);
  // var numTwo = setInterval(function () {
  //   var target = 1465;
  //   offset2 += 1;
  //   if (offset2 >= target) {
  //     clearInterval(numTwo);
  //   }
  //   countNum[1].innerHTML = offset2;
  // }, 1);
  // var numThree = setInterval(function () {
  //   var target = 612;
  //   offset3 += 1;
  //   if (offset3 >= target) {
  //     clearInterval(numThree);
  //   }
  //   countNum[2].innerHTML = offset3;
  // }, 10);
  // var numFour = setInterval(function () {
  //   var target = 735;
  //   offset4 += 1;
  //   if (offset4 >= target) {
  //     clearInterval(numFour);
  //   }
  //   countNum[3].innerHTML = offset4;
  // }, 9);
  alert('hello');
}

//BLAQUOTE-CARUSEL

var caruselBlaq = document.getElementsByClassName('blaquote-wrap')[0],
  ulBlaq = caruselBlaq.querySelector('ul'),
  dotsContainerBlaq = document.getElementsByClassName('carusel-blaquote-dots')[0],
  dotsBlaq = document.querySelectorAll('.carusel-blaquote-dots > li'),
  widthBlaq = -1160,
  selectedDot,
  position = 0;

dotsContainerBlaq.addEventListener('click', function (e) {
  e = e || event;
  var target = e.target;
  setSliderPosition(dotsBlaq, target, ulBlaq, widthBlaq);
  setActiveDot(target, ['active'], dotsBlaq);
});

function setSliderPosition(container, obj, slider, step) {
  for (var i = 0; i < container.length; i++) {
    if (container[i] == obj) {
      position = i * step;
    }
  }
  slider.style.marginLeft = position + 'px';
}

function setActiveDot(node, addClass, dotsWrap) {
  if (selectedDot) {
    selectedDot.classList.remove(addClass);
  }
  dotsWrap[0].classList.remove(addClass);
  selectedDot = node;
  selectedDot.classList.add(addClass);
}

//BLOG-CARUSEL

var caruselBlog = document.getElementsByClassName('blog-wrap')[0],
  ulBlog = caruselBlog.querySelector('ul'),
  dotsContainerBlog = document.getElementsByClassName('carusel-blog-dots')[0],
  dotsBlog = document.querySelectorAll('.carusel-blog-dots > li'),
  widthBlog = -400;

dotsContainerBlog.addEventListener('click', function (e) {
  e = e || event;
  var target = e.target;
  setSliderPosition(dotsBlog, target, ulBlog, widthBlog); /*108*/
  setActiveDot(target, ['selected'], dotsBlog); /*117*/
});