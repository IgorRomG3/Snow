// FOR FIXED NAVBAR
var mainNav = document.getElementById('navbar'),
    lightLogo = document.getElementsByClassName('logo-light')[0],
    darkLogo = document.getElementsByClassName('logo-dark')[0];

    window.onscroll = function() {
      if (window.pageYOffset > 58) {
        mainNav.classList.add('fixed');
        lightLogo.style.display = "none";
        darkLogo.style.display = "block";
      } else if (window.pageYOffset < 58) {
        mainNav.classList.remove('fixed');
        lightLogo.style.display = "block";
        darkLogo.style.display = "none";
      }
    };

// FOR HEADER DOWN BUTTON
var downBtn = document.getElementsByClassName('header-down-btn')[0],
    downBtnLocation = downBtn.getBoundingClientRect().bottom + window.pageYOffset;

downBtn.onclick = function() {
  window.scrollTo(downBtnLocation,660);
} 
  
//CARUSEL

var carusel = document.getElementsByClassName('blaquote-wrap')[0],
    ul =carusel.querySelector('ul'),
    li = ul.querySelectorAll('li');

var dotLeft = document.getElementsByClassName('dotleft')[0],
    dotMiddle = document.getElementsByClassName('dotmiddle')[0],
    dotRight = document.getElementsByClassName('dotright')[0];

var width = -1160;
var position = 0;
dotLeft.onclick = function() {
  position = 0;
  ul.style.marginLeft = position + 'px';
  dotLeft.classList.add('active');
  dotMiddle.classList.remove('active');
  dotRight.classList.remove('active');
}
dotMiddle.onclick = function() {
  position = width;
  ul.style.marginLeft = position + 'px';
  dotLeft.classList.remove('active');
  dotMiddle.classList.add('active');
  dotRight.classList.remove('active');
}
dotRight.onclick = function() {
  position = width*2;
  ul.style.marginLeft = position + 'px';
  dotLeft.classList.remove('active');
  dotMiddle.classList.remove('active');
  dotRight.classList.add('active');
}