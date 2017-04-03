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
  downBtnLocation = downBtn.getBoundingClientRect().bottom + window.pageYOffset,
  aboutBtn = document.getElementsByClassName('about-nav-btn')[0],
  aboutBtnLocation = aboutBtn.getBoundingClientRect().bottom + window.pageYOffset,
  contactBtn = document.getElementsByClassName('contact-nav-btn')[0];
  contactBtnLocation = contactBtn.getBoundingClientRect().bottom + window.pageYOffset;

function slideDown(data) {
  this.point = data.point;
  // this.location = data.location;
  this.point.onclick = function () {
    this.target = data.target;
    this.speed = data.speed;
    var target = this.target;
    var offset = 0;
    var speed = this.speed;
    var t = setInterval(function () {
      window.scrollTo(window.pageYOffset, offset);
      offset = offset + speed;
      if (offset >= target) {
        clearInterval(t);
      }
    },10);
  }
}
var btnDown = new slideDown({point:downBtn,
speed: 10,
target:660});
var btnAbout = new slideDown({point:aboutBtn,
speed: 10,
target:660});
var btnContact = new slideDown({point:contactBtn,
speed: 70,
target:4350});

//NUMBERS

var numContainer = document.getElementsByClassName('donelist')[0];
var num = document.getElementsByClassName('numbers');

function Count(data) {
   this.target = data.target;
   this.n = data.n;
   this.speed = data.speed;
   var offset = 0;
   var target = this.target;
   var number = setInterval(function() {
     num[data.n].innerHTML = offset;
     offset +=1;
     if(offset == target) {
       clearInterval(number);
     }
   },data.speed)
}
var countOne = new Count({target:549, n:0,speed:10});
var countTwo = new Count({target:1466, n:1,speed:1});
var countTree = new Count({target:613, n:2, speed: 10});
var countFour = new Count({target:736, n:3, speed: 8});

//BLAQUOTE-SLIDER

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
  if (target.tagName != "LI") return;
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

//BLOG-SLIDER

var caruselBlog = document.getElementsByClassName('blog-wrap')[0],
  ulBlog = caruselBlog.querySelector('ul'),
  dotsContainerBlog = document.getElementsByClassName('carusel-blog-dots')[0],
  dotsBlog = document.querySelectorAll('.carusel-blog-dots > li'),
  widthBlog = -400;

dotsContainerBlog.addEventListener('click', function (e) {
  e = e || event;
  var target = e.target;
  if (target.tagName != "LI") return;
  setSliderPosition(dotsBlog, target, ulBlog, widthBlog); /*98*/
  setActiveDot(target, ['selected'], dotsBlog); /*107*/
});